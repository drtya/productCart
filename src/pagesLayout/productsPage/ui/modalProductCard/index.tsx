"use client";
import { HTMLAttributes, ReactNode } from "react";
import styles from "./modalProductCard.module.scss";
import { IProduct } from "@/shared/model/product";
import CustomCarousel from "@/shared/ui/customCarousel";

interface Props extends HTMLAttributes<HTMLDivElement> {
  product: IProduct;
  cartBtn?: ReactNode;
}

function ModalProductCard({ product, cartBtn, ...props }: Props) {
  const { productTitle, description, images, price } = product;

  return (
    <div className={styles.productCard} {...props}>
      <div className={styles.productCardPriceAndAmount}>
        <p className={styles.productCardTitle}>
          В наличии {product.amount} штук
        </p>
        <span className={styles.productCardPrice}>{price} сом</span>
      </div>
      <div className={styles.productCardCarousel}>
        <CustomCarousel images={images} productTitle={productTitle} />
      </div>
      <div>
        <p className={styles.productCardDescr}>{description}</p>
      </div>
      <div className={styles.productCardCartArea}>{cartBtn}</div>
    </div>
  );
}

export default ModalProductCard;
