import fetchOwerlay from "@/shared/api/fetchOwerlay";
import { HttpResponse } from "@/shared/model";
import { IProduct } from "@/shared/model/product";

async function getProducts(): Promise<HttpResponse<IProduct[]>> {
  try {
    const data = await fetchOwerlay<IProduct[]>("/api/products", "GET");
    return {
      message: "OK",
      data,
    };
  } catch (error) {
    return {
      message: String(error),
      data: null,
    };
  }
}

export { getProducts };
