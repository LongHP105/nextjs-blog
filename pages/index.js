import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import axios from "axios";
import ArticleList from "../components/ArticleList";

export async function getStaticProps() {
  const res = await axios(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.data;
  return {
    props: {
      articles,
    },
  };
}

export default function Home({ articles }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a senior student at FPT university.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Blog</h2>
        <ul className={utilStyles.list}>
         <ArticleList articles={articles}/>
        </ul>
      </section>
    </Layout>
  );
}
