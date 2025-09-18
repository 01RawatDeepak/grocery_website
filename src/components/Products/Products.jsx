import React, { useState } from "react";
import { Heading } from "../Heading/Heading";
import { Cards } from "../Cards/Cards";
import ProductsLists from "../ProductList/ProductList"; // ✅ correct import
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom";
export const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");

  // Filter products based on active category
  const filteredProducts =
    activeTab === "All"
      ? ProductsLists
      : ProductsLists.filter((product) => product.category === activeTab);

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Category Tabs */}
        <div className="justify-center mt-10 flex">
          <div className="flex gap-x-5 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-lg cursor-pointer font-bold text-lg transition-colors ${
                  activeTab === category
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-100 text-black hover:bg-zinc-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-18">
          {filteredProducts.slice(0,8).map((product) => (
            <Cards key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center mt-15">
        
          <Link to="/all-products" className="bg-gradient-to-b from bg-orange-400 to-bg-orange-500  text-white  px-8 py-3 rounded-lg text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">View All</Link>
        </div>
      </div>
    </section>
  );
};
