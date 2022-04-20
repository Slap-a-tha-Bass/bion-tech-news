import NewsApiLogo from "@/logos/newsApiLogo";
import NewsDataIoLogo from "@/logos/newsDataIoLogo";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { BsReddit } from "react-icons/bs";

export default function Homepage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p className="text-gray-500 text-right text-xs">
          Signed in as {session.user.name}
        </p>
        <div className="flex justify-end">
          <button className="px-1 rounded text-black text-xs" onClick={() => signOut()}>Sign out</button>
        </div>
        <div className="relative pt-16">
          <h4 className="text-center text-2xl text-sky-600">Select a source</h4>
          <div className="flex justify-center items-center py-8">
            <Link href="/reddit-news" passHref>
              <div className="text-5xl text-orange-600 bg-white hover:opacity-70 rounded-full border-none cursor-pointer mr-4">
                <BsReddit />
              </div>
            </Link>
            <Link href="/news-api-org" passHref>
              <div className="cursor-pointer hover:opacity-70 mr-4">
                <NewsApiLogo />
              </div>
            </Link>
            <Link href="/news-data-io" passHref>
              <div className="cursor-pointer hover:opacity-70">
                <NewsDataIoLogo />
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="rounded-full shadow-xl shadow-violet-400 flex justify-center p-4 w-3/4">
              <Image
                src="/biotech-deals.jpeg"
                alt="biotech deals"
                width={1200}
                height={400}
                placeholder="blur"
                blurDataURL="/biotech-deals.jpeg"
                priority
                className="opacity-90 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="h-80 mb-64">
          <div
            className="flex justify-center"
            style={{ marginBottom: "-4rem" }}
          >
            <Image src="/bion-logo.png" width={250} height={250} />
          </div>
          <h4 className="text-center text-2xl text-sky-600">
            Best Provider for Biotech News
          </h4>
        </div>
      </>
    );
  }
}
