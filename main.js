/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location */ \"./src/location.js\");\n\n\nconst createAbout = ()=>{\n    const container = document.getElementById('content');\n    const pageContent = document.createElement('div');\n    pageContent.classList.add('page-content');\n\n    pageContent.style.height='100vh';\n    const infoContainer = document.createElement('div');\n\n    const mapContainer = document.createElement('div');\n    container.appendChild(pageContent);\n    infoContainer.innerHTML=`\n    \n    <div id='info'>\n    <h2 class='info-header'>Contact</h2>\n    <hr>\n    <h3 class='info-header'>Phone</h3>\n    <p>555-55-55</p>\n    <br>\n    <h3 class='info-header'>e-mail</h3>\n    <p>thisisouremailaddress@notfake.com</p>\n    </div>\n    \n    \n    \n    `\n    mapContainer.innerHTML=`<div id=\"map\">\n\n    </div>`;\n    pageContent.appendChild(mapContainer);\n    pageContent.appendChild(infoContainer);\n    \n    \n    (0,_location__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);\n\n//# sourceURL=webpack://restaurant/./src/aboutPage.js?");

/***/ }),

/***/ "./src/createBtns.js":
/*!***************************!*\
  !*** ./src/createBtns.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutPage */ \"./src/aboutPage.js\");\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location */ \"./src/location.js\");\n\n\n\n\n\n\nconst createButtons=()=>{\n    const mainContainer = document.getElementById('content');\n    const navbar = document.getElementById('navbar');\n    const btn1 = document.createElement('button');\n    const btn2 = document.createElement('button');\n    const btn3 = document.createElement('button');\n    const logo= document.createElement('div');\n    const btnContainer = document.createElement('div');\n    btnContainer.setAttribute('id','button-container');\n    logo.setAttribute('id','logo');\n    logo.textContent=`{PiZZa}`;\n    btn1.id='button-1';\n    btn2.id='button-2';\n    btn3.id='button-3';\n    btn1.textContent='Home'\n    btn2.textContent='Menu'\n    btn3.textContent='About'\n    btn1.classList.add('btn');\n    btn2.classList.add('btn');\n    btn3.classList.add('btn');\n    navbar.appendChild(logo);\n    btnContainer.appendChild(btn1);\n    btnContainer.appendChild(btn2);\n    btnContainer.appendChild(btn3);\n    navbar.appendChild(btnContainer);\n\n    btn1.addEventListener('click',()=>{\n        removePage();\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n\n    btn2.addEventListener('click',()=>{\n\n        removePage();\n        (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n    btn3.addEventListener('click',()=>{\n        removePage();\n        (0,_aboutPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        (0,_location__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    })\n    logo.addEventListener('click',()=>{\n        removePage();\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n\n}\nconst removePage=()=>{\n    const mainContainer = document.getElementById('content');\n\n    const pageContent= document.querySelector('.page-content');\n    if(pageContent){\n        mainContainer.removeChild(pageContent);\n    }\n\n\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createButtons);\n\n//# sourceURL=webpack://restaurant/./src/createBtns.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst getLocation = () => {\n   \n    var map = L.map('map').setView([43.8605526, 18.4131988], 17);\n    \n    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">Enes Soyturk</a> contributors'\n    }).addTo(map);\n\n    L.marker([43.8605526, 18.4131988]).addTo(map)\n    .bindPopup('Best Italian Pizza in Europe!')\n    .openPopup();\n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);\n\n//# sourceURL=webpack://restaurant/./src/location.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenu = ()=>{\n    const container  = document.getElementById('content')\n    const pageContent = document.createElement('div')\n    pageContent.classList.add('page-content');\n    container.appendChild(pageContent);\n\n    pageContent.style.height='max-content';\n    const headerMenu = document.createElement('h1');\n    \n    headerMenu.textContent='-MENU-'\n    pageContent.appendChild(headerMenu);\n\n    const menuDiv= document.createElement('div');\n    pageContent.appendChild(menuDiv);\n    menuDiv.classList.add('menu-container');\n    const dinnerDiv= document.createElement('div');\n   \n    dinnerDiv.classList.add('pizza-container');\n    dinnerDiv.innerHTML=`\n    <h2 class='pizza-header'>Margarita</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1600'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>🍕 Discover Pizza Perfection with Our Margherita Delight! 🌿</span>\n    <span class='introduce-text'>\nIntroducing the Margherita Pizza, a timeless classic that captures the essence of Italian culinary tradition.\n</span>\n<span class='introduce-text'>\n🍅 Tomato Splendor: Experience the burst of sun-kissed tomatoes, harmonizing flawlessly with our tangy tomato sauce.\n</span>\n<span class='introduce-text'>\n🧀 Mozzarella Magic: Melt into layers of premium mozzarella cheese, delicately balanced for that perfect stretch and richness.\n</span>\n<span class='introduce-text'>\n🌱 Basil Elegance: Freshly picked basil leaves crown each slice, infusing a fragrant aroma and a touch of herbal sophistication.\n</span>\n<span class='introduce-text'>\n🌞 Simplicity Redefined: Embrace the beauty of simplicity as handcrafted dough and minimalistic ingredients blend into a symphony of taste.\n</span>\n<span class='introduce-text'>\n👨‍🍳 Crafted with Love: Our skilled chefs pour their passion into every Margherita Pizza, creating a masterpiece that tells a story of culinary expertise.\n</span>  \n</p>\n    \n    `;\n    const dinnerDiv2= document.createElement('div');\n\n    dinnerDiv2.classList.add('pizza-container');\n    dinnerDiv2.innerHTML=`\n    <h2 class='pizza-header'>Pepperoni</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n    🍕 Elevate Your Cravings with Our Irresistible Pepperoni Pizza! 🌶️\n    </span>\n    <span class='introduce-text'>\nIntroducing the Pepperoni Pizza, a symphony of flavors that ignites your taste buds with every bite.\n</span>\n<span class='introduce-text'>\n🍅 Bold Tomato Kick: Our zesty tomato sauce provides the perfect canvas for the starring act of savory pepperoni.\n</span>\n<span class='introduce-text'>\n🧀 Cheese Galore: Melt into a sea of melted mozzarella, amplifying the richness of the pepperoni's smoky goodness.\n</span>\n<span class='introduce-text'>\n🌶️ Spicy Sensation: Savor the kick of thinly sliced, perfectly seasoned pepperoni that adds just the right amount of heat.\n</span>\n<span class='introduce-text'>\n👌 Pizza Mastery: Crafted by our expert chefs, each Pepperoni Pizza embodies culinary finesse and a passion for perfection.\n</span>\n<span class='introduce-text'>\n🎉 Party Favorite: Whether it's a game night, a celebration, or a cozy evening in, our Pepperoni Pizza is always the life of the party.\n</span>    \n</p>\n    `;\n    const dinnerDiv3= document.createElement('div');\n    \n    dinnerDiv3.classList.add('pizza-container');\n    dinnerDiv3.innerHTML=`\n    <h2 class='pizza-header'>Eggplant and spinach</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/1437812/pexels-photo-1437812.jpeg?auto=compress&cs=tinysrgb&w=1600'>\n    <p  class='pizza-text'><span class='introduce-text-header'>🍆 Introducing Our Delectable Eggplant Pizza! 🍕</span>\n    <span class='introduce-text'>\n    Indulge in a slice of pure innovation with our Eggplant Pizza. Crafted to perfection, this culinary masterpiece redefines pizza enjoyment.\n    </span>\n    <span class ='introduce-text'>\n    🌱 Fresh Twist: Our handpicked eggplant slices serve as a nutritious and flavorful crust alternative.\n    </span>\n    <span class ='introduce-text'>\n        🧀 Cheesy Bliss: Generously topped with a blend of premium cheeses that melt to perfection, creating a symphony of flavors in every bite.\n    </span>\n    <span class ='introduce-text'>\n    \n    🍅 Garden Freshness: Bursting with vibrant tomato sauce and a medley of fresh toppings that celebrate the best of nature's bounty.\n    </span>\n    <span class ='introduce-text'>\n    \n    🌶️ Bold Flavors: A touch of herbs and spices adds an irresistible kick, elevating your taste experience to a whole new level.\n    </span>\n    \n    `;\n    const dinnerDiv4= document.createElement('div');\n    \n    dinnerDiv4.classList.add('pizza-container');\n    dinnerDiv4.innerHTML=`\n    <h2 class='pizza-header'>Olive Garden</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n    🌿 Embark on a Flavorful Journey with Our Olive Garden Pizza! 🍕\n    </span>\n\n    <span class='introduce-text'>\nIntroducing the Olive Garden Pizza, a culinary adventure that transports you to the heart of Mediterranean indulgence.\n</span>\n\n<span class='introduce-text'>\n🍅 Mediterranean Bliss: Immerse yourself in the robust flavors of sun-ripened tomatoes and our secret blend of olive garden herbs.\n</span>\n\n<span class='introduce-text'>\n🧀 Wholesome Cheeses: Revel in the harmony of feta, mozzarella, and Parmesan cheeses that create a delightful tapestry of creamy goodness.\n</span>\n\n<span class='introduce-text'>\n🍈 Garden Freshness: A symphony of olives, bell peppers, and artichokes dances across each slice, celebrating the bounties of the garden.\n</span>\n\n<span class='introduce-text'>\n🌿 Herbaceous Elegance: Fragrant rosemary, basil, and thyme infuse a touch of herbal sophistication, elevating your taste experience.\n</span>\n\n\n    </p>\n    `;\n    const dinnerDiv5= document.createElement('div');\n    \n    dinnerDiv5.classList.add('pizza-container');\n    dinnerDiv5.innerHTML=`\n    <h2 class='pizza-header'>Italian Pizza</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n    🇮🇹 Embark on a Flavorful Journey to Italy with Our Authentic Italian Pizza! 🍕\n    </span>\n\n    <span class='introduce-text'>\nIntroducing the Italian Pizza, a culinary masterpiece that pays homage to the rich traditions and vibrant flavors of Italy.\n</span>\n\n<span class='introduce-text'>\n🍅 Tomatoes From the Sun: Experience the burst of sweet San Marzano tomatoes, handpicked at the peak of ripeness for an unforgettable taste.\n</span>\n\n<span class='introduce-text'>\n🧀 Melting Perfection: Immerse yourself in layers of creamy mozzarella and aged Parmigiano-Reggiano, crafted to achieve the ultimate melt.\n</span>\n\n<span class='introduce-text'>\n🌿 Fresh Herb Symphony: Basil, oregano, and thyme unite in a fragrant dance, infusing every bite with the essence of Italian countryside.\n</span>\n\n<span class='introduce-text'>\n🍖 Cured Delights: Embark on a journey of taste with our selection of authentic Italian cured meats, from velvety prosciutto to spicy salami.\n</span>\n\n\n   \n</p>\n    `;\n    const dinnerDiv6= document.createElement('div');\n    \n    dinnerDiv6.classList.add('pizza-container');\n    dinnerDiv6.innerHTML=`\n    <h2 class='pizza-header'>Rainbow Pizza</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&w=1600'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n🌈 Experience a Flavorful Journey with Our Vibrant Rainbow Pizza! 🍕\n</span>\n<span class='introduce-text'>\nIntroducing the Rainbow Pizza, a feast for the eyes and the palate that brings a burst of color to your dining table.\n</span>\n<span class='introduce-text'>\n🍅 Tomato Canvas: Our zesty tomato sauce sets the stage for a spectrum of flavors that are as beautiful as they are delicious.\n</span>\n<span class='introduce-text'>\n🧀 Cheesy Kaleidoscope: Melt into a world of mozzarella, cheddar, and provolone cheeses that create a harmonious blend of creamy goodness.\n</span>\n<span class='introduce-text'>\n🌽 Garden Harvest: Taste the rainbow with a medley of fresh veggies, from bright bell peppers to juicy tomatoes, celebrating nature's palette.\n</span>\n<span class='introduce-text'>\n🌱 Herbal Infusion: Fragrant basil, rosemary, and thyme elevate the taste experience, adding a touch of herbal elegance to every slice.\n</span>\n<span class='introduce-text'>\n🎨 Culinary Creativity: Crafted with passion by our culinary artists, the Rainbow Pizza is a canvas of flavors that's as exciting as it is delicious.\n</span>\n\n    </p>\n    `;\n    const dinnerDiv7= document.createElement('div');\n    \n    dinnerDiv7.classList.add('pizza-container');\n    dinnerDiv7.innerHTML=`\n    <h2  class='pizza-header'>Mushroom Pizza</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/6147822/pexels-photo-6147822.jpeg?auto=compress&cs=tinysrgb&w=1600'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n🍄 Dive into Earthy Delights with Our Irresistible Mushroom Pizza! 🍕\n</span>\n\n<span class='introduce-text'>\nIntroducing the Mushroom Pizza, a culinary symphony that celebrates the rich and savory flavors of the forest.\n</span>\n\n<span class='introduce-text'>\n🍅 Umami Fusion: Our umami-rich tomato sauce perfectly complements the earthy goodness of freshly sautéed mushrooms.\n</span>\n\n<span class='introduce-text'>\n🧀 Creamy Dream: Melt into layers of mozzarella and creamy ricotta cheese, creating a velvety contrast to the hearty mushrooms.\n</span>\n\n<span class='introduce-text'>\n🌿 Herbal Elegance: Fragrant thyme and oregano dance across each slice, enhancing the natural flavors with a touch of herbal sophistication.\n</span>\n\n<span class='introduce-text'>\n🌱 Farm-to-Table: Handpicked mushrooms and thoughtfully sourced ingredients ensure a pizza that's as fresh as it is delicious.\n</span>\n\n<span class='introduce-text'>\n👨‍🍳 Crafted with Care: Our skilled chefs pour their passion into every Mushroom Pizza, transforming simple ingredients into a taste sensation.\n</span>\n\n    </p>\n    `;\n    menuDiv.appendChild(dinnerDiv);\n    menuDiv.appendChild(dinnerDiv2);\n    menuDiv.appendChild(dinnerDiv3);\n    menuDiv.appendChild(dinnerDiv4);\n    menuDiv.appendChild(dinnerDiv5);\n    menuDiv.appendChild(dinnerDiv6);\n    menuDiv.appendChild(dinnerDiv7);\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant/./src/menuPage.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _createBtns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBtns */ \"./src/createBtns.js\");\n\n\n\nfunction initialPage(){\n    (0,_createBtns__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPage);\n\n//# sourceURL=webpack://restaurant/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\n\nconst createRestaurantPage=()=>{\n    const container = document.getElementById('content');\n    const pageContent = document.createElement('div');\n    pageContent.classList.add(\"page-content\");\n    container.appendChild(pageContent);\n    const landingContainer = document.createElement('div');\n    landingContainer.setAttribute('id','main-container')\n    // Create Header\n    const header=document.createElement('h1');\n    header.classList.add('landing-header');\n    header.textContent='Welcome to Pizzaria Delizioso : Where Flavor Comes to Life!';\n    \n    landingContainer.appendChild(header)\n\n    // Create paragraph\n\n    const paragraph=document.createElement('p');\n    paragraph.classList.add('landing-text')\n    paragraph.innerHTML=`Indulge your senses in a culinary journey that celebrates the art of pizza making at Pizzaria Delizioso. Our charming restaurant invites you to experience the perfect blend of tradition and innovation, all in a single slice.\n    \n    <span class='landing-text-header'>Savor the Craftsmanship:</span>\n    \n    \n    At Pizzaria Delizioso, crafting pizzas is an art form. Our master chefs meticulously handpick the freshest ingredients, from locally sourced vegetables to premium meats, to create each masterpiece. With passion and dedication, our team kneads the dough to perfection, building the foundation for a symphony of flavors.\n    \n    <span class='landing-text-header'>A Symphony of Flavors:</span>\n    Prepare to be swept away by a symphony of flavors that dance upon your taste buds. Our diverse menu offers an array of classic and inventive pizzas that cater to every palate. From the rich and hearty Margherita Classica, topped with plump tomatoes and fresh basil, to the daring Truffle Fantasy, adorned with luxurious truffle oil and mushrooms, our selection promises a delightful journey through the world of pizza.\n    \n    <span class='landing-text-header'>Beyond the Crust:</span>\n    Our commitment to excellence extends beyond the crust. Indulge in a selection of delectable appetizers, crisp salads, and savory pasta dishes that complement the star of the show – our pizzas. Each dish is a harmonious blend of authentic Italian recipes and modern twists, creating a dining experience that's as memorable as it is satisfying.\n    \n    <span class='landing-text-header'>Cozy Ambiance:</span>\n    Step into a warm and welcoming atmosphere that invites you to relax and enjoy every moment. Whether you're sharing a meal with loved ones, embarking on a romantic date night, or simply seeking solace in the company of good food, Pizzaria Delizioso sets the stage for unforgettable memories.\n    \n    <span class='landing-text-header'>Exquisite Pairings:</span>\n    Elevate your culinary journey with a thoughtfully curated selection of wines, craft beers, and artisanal beverages. Our knowledgeable staff is ready to guide you through pairings that accentuate the flavors of your chosen dishes, ensuring a symposium of taste that lingers long after the last bite.\n    \n    <span class='landing-text-header'>Come Join Us:</span>\n    Pizzaria Delizioso is more than just a restaurant; it's a celebration of passion, flavor, and community. Join us and discover a haven where each pizza tells a story, each bite ignites a sensation, and each visit becomes a cherished memory. From casual gatherings to special occasions, we're here to create an experience that transcends the ordinary.\n    \n    Visit Pizzaria Delizioso today, and embark on a journey of taste that will redefine your perception of pizza.\n    \n    <span class='italic'>Taste. Passion. Delizioso.</span>\n    \n    Experience the Essence of Pizza Perfection.`\n    landingContainer.appendChild(paragraph);\n\n   console.log('5');\n    pageContent.appendChild(landingContainer);\n\n}\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantPage);\n\n//# sourceURL=webpack://restaurant/./src/restaurant.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;