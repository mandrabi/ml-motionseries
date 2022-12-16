import React from "react";
import Accordion from "../../_components/accordion/Accordion";
import Specifications from "../../_components/specifications/Specifications";
import News from "../../_components/news/News";
import RecentReviews from "../../_components/recent_reviews/RecentReviews";
const PreFooter = () => {
  return (
    <div>
      <Accordion
        specs={<Specifications />}
        news={<News />}
        reviews={<RecentReviews />}
      />
    </div>
  );
};

export default PreFooter;
