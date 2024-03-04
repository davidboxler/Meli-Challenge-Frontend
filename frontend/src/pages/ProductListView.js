import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductList from '../components/ProductList/ProductList';
import { Global } from '../global/global';

export const ProductListView = () => {
  const searchValue = window.location.href.split('=')[1];
  const [products, setProducts] = useState([]);

  const getProductsDetails = useCallback(async () => {
    const request = await fetch(Global.url + 'items/search/' + searchValue, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await request.json();
    setProducts(data.items);
  }, [searchValue]);

  useEffect(() => {
    getProductsDetails();
  }, [getProductsDetails]);

  return (
    <>
      <Navbar />
      <ProductList dataProd={products} />
    </>
  )
}

export default ProductListView;