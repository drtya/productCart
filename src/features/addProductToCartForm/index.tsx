"use client";
import { useProductStore } from "@/entity/product/store";
import { IProduct } from "@/shared/model/product";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { MouseEvent, useState } from "react";

interface Props {
  min: number;
  max: number;
  product: IProduct;
  closeCallback: () => void;
}
function AddProductToCartForm({ min, max, product, closeCallback }: Props) {
  const { addProductToCart } = useProductStore();

  const [quantity, setQuantity] = useState<number>(0);
  const addToCartHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // чтобы не было перезагрузки страницы
    e.stopPropagation();
    if (quantity > min && quantity <= max) {
      addProductToCart(product, quantity);
      closeCallback();
    }
  };
  return (
    <div className="flexBetween">
      <Input
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        placeholder="Количeство..."
      />
      <Button onClick={addToCartHandler}>Добавить в карзину</Button>
    </div>
  );
}

export default AddProductToCartForm;
