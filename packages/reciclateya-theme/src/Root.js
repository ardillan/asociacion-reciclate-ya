import React from "react";
import { connect } from "frontity";

import Link from "./Link";
import List from "./List";
import Post from "./Post";
import Blog from "./Blog";

import Theme from "./Theme";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Theme />
      <h1>Recíclate YA 🐲</h1>
      <p>{state.router.link}</p>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/la-asociacion">La asociación</Link>
        <Link href="/blog/">Blog</Link>
      </nav>
      <main>
        {data.isPost && <Post />}
        {data.isPage && <Post />}
        {state.router.link === "/blog/" && <Blog />}
      </main>
    </>
  );
};

export default connect(Root);
