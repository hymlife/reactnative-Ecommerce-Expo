const PRODUCTS = [
  {
    id: 100,
    name: "Kulaklık",
    price: 350,
    image: require("../assets/products/headset-100.jpg"),
    description: "Şarkılarınızı çok daha kaliteli dinleyin",
  },
  {
    id: 101,
    name: "Oyuncak Araba",
    price: 600,
    image: require("../assets/products/car-101.jpg"),
    description: "Minik Bir Araba",
  },
  {
    id: 102,
    name: "Kek",
    price: 2,
    image: require("../assets/products/cake-102.jpg"),
    description: "En Güzel Kekleri Kaçırmayın",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
