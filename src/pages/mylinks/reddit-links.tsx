import { useEffect, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import Router from "next/router";

export default function MyRedditLinks() {
  const [myLinks, setMyLinks] = useState("");
  const [linkArray, setLinkArray] = useState<[{ title: string; link: string }]>(
    [{ title: "", link: "" }]
  );

  useEffect(() => {
    const links = localStorage.getItem("links");
    if (links) {
      const parsedLinks = JSON.parse(links);
      const title = parsedLinks.map(
        (data: { data: { title: string } }) => data.data.title
      );
      const link = parsedLinks.map(
        (data: { data: { url: string } }) => data.data.url
      );
      setMyLinks(links);
      linkArray.push({ title, link });
    }
  }, [linkArray]);
  // const [linkArray, setLinkArray] = useState<{ title: string; link: string }[]>(
  //   []
  // );

  // useEffect(() => {
  //   const links = localStorage.getItem("links");
  //   if (links) {
  //     const parsedLinks: { title: string; link: string }[] = JSON.parse(links).data;
  //     setLinkArray((prevState) => [...prevState, ...parsedLinks]);
  //   }
  // }, []);
  return (
    <div className="max-w-2xl mx-auto pt-1 pb-10">
      <div className="flex justify-center items-center">
        <button
          className="bg-transparent text-xl hover:bg-transparent hover:text-sky-600 mx-4"
          onClick={() => Router.back()}
        >
          <BiLeftArrow />
        </button>
        <h1 className="text-4xl text-center py-8">My Reddit Links</h1>
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
