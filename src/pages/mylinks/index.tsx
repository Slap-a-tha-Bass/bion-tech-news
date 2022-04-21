import NewsApiLogo from "@/logos/newsApiLogo";
import NewsDataIoLogo from "@/logos/newsDataIoLogo";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import { BiLeftArrow } from "react-icons/bi";
import { BsReddit } from "react-icons/bs";

export default function MyLinks() {
  const { status } = useSession();
  if (status === "unauthenticated") {
    Router.push("/login");
  }
  return (
    <>
      <div className="flex justify-center items-center pb-16">
        <button
          className="bg-transparent text-xl hover:bg-transparent hover:text-sky-600 mx-4"
          onClick={() => Router.back()}
        >
          <BiLeftArrow />
        </button>
        <h1 className="text-4xl text-center py-8">My Saved Links</h1>
      </div>
      <div className="flex justify-center items-center py-8">
        <Link href="/mylinks/reddit-links" passHref>
          <div className="text-5xl text-orange-600 bg-white hover:opacity-70 rounded-full border-none cursor-pointer mr-4">
            <BsReddit />
          </div>
        </Link>
        <Link href="/mylinks/news-api-links" passHref>
          <div className="cursor-pointer hover:opacity-70 mr-4">
            <NewsApiLogo />
          </div>
        </Link>
        <Link href="/mylinks/news-data-links" passHref>
          <div className="cursor-pointer hover:opacity-70">
            <NewsDataIoLogo />
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link href="/" passHref>
          Back to sources
        </Link>
      </div>
    </>
  );
}
