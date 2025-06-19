"use client";
import ProductCard from "@/shared/ui/productCard";
import styles from "./productsPage.module.scss";
import CartButton from "@/features/cartButton";
import { useProductStore } from "@/entity/product/store";
import { useEffect } from "react";
import { products } from "@/shared/api/products/products.data";

const ProductsPage = () => {
  const {
    isLoadProducts,
    productList,
    loadProducts,
  } = useProductStore();

  useEffect(() => {
    const productList = products;
    loadProducts(productList);
  }, []);

  if (isLoadProducts) {
    return <div>Loading...</div>;
  }
  if (!productList.length) {
    return <div>Список товаров пуст</div>;
  }

  return (
    <div className={styles.productPage}>
      {productList.map((el) => (
        <ProductCard
          cartBtn={<CartButton product={el} />}
          key={`product${el.productId}`}
          product={el}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
