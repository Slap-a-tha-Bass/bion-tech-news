import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "@/components/footer/footer";
import Homepage from "@/components/homepage/homepage";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Home.module.css";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
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
      <main className={styles.container}>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
