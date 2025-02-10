// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// function Funct () {
//   const [currentText, setCurrentText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.getItem('theme') === 'dark'
//   );

//   const texts = [
//     "WELCOME TO FREEPAD",
//     // "SIMPLIFYING DECENTRALIZED FUNDRAISING",
//     // "REVOLUTIONIZING DECENTRALIZED FUNDRAISING"
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 1200 });

//     const typeWriter = () => {
//       if (charIndex < texts[textIndex].length) {
//         setCurrentText(prev => prev + texts[textIndex].charAt(charIndex));
//         setCharIndex(prev => prev + 1);
//       } else {
//         setTimeout(eraseText, 1000);
//       }
//     };

//     const eraseText = () => {
//       if (currentText.length > 0) {
//         setCurrentText(prev => prev.slice(0, -1));
//         setTimeout(eraseText, 50);
//       } else {
//         setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//         setCharIndex(0);
//         setTimeout(typeWriter, 500);
//       }
//     };


//     typeWriter();
//   }, [currentText, charIndex, textIndex, texts]);


//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.body.classList.toggle('dark-mode');
//     document.body.classList.toggle('light-mode');
//     localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
//   };


//   const toggleNavbar = (show) => {
//     const navbar = document.querySelector(".dropdown");
//     navbar.style.transform = show ? "translateY(0px)" : "translateY(-500px)";
//   };

//   return (
//     <div className={isDarkMode ? "dark-mode" : "light-mode"}>
//       <header>
//         <button onClick={toggleTheme} id="theme-toggle">
//           Toggle Theme
//         </button>
//         <button onClick={() => toggleNavbar(true)}>Open Menu</button>
//         <button onClick={() => toggleNavbar(false)}>Close Menu</button>
//       </header>

//       <div className="dropdown" style={{ transform: "translateY(-500px)" }}>
//         {/* Dropdown Menu Content */}
//       </div>

//       <div className="typewriter-text" data-aos="fade-up">
//         {currentText}
//       </div>
//     </div>
//   );
// };

// export default Funct;
