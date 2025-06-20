import { HTMLAttributes } from "react";
import styles from "./cardListOverlay.module.scss";

function CardListOverlay({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.listOverlay} ${className}`} {...props} />;
}

export default CardListOverlay;
