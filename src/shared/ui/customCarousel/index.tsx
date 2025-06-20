import { Carousel, CarouselProps } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./customCarousel.module.scss";

interface Props extends CarouselProps {
  images: string[];
  productTitle: string;
}

function CustomCarousel({ images, productTitle, ...props }: Props) {
  return (
    <Carousel
      arrows={false}
      dotPosition="bottom"
      dots={true}
      autoplay={true}
      draggable={true}
      autoplaySpeed={3500}
      speed={1000}
      infinite={true}
      {...props}
    >
      {images.map((item, index) => (
        <div key={`carousel_${index}`}>
          <Image
            className={styles.CarouselImage}
            src={item}
            alt={productTitle}
            width={400}
            height={400}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
