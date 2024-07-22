import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ titleTxt, metaContent, link_URL }) => {
  return (
    <Helmet>
      <title>{titleTxt}</title>
      <meta name="description" content={metaContent} />
      <link rel="canonical" href={link_URL} />
    </Helmet>
  );
};

export default Meta;
