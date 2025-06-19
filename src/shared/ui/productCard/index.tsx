"use client";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { IProduct } from "./productCard.interface";
import styles from "./productCard.module.scss";
import { Carousel } from "antd";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  product: IProduct;
  cartBtn: ReactNode;
}

function ProductCard({ product, cartBtn, ...props }: Props) {
  const {  productTitle, description, rate, images, price } = product;
  const rateToPercent = (rating: number) => {
    const percent = (Math.max(0, Math.min(rating, 5)) / 5) * 100;
    return `${percent}%`;
  };
  return (
    <div className={styles.productCard} {...props}>
      <Carousel
        arrows={false}
        dotPosition="bottom"
        dots={true}
        autoplay={true}
        draggable={true}
        autoplaySpeed={3500}
        speed={1000}
        infinite={true}
      >
        {images.map((item, index) => (
          <Image
            key={`carousel_${index}`}
            src={item}
            className={styles.productCardImage}
            alt={productTitle}
            width={400}
            height={400}
          />
        ))}
      </Carousel>
      <div>
        <p className={styles.productCardTitle}>{productTitle}</p>
        <p className={styles.productCardDescr}>{description}</p>
        <div className={styles.productCardPriceAndRate}>
          <div className={styles.productCardRate}>
            <div
              className={styles.productCardStars}
              style={{ "--rating": rateToPercent(rate) } as CSSProperties}
            />
            <span>{rate}</span>
          </div>
          <span className={styles.productCardPrice}>{price} сом</span>
        </div>
      </div>
      <div className={styles.productCardCartArea}>{cartBtn}</div>
    </div>
  );
}

export default ProductCard;
