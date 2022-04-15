import { isArray } from "@/utils";
import { useEffect, useState } from "react";

export default function News({ newsPosts}: NewsProps) {

  if (!isArray(newsPosts)) {
    return (
      <div className="pt-10 text-center text-lg">
        <span>No news found...</span>
      </div>
    );
  }
    return (
        <div className="max-w-2xl mx-auto pt-1 pb-10">
                <div>
                  
                </div>
                       
        </div>
    )
}

interface NewsProps {
  newsPosts: models.IGetPosts[];
}
