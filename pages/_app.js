import "@/styles/globals.css";
import { ProductProvider } from "../lib/product-context";

export default function App({ Component, pageProps }) {
  return (
    <>
   <ProductProvider>
     <Component {...pageProps} />;
   </ProductProvider>
    </>
  );
}
