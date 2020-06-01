import React from "react";
import { connect } from "frontity";

import Link from "./Link";
import Home from "./Home";
import Post from "./Post";
import Blog from "./Blog";

import Header from "./Header";

import Theme from "./Theme";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Theme />
      <Header />
      <main>
        {data.isPost && <Post />}
        {data.isPage && <Post />}
        {state.router.link === "/" && <Home posts={state.source.post} />}
        {state.router.link === "/blog/" && <Blog posts={state.source.post} />}
      </main>
    </>
  );
};

export default connect(Root);
