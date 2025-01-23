import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleList from "./components/ArticleList";
import ArticleDetails from "./components/ArticleDetails";
import ArticlesNav from "./components/ArticlesNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <ArticlesNav />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:id" element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
