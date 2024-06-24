"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [articleNumber, setArticleNumber] = useState(5);

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <div className="bg-gray-100 p-2 rounded-xl">
      <h1 className="text-xl font-bold text-slate-700 py-2 px-2">
        What,s happend
      </h1>
      {news.slice(0, articleNumber).map((article) => (
        <div key={article.url}>
          <a href={article.url} target="_blank">
            <div className="flex justify-between items-center px-4 py-2 space-x-1 hover:bg-gray-200 transition-all duration-300 rounded">
              <div className="space-y-0-5">
                <h6 className="text-sm font-bold">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">
                  {article.source.name}
                </p>
              </div>
              <Image
                src={article.urlToImage}
                width={70}
                height={70}
                alt={article.title}
                className="rounded"
              />
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setArticleNumber(articleNumber + 3)}
        className="text-blue-500 ml-4 my-2 duration-200"
      >
        See more
      </button>
    </div>
  );
};

export default News;
