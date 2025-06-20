import React from "react";
import styles from "./button.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ color, className, children, ...props }: Props) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
