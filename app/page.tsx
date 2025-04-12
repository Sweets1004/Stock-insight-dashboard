'use client';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockData = [
  {
    ticker: "MSFT",
    name: "Microsoft",
    price: "$388.45",
    change: "+1.74%",
    category: "Income & Stability"
  },
  {
    ticker: "VOO",
    name: "Vanguard S&P 500 ETF",
    price: "$490.55",
    change: "+1.78%",
    category: "Income & Stability"
  },
  {
    ticker: "PLTR",
    name: "Palantir",
    price: "$88.55",
    change: "-0.06%",
    category: "Growth & IPO"
  },
  {
    ticker: "ARM",
    name: "Arm Holdings",
    price: "$103.99",
    change: "+3.42%",
    category: "Growth & IPO"
  },
  {
    ticker: "RIVN",
    name: "Rivian",
    price: "$11.47",
    change: "+0.18%",
    category: "Growth & IPO"
  }
];

const articles = [
  {
    title: "Microsoft’s AI Strategy is Working",
    url: "https://www.barrons.com/articles/microsoft-ai-growth"
  },
  {
    title: "How ETFs are Beating Hedge Funds in 2025",
    url: "https://www.bloomberg.com/news/articles/etfs-outperform-hedgefunds"
  },
  {
    title: "Palantir’s Government Contracts Expand",
    url: "https://www.reuters.com/markets/palantir-government-data"
  },
  {
    title: "Rivian's Q1 Deliveries Beat Expectations",
    url: "https://www.cnbc.com/rivian-ev-q1-2025"
  },
  {
    title: "ARM’s IPO Success Signals Chip Demand",
    url: "https://techcrunch.com/arm-holdings-ipo-analysis"
  }
];

export default function HomePage() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Top 5 Stocks to Watch (Today)</h1>
      <div className="grid gap-4 mb-10">
        {mockData.map((stock, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{stock.name} ({stock.ticker})</h2>
                  <p className="text-sm text-muted-foreground">{stock.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium">{stock.price}</p>
                  <p className={stock.change.includes("+") ? "text-green-500" : "text-red-500"}>{stock.change}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Top 5 Articles</h2>
      <div className="space-y-3">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 underline hover:text-blue-800"
          >
            {article.title}
          </a>
        ))}
      </div>
    </main>
  );
}
