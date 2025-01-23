import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import results from "../types/results.ts";

const ArticleList = () => {
  const [articles, setArticles] = useState<results[]>([]);

  const getArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setArticles(data.results);
      } else throw new Error("errore nella fetch degli articoli");
    } catch (error) {
      console.error("ERRORE", error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      <h1 className="mt-5">ARTICOLI ASSURDI DAL MONDO😨</h1>
      {articles && (
        <Row className="g-2 mt-4">
          {articles.map((a) => {
            return (
              <Col xs={4} key={a.id}>
                <SingleArticle article={a} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default ArticleList;
