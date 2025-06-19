"use client";
import ProductCard from "@/shared/ui/productCard";
import styles from "./productsPage.module.scss";
import CartButton from "@/features/cartButton";
import { useProductStore } from "@/entity/product/store";

const CartPage = () => {
  const {
    cartList,
  } = useProductStore();

  if (!cartList.length) {
    return <div>Список товаров пуст</div>;
  }

  return (
    <div className={styles.productPage}>
      {cartList.map((el) => (
        <ProductCard
          cartBtn={<CartButton product={el} />}
          key={`product${el.productId}`}
          product={el}
        />
      ))}
    </div>
  );
};

export default CartPage;
