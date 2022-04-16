import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "@/components/footer/footer";
import Homepage from "@/components/homepage/homepage";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Home.module.css";
import News from "@/components/news/news";
import type { NextPage, GetServerSideProps } from "next";
import { BIO_POSTS, isEmpty, serializeQuery, SUFFIX } from "@/utils";

interface IServerProps {
  response: models.IResponse;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const query = context.query;
    let biotechNews = query.s;
    if (isEmpty(biotechNews)) {
      biotechNews = BIO_POSTS;
    }
    delete query.s;

    const response = await fetch(
      `${biotechNews}${serializeQuery(query)}${SUFFIX}`
    );

    const data: models.IResponse = await response.json();
    return {
      props: {
        response: data,
      },
    };
  } catch (error) {
    return {
      props: {
        response: null,
      },
    };
  }
};

const Home: NextPage<IServerProps> = ({ response }: IServerProps) => {
  // const [posts, setPosts] = useState([] as models.INewsPost[]);
  // const getNewsPosts = async () => {
  //   try {
  //     const res = await fetch("/api/news");
  //     const newsResponse: models.IResponse = await res.json();
  //     setPosts(newsResponse?.data?.children);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getNewsPosts();
  // }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Biotech | News</title>
        <meta name="description" content="Spreading latest news in Biotech" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" /> */}
      </Head>
      <Navbar />
      <main className={styles.container}>
        {/* <Homepage /> */}
        <News newsPosts={response?.data?.children} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;