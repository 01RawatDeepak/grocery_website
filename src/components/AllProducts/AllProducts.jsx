import React from "react";
import { CategoryPage } from "../CategoryPage/CategoryPage";
import BgAll from "../../assets/all-banner.jpg";   // ✅ default import

export const AllProducts = () => {
  return (
    <div>
      <CategoryPage title="All Products" bgImage={BgAll} categories={['ALL']}  />
    </div>
  );
};
