(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("page-content"),e.appendChild(n);const t=document.createElement("div");t.setAttribute("id","main-container");const a=document.createElement("h1");a.classList.add("landing-header"),a.textContent="Welcome to Pizzaria Delizioso : Where Flavor Comes to Life!",t.appendChild(a);const s=document.createElement("p");s.classList.add("landing-text"),s.innerHTML="Indulge your senses in a culinary journey that celebrates the art of pizza making at Pizzaria Delizioso. Our charming restaurant invites you to experience the perfect blend of tradition and innovation, all in a single slice.\n    \n    <span class='landing-text-header'>Savor the Craftsmanship:</span>\n    \n    \n    At Pizzaria Delizioso, crafting pizzas is an art form. Our master chefs meticulously handpick the freshest ingredients, from locally sourced vegetables to premium meats, to create each masterpiece. With passion and dedication, our team kneads the dough to perfection, building the foundation for a symphony of flavors.\n    \n    <span class='landing-text-header'>A Symphony of Flavors:</span>\n    Prepare to be swept away by a symphony of flavors that dance upon your taste buds. Our diverse menu offers an array of classic and inventive pizzas that cater to every palate. From the rich and hearty Margherita Classica, topped with plump tomatoes and fresh basil, to the daring Truffle Fantasy, adorned with luxurious truffle oil and mushrooms, our selection promises a delightful journey through the world of pizza.\n    \n    <span class='landing-text-header'>Beyond the Crust:</span>\n    Our commitment to excellence extends beyond the crust. Indulge in a selection of delectable appetizers, crisp salads, and savory pasta dishes that complement the star of the show – our pizzas. Each dish is a harmonious blend of authentic Italian recipes and modern twists, creating a dining experience that's as memorable as it is satisfying.\n    \n    <span class='landing-text-header'>Cozy Ambiance:</span>\n    Step into a warm and welcoming atmosphere that invites you to relax and enjoy every moment. Whether you're sharing a meal with loved ones, embarking on a romantic date night, or simply seeking solace in the company of good food, Pizzaria Delizioso sets the stage for unforgettable memories.\n    \n    <span class='landing-text-header'>Exquisite Pairings:</span>\n    Elevate your culinary journey with a thoughtfully curated selection of wines, craft beers, and artisanal beverages. Our knowledgeable staff is ready to guide you through pairings that accentuate the flavors of your chosen dishes, ensuring a symposium of taste that lingers long after the last bite.\n    \n    <span class='landing-text-header'>Come Join Us:</span>\n    Pizzaria Delizioso is more than just a restaurant; it's a celebration of passion, flavor, and community. Join us and discover a haven where each pizza tells a story, each bite ignites a sensation, and each visit becomes a cherished memory. From casual gatherings to special occasions, we're here to create an experience that transcends the ordinary.\n    \n    Visit Pizzaria Delizioso today, and embark on a journey of taste that will redefine your perception of pizza.\n    \n    <span class='italic'>Taste. Passion. Delizioso.</span>\n    \n    Experience the Essence of Pizza Perfection.",t.appendChild(s),console.log("5"),n.appendChild(t)},n=()=>{var e=L.map("map").setView([43.8605526,18.4131988],17);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">Enes Soyturk</a> contributors'}).addTo(e),L.marker([43.8605526,18.4131988]).addTo(e).bindPopup("Best Italian Pizza in Europe!").openPopup()},t=()=>{const e=document.getElementById("content"),n=document.querySelector(".page-content");n&&e.removeChild(n)};(()=>{document.getElementById("content");const a=document.getElementById("navbar"),s=document.createElement("button"),i=document.createElement("button"),o=document.createElement("button"),r=document.createElement("div"),c=document.createElement("div");c.setAttribute("id","button-container"),r.setAttribute("id","logo"),r.textContent="{PiZZa}",s.id="button-1",i.id="button-2",o.id="button-3",s.textContent="Home",i.textContent="Menu",o.textContent="About",s.classList.add("btn"),i.classList.add("btn"),o.classList.add("btn"),a.appendChild(r),c.appendChild(s),c.appendChild(i),c.appendChild(o),a.appendChild(c),s.addEventListener("click",(()=>{t(),e()})),i.addEventListener("click",(()=>{t(),(()=>{const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("page-content"),e.appendChild(n),n.style.height="max-content";const t=document.createElement("h1");t.textContent="-MENU-",n.appendChild(t);const a=document.createElement("div");n.appendChild(a),a.classList.add("menu-container");const s=document.createElement("div");s.classList.add("pizza-container"),s.innerHTML="\n    <h2 class='pizza-header'>Margarita</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1600'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>Discover Pizza Perfection with Our Margherita Delight! 🌿</span>\n    <span class='introduce-text'>\n    🍕Introducing the Margherita Pizza, a timeless classic that captures the essence of Italian culinary tradition.\n</span>\n<span class='introduce-text'>\n🍅 Tomato Splendor: Experience the burst of sun-kissed tomatoes, harmonizing flawlessly with our tangy tomato sauce.\n</span>\n<span class='introduce-text'>\n🧀 Mozzarella Magic: Melt into layers of premium mozzarella cheese, delicately balanced for that perfect stretch and richness.\n</span>\n<span class='introduce-text'>\n🌱 Basil Elegance: Freshly picked basil leaves crown each slice, infusing a fragrant aroma and a touch of herbal sophistication.\n</span>\n<span class='introduce-text'>\n🌞 Simplicity Redefined: Embrace the beauty of simplicity as handcrafted dough and minimalistic ingredients blend into a symphony of taste.\n</span>\n<span class='introduce-text'>\n👨‍🍳 Crafted with Love: Our skilled chefs pour their passion into every Margherita Pizza, creating a masterpiece that tells a story of culinary expertise.\n</span>  \n</p>\n    \n    ";const i=document.createElement("div");i.classList.add("pizza-container"),i.innerHTML="\n    <h2 class='pizza-header'>Pepperoni</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n    🌶️Elevate Your Cravings with Our Irresistible Pepperoni Pizza! \n    </span>\n    <span class='introduce-text'>\n    🍕Introducing the Pepperoni Pizza, a symphony of flavors that ignites your taste buds with every bite.\n</span>\n<span class='introduce-text'>\n🍅 Bold Tomato Kick: Our zesty tomato sauce provides the perfect canvas for the starring act of savory pepperoni.\n</span>\n<span class='introduce-text'>\n🧀 Cheese Galore: Melt into a sea of melted mozzarella, amplifying the richness of the pepperoni's smoky goodness.\n</span>\n<span class='introduce-text'>\n🌶️ Spicy Sensation: Savor the kick of thinly sliced, perfectly seasoned pepperoni that adds just the right amount of heat.\n</span>\n<span class='introduce-text'>\n👌 Pizza Mastery: Crafted by our expert chefs, each Pepperoni Pizza embodies culinary finesse and a passion for perfection.\n</span>\n<span class='introduce-text'>\n🎉 Party Favorite: Whether it's a game night, a celebration, or a cozy evening in, our Pepperoni Pizza is always the life of the party.\n</span>    \n</p>\n    ";const o=document.createElement("div");o.classList.add("pizza-container"),o.innerHTML="\n    <h2 class='pizza-header'>Eggplant and spinach</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/1437812/pexels-photo-1437812.jpeg?auto=compress&cs=tinysrgb&w=1600'>\n    <p  class='pizza-text'><span class='introduce-text-header'>🍆 Introducing Our Delectable Eggplant Pizza! </span>\n    <span class='introduce-text'>\n    🍕Indulge in a slice of pure innovation with our Eggplant Pizza. Crafted to perfection, this culinary masterpiece redefines pizza enjoyment.\n    </span>\n    <span class ='introduce-text'>\n    🌱 Fresh Twist: Our handpicked eggplant slices serve as a nutritious and flavorful crust alternative.\n    </span>\n    <span class ='introduce-text'>\n        🧀 Cheesy Bliss: Generously topped with a blend of premium cheeses that melt to perfection, creating a symphony of flavors in every bite.\n    </span>\n    <span class ='introduce-text'>\n    \n    🍅 Garden Freshness: Bursting with vibrant tomato sauce and a medley of fresh toppings that celebrate the best of nature's bounty.\n    </span>\n    <span class ='introduce-text'>\n    \n    🌶️ Bold Flavors: A touch of herbs and spices adds an irresistible kick, elevating your taste experience to a whole new level.\n    </span>\n    \n    ";const r=document.createElement("div");r.classList.add("pizza-container"),r.innerHTML="\n    <h2 class='pizza-header'>Olive Garden</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n    🌿 Embark on a Flavorful Journey with Our Olive Garden Pizza! \n    </span>\n\n    <span class='introduce-text'>\n    🍕Introducing the Olive Garden Pizza, a culinary adventure that transports you to the heart of Mediterranean indulgence.\n</span>\n\n<span class='introduce-text'>\n🍅 Mediterranean Bliss: Immerse yourself in the robust flavors of sun-ripened tomatoes and our secret blend of olive garden herbs.\n</span>\n\n<span class='introduce-text'>\n🧀 Wholesome Cheeses: Revel in the harmony of feta, mozzarella, and Parmesan cheeses that create a delightful tapestry of creamy goodness.\n</span>\n\n<span class='introduce-text'>\n🍈 Garden Freshness: A symphony of olives, bell peppers, and artichokes dances across each slice, celebrating the bounties of the garden.\n</span>\n\n<span class='introduce-text'>\n🌿 Herbaceous Elegance: Fragrant rosemary, basil, and thyme infuse a touch of herbal sophistication, elevating your taste experience.\n</span>\n\n\n    </p>\n    ";const c=document.createElement("div");c.classList.add("pizza-container"),c.innerHTML="\n    <h2 class='pizza-header'>Italian Pizza</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n    🇮🇹 Embark on a Flavorful Journey to Italy with Our Authentic Italian Pizza! \n    </span>\n\n    <span class='introduce-text'>\n    🍕Introducing the Italian Pizza, a culinary masterpiece that pays homage to the rich traditions and vibrant flavors of Italy.\n</span>\n\n<span class='introduce-text'>\n🍅 Tomatoes From the Sun: Experience the burst of sweet San Marzano tomatoes, handpicked at the peak of ripeness for an unforgettable taste.\n</span>\n\n<span class='introduce-text'>\n🧀 Melting Perfection: Immerse yourself in layers of creamy mozzarella and aged Parmigiano-Reggiano, crafted to achieve the ultimate melt.\n</span>\n\n<span class='introduce-text'>\n🌿 Fresh Herb Symphony: Basil, oregano, and thyme unite in a fragrant dance, infusing every bite with the essence of Italian countryside.\n</span>\n\n<span class='introduce-text'>\n🍖 Cured Delights: Embark on a journey of taste with our selection of authentic Italian cured meats, from velvety prosciutto to spicy salami.\n</span>\n\n\n   \n</p>\n    ";const l=document.createElement("div");l.classList.add("pizza-container"),l.innerHTML="\n    <h2 class='pizza-header'>Rainbow Pizza</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&w=1600'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n🌈 Experience a Flavorful Journey with Our Vibrant Rainbow Pizza! \n</span>\n<span class='introduce-text'>\n🍕Introducing the Rainbow Pizza, a feast for the eyes and the palate that brings a burst of color to your dining table.\n</span>\n<span class='introduce-text'>\n🍅 Tomato Canvas: Our zesty tomato sauce sets the stage for a spectrum of flavors that are as beautiful as they are delicious.\n</span>\n<span class='introduce-text'>\n🧀 Cheesy Kaleidoscope: Melt into a world of mozzarella, cheddar, and provolone cheeses that create a harmonious blend of creamy goodness.\n</span>\n<span class='introduce-text'>\n🌽 Garden Harvest: Taste the rainbow with a medley of fresh veggies, from bright bell peppers to juicy tomatoes, celebrating nature's palette.\n</span>\n<span class='introduce-text'>\n🌱 Herbal Infusion: Fragrant basil, rosemary, and thyme elevate the taste experience, adding a touch of herbal elegance to every slice.\n</span>\n<span class='introduce-text'>\n🎨 Culinary Creativity: Crafted with passion by our culinary artists, the Rainbow Pizza is a canvas of flavors that's as exciting as it is delicious.\n</span>\n\n    </p>\n    ";const p=document.createElement("div");p.classList.add("pizza-container"),p.innerHTML="\n    <h2  class='pizza-header'>Mushroom Pizza</h2>\n    <img class='pizza-img' src='https://images.pexels.com/photos/6147822/pexels-photo-6147822.jpeg?auto=compress&cs=tinysrgb&w=1600'>\n    <p class='pizza-text'>\n    <span class='introduce-text-header'>\n🍄 Dive into Earthy Delights with Our Irresistible Mushroom Pizza! 🍕\n</span>\n\n<span class='introduce-text'>\nIntroducing the Mushroom Pizza, a culinary symphony that celebrates the rich and savory flavors of the forest.\n</span>\n\n<span class='introduce-text'>\n🍅 Umami Fusion: Our umami-rich tomato sauce perfectly complements the earthy goodness of freshly sautéed mushrooms.\n</span>\n\n<span class='introduce-text'>\n🧀 Creamy Dream: Melt into layers of mozzarella and creamy ricotta cheese, creating a velvety contrast to the hearty mushrooms.\n</span>\n\n<span class='introduce-text'>\n🌿 Herbal Elegance: Fragrant thyme and oregano dance across each slice, enhancing the natural flavors with a touch of herbal sophistication.\n</span>\n\n<span class='introduce-text'>\n🌱 Farm-to-Table: Handpicked mushrooms and thoughtfully sourced ingredients ensure a pizza that's as fresh as it is delicious.\n</span>\n\n<span class='introduce-text'>\n👨‍🍳 Crafted with Care: Our skilled chefs pour their passion into every Mushroom Pizza, transforming simple ingredients into a taste sensation.\n</span>\n\n    </p>\n    ",a.appendChild(s),a.appendChild(i),a.appendChild(o),a.appendChild(r),a.appendChild(c),a.appendChild(l),a.appendChild(p)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content"),t.style.height="100vh";const a=document.createElement("div"),s=document.createElement("div");e.appendChild(t),a.innerHTML="\n    \n    <div id='info'>\n    <h2 class='info-header'>Contact</h2>\n    <hr>\n    <h3 class='info-header'>Phone</h3>\n    <p>555-55-55</p>\n    <br>\n    <h3 class='info-header'>e-mail</h3>\n    <p>thisisouremailaddress@notfake.com</p>\n    </div>\n    \n    \n    \n    ",s.innerHTML='<div id="map">\n\n    </div>',t.appendChild(s),t.appendChild(a),n()})(),n()})),r.addEventListener("click",(()=>{t(),e()}))})(),e()})();