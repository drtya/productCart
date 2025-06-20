import { HTMLAttributes, useEffect } from "react";
import styles from "./popupOverlay.module.scss";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  headerTitle: string;
  closeCallback: (bool: boolean) => void;
  footerButtons: React.ReactNode;
}

function PopupOverlay({
  headerTitle,
  closeCallback,
  footerButtons,
  children,
  ...props
}: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.popupOverlay} onClick={() => closeCallback(false)}>
      <div
        className={styles.popupWindow}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        {...props}
      >
        <div className={styles.popupWindowHeader}>
          <h3>{headerTitle}</h3>
          <button
            className={styles.popupWindowHeaderClose}
            onClick={() => closeCallback(false)}
          >
            <Image src="/images/svgs/close.svg" alt="close" />
          </button>
        </div>
        <div className={styles.popupWindowBody}>{children}</div>
        <div className={styles.popupWindowFooter}>{footerButtons}</div>
      </div>
    </div>
  );
}

export default PopupOverlay;
