import React, { useEffect, useState } from "react";
import "./../style.css";

function CoinDecription({ data }) {
  const [showMore, setShowMore] = useState(false);
  const [Language, setLanguage] = useState("en");

  var shortdec = data.description[Language].slice(0, 400);
  var fulldec = data.description[Language];

  return (
    <div className="dec_box">
      <h2>{data.name}</h2>

      <p
        onClick={() => setShowMore(!showMore)}
        className="description"
        dangerouslySetInnerHTML={{ __html: showMore ? fulldec : shortdec }}
      />

      {fulldec.length > 400 && (
        <p className="readmore" onClick={() => setShowMore(!showMore)}>
          {showMore ? "read less..." : "read more..."}
        </p>
      )}
    </div>
  );
}

export default CoinDecription;
