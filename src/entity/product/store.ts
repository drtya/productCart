import { IProduct } from "@/shared/ui/productCard/productCard.interface";
import { create } from "zustand";

interface IProductStore {
  isLoadProducts: boolean;
  productList: IProduct[];
  cartList: IProduct[];
  loadProducts: (products: IProduct[]) => void;
  toggleProductFromCart: (product: IProduct) => void;
  hasInCart: (product: IProduct) => boolean;
}

const useProductStore = create<IProductStore>((set, get) => ({
  isLoadProducts: true,
  productList: [],
  cartList: [],
  loadProducts: (products) => {
    setTimeout(() => {
      set({ productList: products, isLoadProducts: false });
    }, 1000);
  },
  toggleProductFromCart: (product) => {
    const { cartList } = get();
    const hasProductInList =
      cartList.find((el) => el.productId === product.productId) ?? null;

    if (!hasProductInList) {
      set({ cartList: [...cartList, product] });
    } else {
      set({
        cartList: cartList.filter((el) => el.productId !== product.productId),
      });
    }
  },
  hasInCart: (product) => {
    const { cartList } = get();
    const hasProductInList = !!cartList.find(
      (el) => el.productId === product.productId
    );
    return hasProductInList;
  },
}));

export { useProductStore };
