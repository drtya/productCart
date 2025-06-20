"use client";
import ProductCard from "@/pagesLayout/productsPage/ui/productCard";
import styles from "./productsPage.module.scss";
import CartButtonOpenModal from "@/features/cartButtonOpenModal";
import { useProductStore } from "@/entity/product/store";
import { useEffect, useState } from "react";
import { getProducts } from "@/entity/product/api";
import PopupOverlay from "@/shared/ui/popupOverlay";
import ModalProductCard from "./ui/modalProductCard";
import AddProductToCartForm from "@/features/addProductToCartForm";

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
  }, [loadProducts]);

  if (!!isError) {
    return <div className="textColor textCenter mt20">{isError}</div>;
  }
  if (isLoadProducts) {
    return <div className="textColor textCenter mt20">Loading...</div>;
  }
  if (!productList.length) {
    return <div className="textColor textCenter mt20">Список товаров пуст</div>;
  }

  return (
    <div className={styles.productPage}>
      {productList.map((el) => (
        <ProductCard
          cartBtn={
            <CartButtonOpenModal
              modalWindow={(cb) => (
                <PopupOverlay
                  headerTitle={el.productTitle}
                  footerButtons={
                    <AddProductToCartForm
                    closeCallback={cb}
                      product={el}
                      min={0}
                      max={el.amount}
                    />
                  }
                  closeCallback={cb}
                >
                  <ModalProductCard product={el} />
                </PopupOverlay>
              )}
              product={el}
            />
          }
          key={`product${el.productId}`}
          product={el}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
