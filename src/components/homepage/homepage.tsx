import Image from "next/image";

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
      <div className="h-64 flex justify-center items-center">
        <button className="bg-transparent">
          <h1
            className={`text-center text-6xl text-sky-600 p-8 transition ease-in-out delay-100 hover:text-sky-400 curser-pointer`}
          >
            BiON
          </h1>
        </button>
      </div>
      {/* <div className="flex justify-center">
        <button className="btn p-6 rounded-2xl text-3xl bg-sky-800 shadow-xl shadow-sky-500/50 transition ease-in-out delay-100 hover:bg-sky-600 hover:shadow-sky-500">Welcome</button>
      </div> */}
    </>
  );
}
