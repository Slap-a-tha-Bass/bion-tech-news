import NewsApiLogo from "@/logos/newsApiLogo";
import NewsDataIoLogo from "@/logos/newsDataIoLogo";
import Image from "next/image";
import Link from "next/link";
import { BsReddit } from "react-icons/bs";
export default function Homepage() {
  return (
    <>
      <div className="relative pt-32">
        <div className="rounded-full shadow-xl shadow-violet-400">
          <Image
            src="/biotech-deals.jpeg"
            layout="responsive"
            width={1400}
            height={400}
            placeholder="blur"
            blurDataURL="/biotech-deals.jpeg"
            priority
            className="opacity-90 rounded-full"
          />
        </div>
      </div>
      <div className="h-80 mb-64">
        <Link href="/reddit-news">
          <h1 className="text-center text-6xl cursor-pointer text-sky-600 p-8 transition ease-in-out delay-100 hover:text-sky-400 curser-pointer">
            BiON
          </h1>
        </Link>
        <h4 className="text-center text-2xl text-sky-600">
          Best Provider for Biotech News
        </h4>
        <div className="flex justify-center pt-8">
          <Link href="/reddit-news">
            <div className="text-7xl text-orange-600 bg-white hover:brightness-150 rounded-full border-none cursor-pointer">
              <BsReddit />
            </div>
          </Link>
          <Link href="/news-api-org">
            <div className="cursor-pointer hover:brightness-150">
              <NewsApiLogo />
            </div>
          </Link>
          <Link href="/news-data-io">
            <div className="cursor-pointer hover:brightness-150">
              <NewsDataIoLogo />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
