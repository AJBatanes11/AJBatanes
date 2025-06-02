// "use client";

// import React, { useState, useEffect, useRef } from "react";

// interface CursorFollowerProps {
//   children: React.ReactNode;
//   originalPos?: { x: number; y: number };
//   followerSize?: number;
//   followerColor?: string;
//   labelInside?: string;
//   labelOutside?: string;
//   className?: string;
// }

// export default function CursorFollower({
//   className = "",
//   originalPos,
//   followerSize = 60,
//   followerColor = "rgba(255,255,255,1)",
//   labelInside,
//   labelOutside,
//   children,
// }: CursorFollowerProps) {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [active, setActive] = useState(false);
//   const [returning, setReturning] = useState(false);
//   const returnTargetRef = useRef<{ x: number; y: number } | null>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const center = {
//       x: originalPos?.x ?? rect.width / 2,
//       y: originalPos?.y ?? rect.height / 2,
//     };
//     setPos(center);
//     returnTargetRef.current = center;
//   }, [originalPos]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const center = {
//         x: originalPos?.x ?? rect.width / 2,
//         y: originalPos?.y ?? rect.height / 2,
//       };
//       if (!returning) {
//         setPos(center);
//         returnTargetRef.current = center;
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [originalPos, returning]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     setPos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//     if (returning) setReturning(false);
//     if (!active) setActive(true);
//   };

//   const handleMouseEnter = () => {
//     if (!active) setActive(true);
//     setReturning(false);
//   };

//   const handleMouseLeave = () => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const center = {
//       x: rect.width / 2,
//       y: rect.height / 2,
//     };
//     returnTargetRef.current = center;
//     setReturning(true);
//   };

//   const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

//   useEffect(() => {
//     if (!returning) return;
//     let animationFrame: number;
//     let start: number | null = null;
//     const duration = 200;
//     const startPos = { ...pos };
//     const targetPos = returnTargetRef.current ?? { x: 0, y: 0 };

//     const animate = (timestamp: number) => {
//       if (!start) start = timestamp;
//       const elapsed = timestamp - start;
//       let progress = Math.min(elapsed / duration, 1);
//       progress = easeInOut(progress);

//       const x = startPos.x + (targetPos.x - startPos.x) * progress;
//       const y = startPos.y + (targetPos.y - startPos.y) * progress;

//       setPos({ x, y });

//       if (elapsed < duration) {
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setReturning(false);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [returning]);

//   return (
//     <div
//       ref={containerRef}
//       className={className}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "100%",
//         userSelect: "none",
//         overflow: "visible",
//       }}
//     >
//       {children}

//       {/* Follower circle */}
//       {active && (
//         <>
//           <div
//             style={{
//               position: "absolute",
//               top: pos.y,
//               left: pos.x,
//               transform: "translate(-50%, -50%)",
//               width: followerSize,
//               height: followerSize,
//               borderRadius: "50%",
//               backgroundColor: followerColor,
//               color: "#000",
//               fontSize: "",
//               fontWeight: "500",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               pointerEvents: "none",
//               transition: returning ? "none" : "background-color 0.2s ease",
//             }}
//           >
//             {labelInside}
//           </div>

//           {/* Optional outside label */}
//           {labelOutside && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: pos.y + followerSize / 2 + 8,
//                 left: pos.x,
//                 transform: "translateX(-50%)",
//                 fontSize: "",
//                 fontWeight: "500",
//                 color: "#fff",
//                 pointerEvents: "none",
//               }}
//             >
//               {labelOutside}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
