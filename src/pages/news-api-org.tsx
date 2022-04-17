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
  BASE_URL2,
  BIO_POSTS,
  BIO_POSTS2,
  EVERYTHING,
  isEmpty,
  PRE_API,
  serializeQuery,
  SUBREDDIT_URL,
  SUFFIX,
} from "@/utils";
import { data } from "autoprefixer";
import ApiNewsOrg from "@/components/news/news-api-org";

interface IServerProps {
  response: models.INewsApiResponse;
  biotechNews: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  let biotechNews = query.s;

  if (isEmpty(biotechNews)) {
    biotechNews = BIO_POSTS2;
  }
  try {
    delete query.s;

    const response = await fetch(
      `${BASE_URL2}${EVERYTHING}${biotechNews}${PRE_API}${process.env.REACT_APP_API_KEY}${serializeQuery(
        query
      )}`
    );
    console.log(response);
    const data: models.INewsApiResponse = await response.json();

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

const NewsApiOrg: NextPage<IServerProps> = ({ response, biotechNews }: IServerProps) => {
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
          {biotechNews === "biotech" ? "" : <span>{!isEmpty(biotechNews) && biotechNews !== BIO_POSTS ? `${biotechNews}` : '' }</span>}
        </div>
        <ApiNewsOrg newsPosts={response?.articles} />
      </main>
      <Footer />
    </div>
  );
};
export default NewsApiOrg;

