import { Card } from "react-bootstrap";
import result from "../types/results.ts";
import { useNavigate } from "react-router-dom";

interface funcComponentProps {
  article: result;
}

const SingleArticle = (props: funcComponentProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        style={{ width: "400px", height: "400px" }}
        onClick={() => {
          navigate(`/${props.article.id}`);
        }}
      >
        <Card.Img
          variant="top"
          src={props.article.image_url}
          style={{ height: "250px" }}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {props.article.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleArticle;
