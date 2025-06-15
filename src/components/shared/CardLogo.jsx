// import { Link } from "react-router-dom";

// const CardLogo = () => {
//   return (
//     <Link to="/" className="flex items-center gap-1 no-underline">
//       {/* Icon version - two intersecting circles */}
//       <svg
//         className="h-6 w-6"
//         viewBox="0 0 24 24"
//         fill="none"
//         aria-hidden="true"
//       >
//         <path
//           d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
//           fill="#2196F3"
//         />
//         <path
//           d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
//           fill="#F50057"
//         />
//       </svg>

//       {/* Text logo with color split */}
//       <span className="text-xl font-bold">
//         <span className="text-[#2196F3]">Mol</span>
//         <span className="text-[#F50057]">tqa</span>
//       </span>
//     </Link>
//   );
// };

// export default CardLogo;

/* ==================================== */

// import { Link } from "react-router-dom";

// const CardLogo = () => {
//   return (
//     <Link to="/" className="flex items-center gap-1 no-underline group">
//       <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2196F3] group-hover:bg-[#1565C0] transition-colors">
//         <span className="text-white font-bold text-lg">M</span>
//       </div>
//       <span className="text-xl font-bold text-gray-800 dark:text-white">
//         <span className="text-[#2196F3]">olt</span>
//         <span className="text-[#F50057]">qa</span>
//       </span>
//     </Link>
//   );
// };

// export default CardLogo;
// import { MessageSquare, Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";

// const CardLogo = () => {
//   return (
//     <Link
//       to="/"
//       className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
//     >
//       {/* Logo Icon Container */}
//       <div className="relative">
//         {/* Background glow effect */}
//         <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>

//         {/* Main icon container */}
//         <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 group-hover:border-white/30 transition-all duration-300">
//           <div className="relative">
//             {/* Primary icon */}
//             <MessageSquare
//               className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
//               strokeWidth={2}
//             />

//             {/* Accent sparkle */}
//             <Sparkles
//               className="absolute -top-1 -right-1 w-4 h-4 text-secondary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
//               strokeWidth={2.5}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Logo Text */}
//       <div className="flex flex-col">
//         <h1 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
//           Moltqa
//         </h1>
//         <div className="h-0.5 bg-gradient-to-r from-primary to-secondary opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
//       </div>
//     </Link>
//   );
// };

// export default CardLogo;

/* ==================================== */
// import { Circle, Zap } from "lucide-react";
// import { Link } from "react-router-dom";

// const CardLogo = () => {
//   return (
//     <Link
//       to="/"
//       className="group flex items-center gap-2 transition-all duration-300"
//     >
//       {/* Logo Icon */}
//       <div className="relative flex items-center justify-center">
//         <Circle
//           className="w-10 h-10 text-primary/20 absolute"
//           strokeWidth={1}
//         />
//         <Zap
//           className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300 relative z-10"
//           strokeWidth={2.5}
//           fill="currentColor"
//         />
//       </div>

//       {/* Logo Text */}
//       <span className="text-2xl font-black text-gray-900 group-hover:text-primary transition-colors duration-300">
//         Moltqa
//       </span>
//     </Link>
//   );
// };

// export default CardLogo;

/* ==================================== */

// import { MessageCircle, Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";

// const CardLogo = () => {
//   return (
//     <Link
//       to="/"
//       className="group flex items-center gap-3 transition-all duration-300"
//     >
//       {/* Logo Icon Container */}
//       <div className="relative">
//         {/* Main icon with layered effect */}
//         <div className="relative w-10 h-10 flex items-center justify-center">
//           {/* Background circle */}
//           <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

//           {/* Main message icon */}
//           <MessageCircle
//             className="w-7 h-7 text-primary group-hover:text-secondary transition-all duration-300 relative z-10"
//             strokeWidth={2}
//           />

//           {/* Accent sparkle */}
//           <Sparkles
//             className="absolute -top-0.5 -right-0.5 w-3 h-3 text-secondary group-hover:text-primary group-hover:rotate-12 transition-all duration-300"
//             strokeWidth={2.5}
//             fill="currentColor"
//           />
//         </div>
//       </div>

//       {/* Logo Text with custom styling */}
//       <div className="flex flex-col">
//         <span className="text-2xl font-black text-gray-900 group-hover:gradient-text transition-all duration-300 tracking-tight">
//           Moltqa
//         </span>
//         {/* Subtle underline accent */}
//         <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
//       </div>
//     </Link>
//   );
// };

// export default CardLogo;
// import { Hexagon, Zap } from "lucide-react";
// import { Link } from "react-router-dom";

// const CardLogo = () => {
//   return (
//     <Link
//       to="/"
//       className="group flex items-center gap-3 transition-all duration-300"
//     >
//       {/* Logo Icon Container */}
//       <div className="relative">
//         {/* Hexagonal container with nested elements */}
//         <div className="relative w-12 h-12 flex items-center justify-center">
//           {/* Outer hexagon */}
//           <Hexagon
//             className="w-11 h-11 text-primary/20 group-hover:text-primary/30 transition-all duration-300 absolute"
//             strokeWidth={1.5}
//           />

//           {/* Inner hexagon - rotated */}
//           <Hexagon
//             className="w-8 h-8 text-primary group-hover:text-secondary transition-all duration-300 rotate-30 group-hover:rotate-45 absolute"
//             strokeWidth={2}
//             fill="currentColor"
//             fillOpacity={0.1}
//           />

//           {/* Central lightning bolt */}
//           <Zap
//             className="w-4 h-4 text-secondary group-hover:text-primary transition-all duration-300 relative z-10 group-hover:scale-110"
//             strokeWidth={2.5}
//             fill="currentColor"
//           />
//         </div>
//       </div>

//       {/* Logo Text with modern styling */}
//       <div className="flex flex-col">
//         <span className="text-2xl font-bold text-gray-900 group-hover:gradient-text transition-all duration-300 tracking-wide">
//           MOLTQA
//         </span>
//         {/* Dynamic dot indicator */}
//         <div className="flex gap-1 mt-0.5">
//           <div className="w-1 h-1 bg-primary rounded-full group-hover:bg-secondary transition-colors duration-300"></div>
//           <div className="w-1 h-1 bg-primary/60 rounded-full group-hover:bg-secondary/60 transition-colors duration-300 delay-75"></div>
//           <div className="w-1 h-1 bg-primary/30 rounded-full group-hover:bg-secondary/30 transition-colors duration-300 delay-150"></div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CardLogo;

/* ==================================== */

// const CardLogo = () => (
//   <Link to="/" className="flex items-center gap-2 no-underline">
//     <div className="bg-gradient-to-r from-[#2196F3] to-[#F50057] rounded-lg p-2">
//       <span className="text-white font-bold text-xl tracking-tight">MQ</span>
//     </div>
//     <span className="text-xl font-bold text-gray-800 dark:text-white">
//       Moltqa
//     </span>
//   </Link>
// );
// export default CardLogo;
/* ==================================== */
// import { Circle, Triangle } from "lucide-react";
// import { Link } from "react-router-dom";

// const CardLogo = () => {
//   return (
//     <Link
//       to="/"
//       className="group flex items-center gap-4 transition-all duration-300"
//     >
//       {/* Logo Icon Container */}
//       <div className="relative w-10 h-10">
//         {/* Background circle with pulse effect */}
//         <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110"></div>

//         {/* Main geometric composition */}
//         <div className="relative w-full h-full flex items-center justify-center">
//           {/* Large circle */}
//           <Circle
//             className="w-8 h-8 text-primary group-hover:text-secondary transition-all duration-300 absolute"
//             strokeWidth={2.5}
//           />

//           {/* Inner triangle pointing up */}
//           <Triangle
//             className="w-4 h-4 text-secondary group-hover:text-primary transition-all duration-300 group-hover:rotate-180"
//             strokeWidth={2}
//             fill="currentColor"
//           />

//           {/* Small accent dots */}
//           <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full group-hover:bg-primary transition-colors duration-300 group-hover:scale-125"></div>
//           <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary/60 rounded-full group-hover:bg-secondary/60 transition-colors duration-300"></div>
//         </div>
//       </div>

//       {/* Logo Text */}
//       <div className="flex flex-col">
//         <h1 className="text-2xl font-extrabold text-gray-900 group-hover:gradient-text transition-all duration-300 tracking-tight">
//           Moltqa
//         </h1>
//         {/* Animated underline */}
//         <div className="flex gap-0.5 mt-1">
//           <div className="h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:bg-secondary w-4 group-hover:w-6"></div>
//           <div className="h-0.5 bg-primary/50 rounded-full transition-all duration-300 group-hover:bg-secondary/50 w-2 group-hover:w-3 delay-75"></div>
//           <div className="h-0.5 bg-primary/25 rounded-full transition-all duration-300 group-hover:bg-secondary/25 w-1 group-hover:w-2 delay-150"></div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CardLogo;
/* ==================================== */

// import { Hexagon, Zap } from "lucide-react";
// import { Link } from "react-router-dom";

// const CardLogo = () => {
//   return (
//     <Link
//       to="/"
//       className="group flex items-center gap-3 transition-all duration-300"
//     >
//       {/* Logo Icon Container */}
//       <div className="relative">
//         {/* Rotating background ring */}
//         <div className="absolute inset-0 w-12 h-12 border-2 border-primary/20 rounded-full group-hover:border-secondary/40 transition-all duration-500 group-hover:rotate-90"></div>

//         {/* Main hexagon container */}
//         <div className="relative w-12 h-12 flex items-center justify-center">
//           {/* Outer hexagon */}
//           <Hexagon
//             className="w-10 h-10 text-primary group-hover:text-secondary transition-all duration-300 absolute group-hover:scale-110"
//             strokeWidth={1.5}
//           />

//           {/* Inner lightning bolt */}
//           <Zap
//             className="w-5 h-5 text-secondary group-hover:text-primary transition-all duration-300 group-hover:rotate-12"
//             strokeWidth={2.5}
//             fill="currentColor"
//           />

//           {/* Corner accent squares */}
//           <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary/80 rotate-45 group-hover:bg-primary/80 transition-all duration-300 group-hover:rotate-90"></div>
//           <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary/60 rotate-45 group-hover:bg-secondary/60 transition-all duration-300 group-hover:-rotate-45"></div>
//         </div>
//       </div>

//       {/* Logo Text */}
//       <div className="flex flex-col">
//         <h1 className="text-2xl font-bold text-gray-900 group-hover:gradient-text transition-all duration-300 tracking-wide">
//           Moltqa
//         </h1>
//         {/* Dynamic dot pattern */}
//         <div className="flex items-center gap-1 mt-1">
//           <div className="w-2 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300"></div>
//           <div className="w-1 h-1 bg-secondary rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300 delay-75"></div>
//           <div className="w-0.5 h-0.5 bg-primary/50 rounded-full group-hover:w-1 group-hover:h-1 transition-all duration-300 delay-150"></div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CardLogo;
import { Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CardLogo = () => {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 transition-all duration-300"
    >
      {/* Logo Icon Container */}
      <div className="relative">
        {/* Animated background pulse */}
        <div className="absolute inset-0 w-12 h-12 bg-primary/5 rounded-2xl group-hover:bg-secondary/10 transition-all duration-500 group-hover:scale-110"></div>

        {/* Main container */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Stacked layers effect */}
          <div className="absolute inset-1">
            <Layers
              className="w-8 h-8 text-primary/30 absolute top-0 left-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              strokeWidth={1.5}
            />
            <Layers
              className="w-8 h-8 text-primary/60 absolute top-0.5 left-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 delay-75"
              strokeWidth={1.8}
            />
            <Layers
              className="w-8 h-8 text-primary absolute top-1 left-1 group-hover:scale-110 transition-all duration-300 delay-150"
              strokeWidth={2}
            />
          </div>

          {/* Central sparkle */}
          <Sparkles
            className="w-4 h-4 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:rotate-180 group-hover:scale-125 transition-all duration-500"
            strokeWidth={2.5}
            fill="currentColor"
          />

          {/* Orbiting dots */}
          <div className="absolute inset-0 group-hover:rotate-45 transition-all duration-700">
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-secondary rounded-full transform -translate-x-1/2 group-hover:bg-primary transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary/60 rounded-full transform -translate-x-1/2 group-hover:bg-secondary/60 transition-colors duration-300"></div>
            <div className="absolute left-0 top-1/2 w-1 h-1 bg-secondary/40 rounded-full transform -translate-y-1/2 group-hover:bg-primary/40 transition-colors duration-300"></div>
            <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-primary/80 rounded-full transform -translate-y-1/2 group-hover:bg-secondary/80 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold  group-hover:gradient-text transition-all duration-300 tracking-tight">
          Moltqa
        </h1>
        {/* Animated underline */}
        <div className="flex items-center gap-0.5 mt-0.5">
          <div className="w-3 h-0.5 bg-primary rounded-full group-hover:w-6 transition-all duration-300"></div>
          <div className="w-2 h-0.5 bg-secondary/60 rounded-full group-hover:w-4 transition-all duration-300 delay-100"></div>
          <div className="w-1 h-0.5 bg-primary/40 rounded-full group-hover:w-2 transition-all duration-300 delay-200"></div>
        </div>
      </div>
    </Link>
  );
};

export default CardLogo;
