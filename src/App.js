import { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards";
import "./input.css";

function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=technology&apiKey=9d7e41ae0fdc4e68bc53aaccb635564f`
    )
      .then((res) => res.json())
      .then((res) => {
        setNews(res.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto xl:ml-15 m-5 px-2">
      {isLoading ? (
        <h1 className="text-center text-6xl text-rose-800 mt-4">Loading...</h1>
      ) : (
        <div className=" flex flex-wrap gap-5">
          {news.map((n) => (
            <NewsCards key={n.id} n={n} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
