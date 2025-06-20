import { IProduct } from "@/shared/model/product";
import { create } from "zustand";

interface IProductStore {
  isLoadProducts: boolean;
  productList: IProduct[];
  cartList: IProduct[];
  loadProducts: (products: IProduct[]) => void;
  deleteProductFromCart: (product: IProduct) => void;
  addProductToCart: (product: IProduct, amount: number) => void;
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
  addProductToCart: (product, amount) => {
    const { cartList, productList } = get();
    set({ isLoadProducts: true });
    const currProduct = productList.find(
      (el) => el.productId === product.productId
    );
    const currProductInCart = cartList.find(
      (el) => el.productId === product.productId
    );

    if (!currProductInCart) {
      set({ cartList: [...cartList, { ...product, amount }] });
    } else {
      set({
        cartList: cartList.map((el) =>
          el.productId === currProduct?.productId
            ? { ...el, amount: el.amount + amount }
            : el
        ),
      });
    }
    set({
      productList: productList.map((el) =>
        el.productId === currProduct?.productId
          ? { ...el, amount: el.amount - amount }
          : el
      ),
      isLoadProducts: false,
    });
  },
  deleteProductFromCart: (product) => {
    const { cartList } = get();
    set({
      cartList: cartList.filter((el) => el.productId !== product.productId),
    });
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
