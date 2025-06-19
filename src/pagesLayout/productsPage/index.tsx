"use client";
import ProductCard from "@/shared/ui/productCard";
import styles from "./productsPage.module.scss";
import CartButton from "@/features/cartButton";
import { useProductStore } from "@/entity/product/store";
import { useEffect, useState } from "react";
import { getProducts } from "@/entity/product/api";

const ProductsPage = () => {
  const [isError, setIsError] = useState<string>("");
  const { isLoadProducts, productList, loadProducts } = useProductStore();

  useEffect(() => {
    getProducts().then(({ data, message }) => {
      if (message !== "OK" || !data) {
        setIsError(message);
      } else {
        loadProducts(data);
      }
    });
  }, []);

  if (!!isError) {
    return <div>{isError}</div>;
  }
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
