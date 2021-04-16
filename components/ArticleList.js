import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  const { articles } = props;
  return (
    <>
      {articles.map((article, id) => (
        <li className={utilStyles.listItem} key={id}>
          <ArticleItem article={article} />
        </li>
      ))}
    </>
  );
};

export default ArticleList;
