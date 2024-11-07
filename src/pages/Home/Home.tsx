import React from "react";
import { Banner, Catalogs, Comments, Gallery, Statistics } from "@/components";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <Statistics />
      <Catalogs />
      <Comments />
      <Gallery />
    </>
  );
};

export default Home;
