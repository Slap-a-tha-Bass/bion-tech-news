import Router from "next/router";
import { useEffect, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";

export default function MyRedditLinks() {
  const [myLinks, setMyLinks] = useState("");
  const [linkArray, setLinkArray] = useState<[{ title: string; link: string }]>(
    [{ title: "", link: "" }]
  );

  useEffect(() => {
    const links = localStorage.getItem("news-api-links");
    if (links) {
      const parsedLinks = JSON.parse(links);
      const title = parsedLinks.map(
        (data: { title: string }, index: number) => data.title
      );
      const link = parsedLinks.map(
        (data: { url: string }, index: number) => data.url
      );
      setMyLinks(links);
      linkArray.push({ title, link });
    }
  }, [linkArray]);

  return (
    <div className="max-w-2xl mx-auto pt-1 pb-10">
      <div className="flex justify-center items-center">
        <button
          className="bg-transparent text-xl hover:bg-transparent hover:text-sky-600 mx-4"
          onClick={() => Router.back()}
        >
          <BiLeftArrow />
        </button>
        <h1 className="text-4xl text-center py-8">My NewsAPI Links</h1>
      </div>
      <div>
        {linkArray.map((p, index) => {
          return (
            <div className="" key={`${p.title}-${index}`}>
              <h1>{p.title}</h1>
              <a href={p.link}>{p.link}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
