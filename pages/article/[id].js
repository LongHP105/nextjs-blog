// import React from "react"
import Layout from "../../components/layout";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.scss";
import axios from "axios";

export default function Article(props) {
    console.log(props)
    const {data} = props
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{data.title}</h1>
        <p>{data.body}</p>
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = res.data;
  const paths = articles.map((article) => {
    return { params: { id: article.id.toString() } };
  });
  console.log(paths )
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}
