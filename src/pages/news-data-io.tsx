import Head from "next/head";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Home.module.css";
import type { NextPage, GetServerSideProps } from "next";
import {
  API_KEY3,
  BASE_URL3,
  BIO_POSTS,
  BIO_POSTS3,
  isEmpty,
  serializeQuery,
} from "@/utils";
import NewsDataIo from "@/components/news/news-data-io";

interface IServerProps {
  response: models.INewsDataResponse;
  biotechNews: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  let biotechNews = query.s;
  
  if (isEmpty(biotechNews)) {
    biotechNews = 'biotech';
  }

  try {
    delete query.s;

    const response = await fetch(
      `${BASE_URL3}${BIO_POSTS3}${API_KEY3}&language=en&q=${biotechNews}${serializeQuery(
        query
      )}`
    );
        console.log({response});
    const data: models.INewsDataResponse = await response.json();
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

const NewsDataIoNews: NextPage<IServerProps> = ({ response, biotechNews }: IServerProps) => {
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
          <span>{!isEmpty(biotechNews) && biotechNews !== BIO_POSTS ? `${biotechNews}` : '' }</span>
        </div>
        <NewsDataIo newsPosts={response?.results} />
      </main>
      <Footer />
    </div>
  );
};
export default NewsDataIoNews;

