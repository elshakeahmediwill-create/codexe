// import { AddressResponse } from "../interface/allorders_interfaces/AddressResponse ";
// import { Order } from "../interface/allorders_interfaces/Order";
// import { Brand } from "../interface/Brand ";
// import { CartResponse } from "../interface/cart_interfaces/CartResponse ";
// import { Category } from "../interface/Category ";
// import { Product } from "../interface/Product ";
// import { WishlistResponse } from "../interface/wishlist_interface/WishListResponse";
// import { AuthResponse } from "../types/SignUpResponse";



// const BASE_URL = "https://ecommerce.routemisr.com";

// const getHeaders = (token?: string) => ({
//   "Content-Type": "application/json",
//   ...(token && { token }),
// });

// class ApiServices {
//   async getProducts(): Promise<Product[]> {
//     const response = await fetch(`${BASE_URL}/api/v1/products`);
//     const data = await response.json();
//     return data.data;
//   }

//   async getProductDetails(productId: string): Promise<Product> {
//     const response = await fetch(`${BASE_URL}/api/v1/products/${productId}`);
//     const data = await response.json();
//     return data.data;
//   }

//   // ================= CART =================
//   async addProductsToCart(
//     productId: string,
//     token: string,
//   ): Promise<CartResponse> {
//     const response = await fetch(`${BASE_URL}/api/v2/cart`, {
//       method: "POST",
//       body: JSON.stringify({ productId }),
//       headers: getHeaders(token),
//     });
//     return await response.json();
//   }

//   async getProductsCart(token: string): Promise<CartResponse> {
//     const response = await fetch(`${BASE_URL}/api/v2/cart`, {
//       headers: getHeaders(token),
//     });
//     return await response.json();
//   }

//   async deleteProductsCart(
//     productId: string,
//     token: string,
//   ): Promise<CartResponse> {
//     const response = await fetch(`${BASE_URL}/api/v2/cart/${productId}`, {
//       method: "DELETE",
//       headers: getHeaders(token),
//     });
//     return await response.json();
//   }

//   async clearProductsCart(token: string): Promise<CartResponse> {
//     const response = await fetch(`${BASE_URL}/api/v2/cart`, {
//       method: "DELETE",
//       headers: getHeaders(token),
//     });
//     return await response.json();
//   }

//   async updateProductsCart(
//     productId: string,
//     count: number,
//     token: string,
//   ): Promise<CartResponse> {
//     const response = await fetch(`${BASE_URL}/api/v2/cart/${productId}`, {
//       method: "PUT",
//       headers: getHeaders(token),
//       body: JSON.stringify({ count }),
//     });
//     return await response.json();
//   }

//   // ================= CATEGORY & BRAND =================
//   async getCategories(): Promise<{ data: Category[] }> {
//     const response = await fetch(`${BASE_URL}/api/v1/categories`);
//     return await response.json();
//   }

//   async getBrands(): Promise<{ data: Brand[] }> {
//     const response = await fetch(`${BASE_URL}/api/v1/brands`);
//     return await response.json();
//   }

//   // ================= WISHLIST =================
//   async addWishListItem(
//     productId: string,
//     token: string,
//   ): Promise<WishlistResponse> {
//     const response = await fetch(`${BASE_URL}/api/v1/wishlist`, {
//       method: "POST",
//       headers: getHeaders(token),
//       body: JSON.stringify({ productId }),
//     });
//     return await response.json();
//   }

//   async getWishListItem(token: string): Promise<WishlistResponse> {
//     const response = await fetch(`${BASE_URL}/api/v1/wishlist`, {
//       headers: getHeaders(token),
//     });
//     return await response.json();
//   }

//   async deleteWishListItem(
//     productId: string,
//     token: string,
//   ): Promise<WishlistResponse> {
//     const response = await fetch(`${BASE_URL}/api/v1/wishlist/${productId}`, {
//       method: "DELETE",
//       headers: getHeaders(token),
//     });
//     return await response.json();
//   }

//   // ================= CHECKOUT =================
//   async checkout(
//     cartId: string,
//     shippingAddress: {
//       details: string;
//       phone: string;
//       city: string;
//     },
//     token: string,
//   ) {
//     const response = await fetch(
//       `${BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
//       {
//         method: "POST",
//         headers: getHeaders(token),
//         body: JSON.stringify({ shippingAddress }),
//       },
//     );
//     return await response.json();
//   }
//   async cashOrder(
//     cartId: string,
//     shippingAddress: {
//       details: string;
//       phone: string;
//       city: string;
//     },
//     token: string,
//   ) {
//     const response = await fetch(`${BASE_URL}/api/v1/orders/${cartId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         token,
//       },
//       body: JSON.stringify({
//         shippingAddress,
//       }),
//     });

//     return await response.json();
//   }

//   // ================= ORDERS =================
//   async getAllOrders(userId: string): Promise<Order[]> {
//     const response = await fetch(`${BASE_URL}/api/v1/orders/user/${userId}`, {
//       cache: "no-store",
//     });

//     const data = await response.json();
//     return Array.isArray(data) ? data : [];
//   }

//   // ================= ADDRESS =================
//   async addAddress(
//     address: {
//       name: string;
//       details: string;
//       phone: string;
//       city: string;
//     },
//     token: string,
//   ): Promise<AddressResponse> {
//     const response = await fetch(`${BASE_URL}/api/v1/addresses`, {
//       method: "POST",
//       headers: getHeaders(token),
//       body: JSON.stringify(address),
//     });
//     return await response.json();
//   }

//   async getUserAddresses(token: string): Promise<AddressResponse> {
//     const response = await fetch(`${BASE_URL}/api/v1/addresses`, {
//       headers: getHeaders(token),
//     });
//     return await response.json();
//   }

//   // ================= AUTH =================
//   async signin(email: string, password: string): Promise<AuthResponse> {
//     const response = await fetch(`${BASE_URL}/api/v1/auth/signin`, {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify({ email, password }),
//     });
//     return await response.json();
//   }

//   async signup(
//     name: string,
//     email: string,
//     password: string,
//     rePassword: string,
//     phone: string,
//   ): Promise<AuthResponse> {
//     const response = await fetch(`${BASE_URL}/api/v1/auth/signup`, {
//       method: "POST",
//       headers: getHeaders(),
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//         rePassword,
//         phone,
//       }),
//     });
//     return await response.json();
//   }

//   async getUserOrdersByToken(token: string) {
//   const response = await fetch(`${BASE_URL}/api/v1/orders`, {
//     headers: {
//       token,
//     },
//     cache: "no-store",
//   });

//   const data = await response.json();

//   return Array.isArray(data) ? data : data?.data || [];
// }
// }

// export const apiServices = new ApiServices();
