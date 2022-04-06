import { useState, useEffect, useMemo } from "react";
import { css, Global } from "@emotion/react";
import { format } from "date-fns";

const style = css`
  html,
  body {
    padding: 0;
    margin: 0;
    background: RGB(114, 99, 209);
    min-height: 100%;
    font-family: Source Sans Pro, Arial, sans-serif;
  }
`;

const Card = () => {
  return (
    <article>
      <h1>Wendy's Wonder Cafe Test</h1>
    </article>
  );
};

const IndexPage = () => (
  <>
    <Global styles={style} />
    <Card />
  </>
);

export default IndexPage;
