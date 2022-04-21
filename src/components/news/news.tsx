import { BASE_URL, BIO_POSTS, getThumbnail, isArray, isEmpty } from "@/utils";
import { useState } from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import Swal from "sweetalert2";

export default function News({ newsPosts }: NewsProps) {
  const [links, setLinks] = useState<models.INewsPost[]>([]);

  if (!isArray(newsPosts) || newsPosts.length === 0) {
    return (
      <div className="pt-10 text-center text-lg">
        <span>No news found...</span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pt-1 pb-10">
      <div>
        {newsPosts.map((p) => {
          return (
            <div className="" key={p.data.id}>
              <a
                className="relative rounded-lg border border-gray-300 bg-sky-100 hover:bg-sky-600 px-6 py-5 shadow-sm flex items-center space-x-3 my-2 hover:border-gray-400"
                href={
                  isEmpty(p.data.permalink)
                    ? BIO_POSTS
                    : `${BASE_URL}${p.data.permalink}`
                }
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex-shrink-0">
                  {
                    <img
                      className="h-10"
                      src={getThumbnail(p.data.thumbnail)}
                      alt=""
                    />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {p.data.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    posted by u/{p.data.author}
                  </p>
                </div>
              </a>
              <div className="flex justify-end">
                <button
                  className="p-2 rounded hover:bg-transparent hover:text-sky-600"
                  type="button"
                  onClick={() => {
                    links.push(p);
                    setLinks(links);
                    localStorage.setItem("links", JSON.stringify(links));
                    Swal.fire({
                      title: "Link added!",
                      text: "The link has been added to your links.",
                      icon: "success",
                      confirmButtonText: "Cool",
                      confirmButtonColor: "#0284c7",
                    });
                  }}
                >
                  <BsFillPinAngleFill />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface NewsProps {
  newsPosts: models.INewsPost[];
}
