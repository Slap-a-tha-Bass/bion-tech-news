import NewsApiLogo from "@/logos/newsApiLogo";
import NewsDataIoLogo from "@/logos/newsDataIoLogo";
import Link from "next/link";
import { BsReddit } from "react-icons/bs";

export default function MyLinks() {
  return (
    <>
      <h1 className="text-center text-4xl py-8">My Saved Links</h1>
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
    </>
  );
}
