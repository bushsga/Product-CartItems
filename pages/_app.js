import "@/styles/globals.css";
import { ProductProvider } from "./context/product-context";

export default function App({ Component, pageProps }) {
  return (
    <>
   <ProductProvider>
     <Component {...pageProps} />;
   </ProductProvider>
    </>
  );
}
