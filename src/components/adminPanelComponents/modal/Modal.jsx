// //react
// import { useState } from "react";

// // icons
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "@heroicons/react/20/solid/index.js";

// import { XMarkIcon } from "@heroicons/react/24/outline";

// export default function Modal({ data, setIsModalShown, index }) {
//   const [currentIndex, setCurrentIndex] = useState(index);
//   let image = data[currentIndex];

//   function handlePrevClick() {
//     setCurrentIndex((oldIndex) => {
//       let currentIndex = oldIndex - 1;
//       if (currentIndex < 0) {
//         currentIndex = data.length - 1;
//       }
//       return currentIndex;
//     });
//   }

//   function handleNextClick() {
//     setCurrentIndex((oldIndex) => {
//       let currentIndex = oldIndex + 1;
//       if (currentIndex > data.length - 1) {
//         currentIndex = 0;
//       }
//       return currentIndex;
//     });
//   }

//   function handleClick(index) {
//     setCurrentIndex(index);
//   }

//   return (
//     <div
//       className="fixed top-0 left-0 z-10 items-center justify-center hidden w-screen h-screen bg-gray-800 bg-opacity-50 lg:flex"
//       onClick={(event) => {
//         event.stopPropagation();
//         setIsModalShown(false);
//       }}
//     >
//       <div
//         className="relative flex h-[600px] w-[600px] flex-col items-center justify-evenly rounded-3xl bg-white"
//         onClick={(event) => event.stopPropagation()}
//       >
//         <div className="absolute top-0 right-0 p-4">
//           <button
//             type="button"
//             className="text-gray-600 bg-white rounded-md hover:text-gray-800 focus:outline-none"
//             onClick={() => setIsModalShown(false)}
//           >
//             <span className="sr-only">Close</span>
//             <XMarkIcon className="w-6 h-6" aria-hidden="true" />
//           </button>
//         </div>
//         <div className="flex items-center justify-between w-11/12">
//           <ChevronLeftIcon
//             width={50}
//             height={50}
//             onClick={() => handlePrevClick()}
//           />

//           <img src={`${import.meta.env.VITE_ecommerce_api}${image}`} alt="" />

//           <ChevronRightIcon
//             width={50}
//             height={50}
//             onClick={() => handleNextClick()}
//           />
//         </div>
//         {/* <div className="flex gap-3 mx-auto w-max">
//           {data?.map((image, index) => (
//             <img
//               key={index}
//               src={`${import.meta.env.VITE_ecommerce_api}${image}`}
//               alt=""
//               //   className={classNames(
//               //     index === currentIndex ? "border-gray-600" : "",
//               //     "w-24 rounded-md border"
//               //   )}
//               onClick={() => handleClick(index)}
//             />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// }
