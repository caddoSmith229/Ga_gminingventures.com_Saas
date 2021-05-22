import React, { useState } from "react";
import { Link } from "gatsby";

import TitledContainer from "../../../components/titledContainer";
import "./index.scss";

const Events = ({ data }) => {
  const [page, setPage] = useState(1);
  let pagLen = 1;

  const generatePagination = () => {
    const pagination = [];
    let pgCount = Math.ceil(data.length / 4);
    pagLen = pgCount;
    for (; pgCount > 0; pgCount--) {
      pagination.unshift(pgCount);
    }
    return pagination;
  };

  return (
    <TitledContainer
      title="SORT BY DATE"
      sideList={["2001"]}
      pagination={generatePagination()}
      page={page}
      setPage={setPage}
      pagLen={pagLen}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 lg:mb-10 gap-4">
        {data.map(
          ({ node: { image, title, date, linkTitle, linkUrl, formattedDate } }) => (
            <div className="event-card-container rounded-xl overflow-hidden">
              <div className="card-image">
                <img src={image?.file?.url} alt={title} className="w-full" />
              </div>
              <div className="card-detail flex flex-col gap-3 p-6">
                <h4 className="text-primary">{title}</h4>
                <p className="text-text font-xs uppercase">{formattedDate}</p>
                <Link
                  to={linkUrl}
                  className="font-xs underline uppercase text-secondary"
                >
                  {linkTitle}
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </TitledContainer>
  );
};

export default Events;
