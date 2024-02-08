import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProduct } from "./services/ProductsService.js";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // AsyncStorage'den sepet bilgilerini al
    const fetchData = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("cartItems");
        if (storedItems !== null) {
          setItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error("AsyncStorage Hata:", error);
      }
    };

    fetchData();
  }, []);

  async function saveItemsToStorage(updatedItems) {
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(updatedItems));
    } catch (error) {
      console.error("AsyncStorage Hata:", error);
    }
  }

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === id);
      if (!item) {
        const updatedItems = [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
        saveItemsToStorage(updatedItems);
        return updatedItems;
      } else {
        const updatedItems = prevItems.map((item) => {
          if (item.id === id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
        saveItemsToStorage(updatedItems);
        return updatedItems;
      }
    });
  }

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
