import { products } from "@/shared/api/products/products.data";
import ProductCard from "@/shared/ui/productCard";
import styles from "./productsPage.module.scss";
import CartButton from "@/features/cartButton";

const ProductsPage = () => {
  return (
    <div className={styles.productPage}>
      {products.map((el) => (
        <ProductCard cartBtn={<CartButton productId={el.productId} />} key={`product${el.productId}`} product={el} />
      ))}
    </div>
  );
};

export default ProductsPage;
