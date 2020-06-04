import React from "react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";

import Home from "./Home";
import Post from "./Post";
import Blog from "./Blog";
import Header from "./Header";
import Theme from "./Theme";
// import Loading from "./Loading";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Theme />
      <Header />
      <main>
        <Switch>
          {/* <Loading when={data.isFetching} /> */}
          <Home when={data.isHome} posts={state.source.post} />
          <Post when={(data.isPage || data.isPost) && data.route != "/blog/"} />
          <Blog when={data.route === "/blog/"} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
