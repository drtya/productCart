import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="number"
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
}

export default Input;
