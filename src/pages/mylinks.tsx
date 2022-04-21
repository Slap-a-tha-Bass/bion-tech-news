import { useEffect, useState } from "react";

interface ILink {
  title: string;
  url: string;
}

export default function MyLinks() {
  const [myLinks, setMyLinks] = useState("");
  useEffect(() => {
    const links = localStorage.getItem("links");
    if (links) {
      const parsedLinks = JSON.parse(links);
      setMyLinks(parsedLinks);
    }
  }, [myLinks]);
  return <h1>{myLinks}</h1>;
}
