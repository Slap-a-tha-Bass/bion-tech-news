import { BIO_POSTS, getThumbnail, isArray, isEmpty } from "@/utils";

export default function NewsDataIo({ newsPosts }: NewsDataIoProps) {
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
        {newsPosts.map((p, index) => {
            return (
              <a
                key={`${p.title}-${index}`}
                className="relative rounded-lg border border-gray-300 bg-sky-100 hover:bg-sky-600 px-6 py-5 shadow-sm flex items-center space-x-3 my-2 hover:border-gray-400"
                href={isEmpty(p.link) ? BIO_POSTS : `${p.link}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex-shrink-0">
                  {
                    <img
                      className="h-10"
                      src={getThumbnail(p.image_url)}
                      alt={p.source_id}
                    />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{p.title}</p>
                  {p.creator === null ? (
                    ``
                  ) : (
                    <p className="text-xs text-gray-500 truncate">
                      by {p.creator}
                    </p>
                  )}
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
}

interface NewsDataIoProps {
  newsPosts: models.INewsDataPost[];
}
