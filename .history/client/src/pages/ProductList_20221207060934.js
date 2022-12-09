import styled from "styled-components";
import Products from "../components/Products";
import { useLocation } from "react-router";
import { useState } from "react";


const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className='Container'>

      <h1 className='Title'>{category}</h1>
      <div className='FilterContainer'>
        <div className='Filter'>
          <span className='FilterText'>Filter Products:</span>
          <select className='Select' name="color" onChange={handleFilters}>
            <option className='Option' disabled>Color</option>
            <option className='Option'>white</option>
            <option className='Option'>black</option>
            <option className='Option'>red</option>
            <option className='Option'>blue</option>
            <option className='Option'>yellow</option>
            <option className='Option'>green</option>
          </select>
          <select className='Select' name="size" onChange={handleFilters}>
            <option className='Option' disabled>Size</option>
            <option className='Option'>XS</option>
            <option className='Option'>S</option>
            <option className='Option'>M</option>
            <option className='Option'>L</option>
            <option className='Option'>XL</option>
           
          </select>
        </div>
        <div className='Filter'>
          <span className='FilterText'>Sort Products:</span>
          <select className='Select' onChange={(e) => setSort(e.target.value)}>
            <option className='Option' value="newest">Newest</option>
            <option className='Option' value="asc">Price (asc)</option>
            <option className='Option' value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
 
    </div>
  );
};

export default ProductList;