import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (router.pathname === "/reddit-news") {
      router.push(`/reddit-news/?s=${search}`);
    }
    if (router.pathname === "/news-api-org") {
      router.push(`/news-api-org/?s=${search}`);
    }
    if (router.pathname === "/news-data-io") {
      router.push(`/news-data-io/?s=${search}`);
    }
  };
  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-8 lg:divide-y lg:divide-gray-200">
        <div className="relative h-24 flex justify-between items-center">
          <div className="relative z-10">
            <div className="flex-shrink-0 flex items-center ">
              <Link href="/">
                <div className="pt-2 cursor-pointer hover:brightness-150">
                  <Image src="/bion-logo.png" width={125} height={125} />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <form className="w-full max-w-2xl" onSubmit={onSubmit}>
              <input
                type="search"
                placeholder="Search Biotech News"
                className="block w-full bg-sky-600 border border-sky-800 placeholder-white rounded-lg py-2 px-3 text-sm text-white opacity-60 focus:opacity-100 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}