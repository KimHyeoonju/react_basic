import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import ArticleItem from "./ArticleItem";

const item = [
  { id: 1, text: "게시글 1" },
  { id: 2, text: "게시글 2" },
  { id: 3, text: "게시글 3" },
  { id: 4, text: "게시글 4" },
  { id: 5, text: "게시글 5" },
];

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Layout>
        <div>
          <Outlet />
        </div>
      </Layout>
      <ul>
        {item.map(item => (
          <ArticleItem key={item.id} id={item.id} text={item.text} />
        ))}
      </ul>
    </div>
  );
};

export default Articles;
