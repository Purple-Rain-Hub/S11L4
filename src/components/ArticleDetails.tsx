import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import results from "../types/results.ts";

const ArticleDetails = () => {
  const [articles, setArticles] = useState<results>();
  const params = useParams();
  const getDetails = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/" + params.id
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setArticles(data);
      } else throw new Error("errore nella fetch getDetails");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <h1 className="mt-5">{articles?.title}</h1>
      <div className="d-flex align-items-center mt-5">
        <div>
          <img src={articles?.image_url} width={"60%"} />
        </div>
        <div className=" text-start">
          <h6>{articles?.summary}</h6>
          <p className="mt-2">
            Article from {articles?.news_site} in{" "}
            {articles?.published_at
              ? new Date(articles.published_at).toLocaleDateString()
              : "unknown"}
          </p>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
