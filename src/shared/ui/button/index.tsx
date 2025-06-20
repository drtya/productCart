import React from "react";
import styles from "./button.module.scss";

function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.button} ${className}`} {...props}/>
  );
}

export default Button;
