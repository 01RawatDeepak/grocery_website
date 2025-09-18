import React from "react";
import ProductList from "../../components/ProductList/ProductList"; // default export = array
import { Banner } from "../Banner/Banner";
import { Cards } from "../../components/Cards/Cards";

export const CategoryPage = ({ title, bgImage, categories = [] }) => {
  // Filter products based on categories
  const filteredItems = categories.includes("ALL")
    ? ProductList
    : ProductList.filter((item) => categories.includes(item.category));

  return (
    <div>
      <Banner title={title} bannerImage={bgImage} />

      <div className="grid grid-cols-1 gap-9 md:grid-cols-4 py-20 max-w-[1400px] mx-auto px-10">
        {filteredItems.map((product, index) => (
          <Cards
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
