import Image from "next/image";
import Link from "next/link";

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
      <div className="h-64 flex justify-center items-center mb-64">
        <Link href='/reddit-news'>
          <h1
            className={`text-center text-6xl cursor-pointer text-sky-600 p-8 transition ease-in-out delay-100 hover:text-sky-400 curser-pointer`}
          >
            BiON
          </h1>
        </Link>
      </div>
    </>
  );
}
