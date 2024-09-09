import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import data from '../pages/data/data.json';


const ProductContext = createContext(undefined);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(data ? data : []);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
      const cartProducts = cartItems.map(item => ({ ...item}));
      cartProducts.push({
        image: {
           thumbnail: item.image.thumbnail,
        },
        name: item.name,
        price: item.price,
        quantity: 1,
      });

      setCartItems(cartProducts);
      localStorage.setItem("cartItems", JSON.stringify(cartProducts));
    }

    const isItemInCart = (itemName) => cartItems.findIndex(item => item.name === itemName) !== -1;

    const getCartItemQty = itemName => cartItems.filter(item => item.name === itemName)[0].quantity;

    const decrementCartQty = (itemName) => {
      let cartProducts = cartItems.map(item => ({...item}));
      cartProducts = cartProducts.map(item => {
        if (item.name == itemName && item.quantity > 1) {
          item.quantity -= 1;
        }

        return item;
      });

      setCartItems(cartProducts);
      localStorage.setItem("cartItems", JSON.stringify(cartProducts));
    };

    const incrementCartQty = (itemName) => {
      let cartProducts = cartItems.map(item => ({...item}));
      cartProducts = cartProducts.map(item => {
        if (item.name == itemName) {
          item.quantity += 1;
        }

        return item;
      });

      setCartItems(cartProducts);
      localStorage.setItem("cartItems", JSON.stringify(cartProducts));
    };

     const removeCartItem = (itemName) => {
      let cartProducts = cartItems.map(item => ({ ...item }));
      cartProducts = cartProducts.filter(item => item.name !== itemName);

      setCartItems(cartProducts);
      localStorage.setItem("cartItems", JSON.stringify(cartProducts));
     };

     const resetCartItem = () => {
      setCartItems([]);
      localStorage.removeItem("cartItems");
     }

    const totalCartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const totalOrderPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    useEffect(() => {
      const cartProducts = JSON.parse(localStorage.getItem("cartItems"));

      if (cartProducts) {
        setCartItems(cartProducts);
      } 
    }, []);

    return (
        <ProductContext.Provider value={{ products, cartItems, totalCartItemsCount, totalOrderPrice, isItemInCart, addItemToCart, getCartItemQty, decrementCartQty, incrementCartQty, removeCartItem, resetCartItem }}>{children}</ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("useProductContext must be used with ProductProvider");
    }
    return context;
}