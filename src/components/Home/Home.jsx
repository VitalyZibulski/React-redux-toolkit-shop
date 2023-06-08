import React from 'react';
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { useSelector } from "react-redux";

const Home = () => {
  const {products, categories} = useSelector((state) => state)

  return (
    <>
      <Poster />
      <Products products={products.list} amount={5} title="Trending" />
      <Categories categories={categories.list} amount={5} title="Worth seeing" />
      <Banner />
    </>
  );
};

export default Home;
