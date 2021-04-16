import Link from "next/link";
const ArticleItem = (props) => {
  const { article } = props;
  return (
    <Link href={`/article/${article.id}`}>
      <a>{article.title}</a>
    </Link>
  );
};

export default ArticleItem;
