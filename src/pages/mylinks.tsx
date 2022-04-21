import { useEffect, useState } from "react";

interface ILink {
    title: string;
    url: string;
}

export default function MyLinks() {
    const [myLinks, setMyLinks] = useState('');
    useEffect(() => {
        const links = localStorage.getItem("links");
        if (links) {
            setMyLinks(links);
        }
        console.log({myLinks});
    }, [myLinks]);
    return (
        <h1>{myLinks}</h1>
    )
}