import React, { useState, useEffect, useCallback } from "react";
import { Grid, Typography, Link } from "@mui/material";
import useStyles from "./style";
import ActionsBar from "../ActionsBar/ActionsBar";
import Product from "./Product";
import ProductAdd from "./ProductSecDet/ProductAdd";
import ProductDescriptions from "./ProductSecDet/ProductDescriptions";
import ProductEdit from "./ProductSecDet/ProductEdit";
import { getProducts } from "../../service/serviceBestBuy";
import PageAction from "./PageAction";
import SectionManager from "./ProductSecDet/sectionManager";
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
    sort: "",
  });
  const [search, setSearch] = useState(null);
  useEffect(async () => {
    const p = await getProducts(elements_by_users, search);
    localStorage.setItem("p", JSON.stringify(p.data));
    setProductsDetails(JSON.parse(localStorage.getItem("products")));
  }, []);

  useEffect(async () => {
    const p = await getProducts(elements_by_users, search);
    localStorage.setItem("products", JSON.stringify(p.data));
    setProductsDetails(JSON.parse(localStorage.getItem("products")));
  }, [elements_by_users]);

  useEffect(async () => {
    if (search === "") {
      setSearch(null);
    }
    const p = await getProducts(elements_by_users, search);
    localStorage.setItem("products", JSON.stringify(p.data));
    setProductsDetails(JSON.parse(localStorage.getItem("products")));
  }, [search]);

  const deleteProduct = useCallback((item) => {
    let s = JSON.parse(localStorage.getItem("products"));
    let productsAFterDelete = s.products.filter((p) => p.sku != item.sku);
    s["products"] = productsAFterDelete;
    localStorage.setItem("products", JSON.stringify(s));
    setProductsDetails(JSON.parse(localStorage.getItem("products")));
  }, []);

  const productSectionManeger = useCallback((page) => {
    let pages = productType;
    for (let key in pages) {
      if (key === page) {
        pages[key] = true;
      } else {
        pages[key] = false;
      }
    }
    setProductType(pages);
  }, []);

  return (
    <div className={classes.header}>
      <ActionsBar
        setSearch={setSearch}
        setElements_by_users={setElements_by_users}
        elements_by_users={elements_by_users}
        setProductType={setProductType}
        productType={productType}
      />
      <div className={classes.productsWrap}>
        {productsDetails ? (
          <Product
            products={productsDetails.products}
            setSelectedProduct={setSelectedProduct}
            setProductType={setProductType}
            productType={productType}
            deleteProduct={deleteProduct}
            productSectionManeger={productSectionManeger}
          />
        ) : null}
        <SectionManager
          selectedProduct={selectedProduct}
          deleteProduct={deleteProduct}
          setProductType={setProductType}
          productType={productType}
          productSectionManeger={productSectionManeger}
          setProductsDetails={setProductsDetails}
        />

        <PageAction
          productsDetails={productsDetails}
          elements_by_users={elements_by_users}
          setElements_by_users={setElements_by_users}
        />
      </div>
    </div>
  );
};

export default ProductsWidget;
