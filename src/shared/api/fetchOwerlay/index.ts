import axios, { Method } from "axios";

async function fetchOwerlay<T>(uri: string, method: Method) {
  try {
    const data = await axios<T>(uri, { method });
    return data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const statusText = error.response?.statusText;

      if (status && status >= 400) {
        console.error(`${status}: ${statusText}`);
        throw new Error("Server Error");
      }
    }

    console.error("Unexpected error", error);
    throw new Error("Unknown error");
  }
}

export default fetchOwerlay;
