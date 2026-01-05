import React, { useState, useEffect } from "react";

// --- კონფიგურაცია ---
const API_KEY = "d5drgnpr01qjucj3kk6gd5drgnpr01qjucj3kk70";

interface Stock {
  id: number;
  symbol: string;
  name: string;
  price: number;
  change: number;
  logo: string;
}

interface FinnhubResponse {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
}

const SectionThree: React.FC = () => {
  const baseStocks: Stock[] = [
    {
      id: 1,
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 0,
      change: 0,
      logo: "🍎",
    },
    {
      id: 2,
      symbol: "MSFT",
      name: "Microsoft",
      price: 0,
      change: 0,
      logo: "🪟",
    },
    {
      id: 3,
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 0,
      change: 0,
      logo: "🔍",
    },
    {
      id: 4,
      symbol: "AMZN",
      name: "Amazon.com",
      price: 0,
      change: 0,
      logo: "📦",
    },
    {
      id: 5,
      symbol: "NVDA",
      name: "NVIDIA Corp",
      price: 0,
      change: 0,
      logo: "🎮",
    },
    {
      id: 6,
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 0,
      change: 0,
      logo: "🚗",
    },
    {
      id: 7,
      symbol: "META",
      name: "Meta Platforms",
      price: 0,
      change: 0,
      logo: "♾️",
    },
    { id: 8, symbol: "NFLX", name: "Netflix", price: 0, change: 0, logo: "🍿" },
    { id: 9, symbol: "AMD", name: "AMD Inc.", price: 0, change: 0, logo: "💻" },
    {
      id: 10,
      symbol: "INTC",
      name: "Intel Corp",
      price: 0,
      change: 0,
      logo: "💾",
    },
  ];

  const [stocks, setStocks] = useState<Stock[]>(baseStocks);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchStockData = async () => {
    // 300 მილიწამიანი პაუზა მოთხოვნებს შორის, რომ API-მ არ დაგბლოკოს
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const updatedStocks = [...baseStocks];
    setLoading(true);

    for (let i = 0; i < baseStocks.length; i++) {
      const stock = baseStocks[i];

      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=${API_KEY}`
        );

        if (response.ok) {
          const data: FinnhubResponse = await response.json();
          if (data.c) {
            updatedStocks[i] = {
              ...stock,
              price: data.c,
              change: data.dp,
            };
          }
        } else {
          console.warn(
            `სტოკი ${stock.symbol} ვერ ჩაიტვირთა: ${response.status}`
          );
        }
      } catch (error) {
        console.error(`Error fetching ${stock.symbol}`, error);
      }

      await delay(300); // ველოდებით ცოტა ხანს შემდეგი სტოკის წამოღებამდე
    }

    setStocks(updatedStocks);
    setLoading(false);
  };

  useEffect(() => {
    // მხოლოდ ერთხელ გამოიძახება ჩატვირთვისას
    fetchStockData();

    // აქ ადრე ეწერა setInterval, რომელიც წავშალე
  }, []);

  return (
    <section className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            ბაზრის მიმოხილვა
            <br />
            <span className="text-gray-500 font-normal block mt-2 text-xl md:text-2xl">
              ტოპ კომპანიების ღირებულება ლაივ რეჟიმში
            </span>
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64 w-full">
            <div className="relative flex justify-center items-center">
              <div className="absolute animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
              <div className="rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-200 opacity-30"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {stocks.map((stock) => {
              const isPositive = stock.change >= 0;

              return (
                <div
                  key={stock.id}
                  className="bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl filter grayscale group-hover:grayscale-0 transition-all">
                        {stock.logo}
                      </span>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {stock.symbol}
                        </h4>
                        <p className="text-xs text-gray-500 truncate max-w-[80px]">
                          {stock.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-2xl font-mono font-bold text-gray-900">
                      ${stock.price ? stock.price.toFixed(2) : "0.00"}
                    </span>

                    <div
                      className={`flex items-center gap-1 text-sm font-semibold mt-1 ${
                        isPositive ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      <span>
                        {isPositive ? "▲" : "▼"}{" "}
                        {stock.change ? stock.change.toFixed(2) : "0.00"}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionThree;
