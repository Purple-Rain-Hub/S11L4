import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import results from "../types/results.ts";
import { Col, Row } from "react-bootstrap";

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
      <h1>{articles?.title}</h1>
      <div className="d-flex align-items-center">
        <div>
          <img src={articles?.image_url} width={"60%"} />
        </div>
        <div className=" text-start">
          <h6>{articles?.summary}</h6>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
