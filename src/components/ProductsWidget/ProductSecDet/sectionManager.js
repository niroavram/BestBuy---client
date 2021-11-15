import React,{useState,useCallback,useEffect} from "react";
import useStyles from "../style";
import ProductAdd from "./ProductAdd";
import ProductDescriptions from "./ProductDescriptions";
import ProductEdit from "./ProductEdit";

 const SecionManager = ({productSectionManeger,setProductsDetails,selectedProduct,deleteProduct,setProductType,productType}) => {
    const classes =useStyles();
    useEffect(() => {
      return  console.log(productType)
    }, [productType])
    console.log(productType)

 return (
   <div className={classes.productType} >
         {productType.description ? (
          <ProductDescriptions
            selectedProduct={selectedProduct}
            deleteProduct={deleteProduct}
            setProductType={setProductType}
            productType={productType}
            productSectionManeger={productSectionManeger}
          />
        ) : productType.edit ? (
          <ProductEdit
            selectedProduct={selectedProduct}
            setProductsDetails={setProductsDetails}
            productSectionManeger={productSectionManeger}
          />
        ) : (
          <ProductAdd
            productSectionManeger={productSectionManeger}
            setProductsDetails={setProductsDetails}
          />
        )}
   </div>
 );
}

export default SecionManager