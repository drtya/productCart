"use client";
import { useProductStore } from "@/entity/product/store";
import ProductCard from "../productsPage/ui/productCard";
import DeleteProdFromCartBtn from "@/features/deleteProdFromCartBtn";
import CardListOverlay from "@/shared/ui/cardListOverlay";

const CartPage = () => {
  const { cartList } = useProductStore();

  if (!cartList.length) {
    return <div className="textColor textCenter mt20">Корзина пуста</div>;
  }

  return (
    <CardListOverlay>
      {cartList.map((el) => (
        <ProductCard
          cartBtn={<DeleteProdFromCartBtn product={el} />}
          key={`product${el.productId}`}
          product={el}
        />
      ))}
    </CardListOverlay>
  );
};

export default CartPage;
