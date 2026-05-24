// "use client";

// import { useState } from "react";
// import Image from "next/image";

// import { Button } from "@/components/ui/button";
// import { AspectRatio } from "@/components/ui/aspect-ratio";

// import {
//   Loader2,
//   Minus,
//   Plus,
//   Trash2,
// } from "lucide-react";

// /* ---------------- MOCK DATA ---------------- */

// const cartItems = [
//   {
//     _id: "1",
//     count: 2,
//     price: 120,
//     product: {
//       _id: "p1",
//       title: "Panadol Extra",
//       imageCover: "/images/products/panadol.jpg",
//     },
//   },
//   {
//     _id: "2",
//     count: 1,
//     price: 250,
//     product: {
//       _id: "p2",
//       title: "Vitamin C",
//       imageCover: "/images/products/vitamin-c.jpg",
//     },
//   },
//   {
//     _id: "3",
//     count: 3,
//     price: 180,
//     product: {
//       _id: "p3",
//       title: "Baby Shampoo",
//       imageCover: "/images/products/baby-shampoo.jpg",
//     },
//   },
// ];

// /* ---------------- PAGE ---------------- */

// export default function CartPage() {
//   const [items, setItems] = useState(cartItems);

//   function removeItem(productId: string) {
//     setItems((prev) =>
//       prev.filter((item) => item.product._id !== productId)
//     );
//   }

//   function updateCount(productId: string, count: number) {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.product._id === productId
//           ? { ...item, count }
//           : item
//       )
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {items.map((item) => (
//         <CartProduct
//           key={item._id}
//           item={item}
//           removeItem={removeItem}
//           updateCount={updateCount}
//         />
//       ))}
//     </div>
//   );
// }

// /* ---------------- CART PRODUCT ---------------- */

// function CartProduct({
//   item,
//   removeItem,
//   updateCount,
// }: any) {
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loadingType, setLoadingType] = useState<
//     "increase" | "decrease" | null
//   >(null);

//   function handleDeleteItem() {
//     setIsDeleting(true);

//     setTimeout(() => {
//       removeItem(item.product._id);
//       setIsDeleting(false);
//     }, 500);
//   }

//   function handleUpdateItemCount(count: number) {
//     if (count < 1) return;

//     setLoadingType(
//       count > item.count ? "increase" : "decrease"
//     );

//     setTimeout(() => {
//       updateCount(item.product._id, count);
//       setLoadingType(null);
//     }, 400);
//   }

//   return (
//     <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
//       {/* Image */}
//       <div className="w-24 shrink-0">
//         <AspectRatio
//           ratio={1}
//           className="relative overflow-hidden rounded-xl bg-gray-100"
//         >
//           <Image
//             src={item.product.imageCover}
//             alt={item.product.title}
//             fill
//             className="object-cover"
//           />
//         </AspectRatio>
//       </div>

//       {/* Info */}
//       <div className="flex flex-1 flex-col justify-between">
//         <div>
//           <h3 className="font-semibold text-gray-800">
//             {item.product.title}
//           </h3>

//           <p className="mt-1 text-sm text-gray-500">
//             EGP {item.price}
//           </p>
//         </div>

//         {/* Counter */}
//         <div className="mt-4 flex items-center gap-2">
//           <Button
//             variant="outline"
//             size="icon"
//             className="h-8 w-8 rounded-full"
//             disabled={
//               item.count === 1 || loadingType !== null
//             }
//             onClick={() =>
//               handleUpdateItemCount(item.count - 1)
//             }
//           >
//             {loadingType === "decrease" ? (
//               <Loader2 className="h-3 w-3 animate-spin" />
//             ) : (
//               <Minus className="h-3 w-3" />
//             )}
//           </Button>

//           <span className="min-w-[30px] text-center font-medium">
//             {item.count}
//           </span>

//           <Button
//             variant="outline"
//             size="icon"
//             className="h-8 w-8 rounded-full"
//             disabled={loadingType !== null}
//             onClick={() =>
//               handleUpdateItemCount(item.count + 1)
//             }
//           >
//             {loadingType === "increase" ? (
//               <Loader2 className="h-3 w-3 animate-spin" />
//             ) : (
//               <Plus className="h-3 w-3" />
//             )}
//           </Button>
//         </div>
//       </div>

//       {/* Price + Delete */}
//       <div className="flex flex-col items-end justify-between">
//         <div className="text-right">
//           <p className="text-lg font-bold text-green-600">
//             EGP {item.price * item.count}
//           </p>
//         </div>

//         <Button
//           variant="ghost"
//           size="sm"
//           className="text-red-500 hover:bg-red-50"
//           onClick={handleDeleteItem}
//           disabled={isDeleting}
//         >
//           {isDeleting ? (
//             <Loader2 className="mr-1 h-4 w-4 animate-spin" />
//           ) : (
//             <Trash2 className="mr-1 h-4 w-4" />
//           )}

//           Remove
//         </Button>
//       </div>
//     </div>
//   );
// }