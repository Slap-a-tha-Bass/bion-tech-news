import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "@/components/footer/footer";
import Homepage from "@/components/homepage/homepage";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Home.module.css";
import News from "@/components/news/news";
import type { NextPage, GetServerSideProps } from "next";
import {
  BASE_URL,
  BIO_POSTS,
  isEmpty,
  serializeQuery,
  SUBREDDIT_URL,
  SUFFIX,
} from "@/utils";

interface IServerProps {
  response: models.IRedditResponse;
  biotechNews: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  let biotechNews = query.s;
  if (isEmpty(biotechNews)) {
    biotechNews = BIO_POSTS;
  }
  const REDDIT_NEWS = `reddit-news/`
  try {
    delete query.s;

    const response = await fetch(
      `${BASE_URL}${SUBREDDIT_URL}${biotechNews}${SUFFIX}${serializeQuery(
        query
      )}`
    );
    // const response = await fetch(
    //   `${BASE_URL2}${EVERYTHING}${BIO_POSTS2}${API_KEY}${serializeQuery(
    //     query
    //   )}`
    // );
    const data: models.IRedditResponse = await response.json();
    return {
      props: {
        response: data,
        biotechNews,
      },
    };
  } catch (error) {
    return {
      props: {
        response: null,
        biotechNews,
      },
    };
  }
};

const RedditNews: NextPage<IServerProps> = ({ response, biotechNews }: IServerProps) => {
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
        <div className="absolute top-20 text-xs text-center w-full">
          <span>{!isEmpty(biotechNews) && biotechNews !== BIO_POSTS ? `/r/${biotechNews}` : '' }</span>
        </div>
        {/* <Homepage /> */}
        <News newsPosts={response?.data?.children} />
      </main>
      <Footer />
    </div>
  );
};
export default RedditNews;

