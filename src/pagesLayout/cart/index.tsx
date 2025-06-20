"use client";
import styles from "./productsPage.module.scss";
import CartButtonOpenModal from "@/features/cartButtonOpenModal";
import { useProductStore } from "@/entity/product/store";
import ProductCard from "../productsPage/ui/productCard";
import DeleteProdFromCartBtn from "@/features/deleteProdFromCartBtn";

const CartPage = () => {
  const { cartList } = useProductStore();

  if (!cartList.length) {
    return <div className="textColor textCenter mt20">Корзина пуста</div>;
  }

  return (
    <div className={styles.productPage}>
      {cartList.map((el) => (
        <ProductCard
          cartBtn={<DeleteProdFromCartBtn product={el} />}
          key={`product${el.productId}`}
          product={el}
        />
      ))}
    </div>
  );
};

export default CartPage;
