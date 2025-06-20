import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
function Input({ className, ...props }: Props) {
  return (
    <input
      type="number"
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
}

export default Input;
