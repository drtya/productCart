"use client";
import { HTMLAttributes, ReactNode } from "react";
import styles from "./productCard.module.scss";
import { IProduct } from "@/shared/model/product";
import CustomCarousel from "@/shared/ui/customCarousel";
import RatingStar from "@/shared/ui/ratingStar";

interface Props extends HTMLAttributes<HTMLDivElement> {
  product: IProduct;
  cartBtn?: ReactNode;
}

function ProductCard({ product, cartBtn, ...props }: Props) {
  const { productTitle, description, rate, images, price, amount } = product;

  return (
    <div className={styles.productCard} {...props}>
      <div className={styles.productCardCarousel}>
        <CustomCarousel images={images} productTitle={productTitle} />
      </div>
      <div>
        <p className={styles.productCardTitle}>{productTitle}</p>
        <p className={styles.productCardDescr}>{description}</p>
        <div className={styles.productCardPriceAndRate}>
          <RatingStar rate={rate} />
          <span className={styles.productCardPrice}>{price} сом</span>
        </div>
      </div>
      <div className={styles.productCardCartArea}>{cartBtn}</div>
      <div className={styles.productCardAmount}>{amount} шт</div>
    </div>
  );
}

export default ProductCard;
