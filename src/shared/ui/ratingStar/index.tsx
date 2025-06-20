import { CSSProperties } from "react";
import styles from "./ratingStar.module.scss";

function RatingStar({ rate }: { rate: number }) {
  const rateToPercent = (rating: number) => {
    const percent = (Math.max(0, Math.min(rating, 5)) / 5) * 100;
    return `${percent}%`;
  };

  return (
    <div className={styles.rating}>
      <div
        className={styles.ratingStars}
        style={{ "--rating": rateToPercent(rate) } as CSSProperties}
      />
      <span>{rate}</span>
    </div>
  );
}

export default RatingStar;
