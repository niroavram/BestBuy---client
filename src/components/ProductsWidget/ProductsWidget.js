import React, { useState,useEffect,useCallback } from "react";
import { Grid } from "@mui/material";
import useStyles from "./style";
import { images } from "../../constants";
import ActionsBar from "../ActionsBar/ActionsBar";
import Product from "./Product";
import ProductAdd from "./ProductAdd";
import ProductDescriptions from "./ProductDescriptions";
import ProductEdit from "./ProductEdit";
import {getProducts} from "../../service/serviceBestBuy"

const ProductsWidget = () => {
  const classes = useStyles();
  const [productType, setProductType] = useState({
    description: true,
    edit: false,
    add: false,
  });
  const [productsDetails, setProductsDetails] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [elements_by_users, setElements_by_users] = useState({
    page: 1,
    sort: ''
  });
  const [search, setSearch] = useState(null);
  useEffect(async () => {
    const p = await getProducts(elements_by_users,search);
    localStorage.setItem("p", JSON.stringify(p.data));
    setProductsDetails( JSON.parse(localStorage.getItem("products")) );
  }, []);

  useEffect(async () => {
    const p = await getProducts(elements_by_users,search);
    localStorage.setItem("products", JSON.stringify(p.data));
    setProductsDetails( JSON.parse(localStorage.getItem("products")) );
  }, [elements_by_users]);

  useEffect(async () => { 
      if(search===""){
          setSearch(null)
      }
    const p = await getProducts(elements_by_users,search);
    localStorage.setItem("products", JSON.stringify(p.data));
    setProductsDetails( JSON.parse(localStorage.getItem("products")) );
  }, [search]);



  return (
    <div className={classes.header}>
        <ActionsBar setSearch={setSearch} setElements_by_users={setElements_by_users} elements_by_users={elements_by_users} />
        <div className={classes.productsWrap}>
        {productsDetails?
    <Product products={productsDetails.products} setSelectedProduct={setSelectedProduct} setProductType={setProductType} productType={productType} />:null
      }
        {productType.description ? (
        <ProductDescriptions selectedProduct={selectedProduct} />
      ) : productType.edit ? (
        <ProductEdit selectedProduct={selectedProduct}/>
      ) : (
        <ProductAdd />
      )}
        </div>
    </div>
  );
};

export default ProductsWidget;
