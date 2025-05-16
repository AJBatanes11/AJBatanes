// "use client";
// import { useEffect } from "react";

// declare global {
//   interface Window {
//     Calendly?: any;
//   }
// }

// export default function CalendlyPopup() {
//   useEffect(() => {
//     if (!window.Calendly) {
//       const script = document.createElement("script");
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   const openCalendly = () => {
//     if (window.Calendly) {
//       window.Calendly.initPopupWidget({
//         url: "https://calendly.com/anthonybatanes/e-commerce-consultation",
//       });
//     }
//   };

//   return (
//     <button
//       onClick={openCalendly}
//       className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
//     >
//       Book a Free Consultation
//     </button>
//   );
// }
