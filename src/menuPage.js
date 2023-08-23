const createMenu = ()=>{
    const container  = document.getElementById('content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content');
    container.appendChild(pageContent);

    pageContent.style.height='max-content';
    const headerMenu = document.createElement('h1');
    
    headerMenu.textContent='-MENU-'
    pageContent.appendChild(headerMenu);

    const menuDiv= document.createElement('div');
    pageContent.appendChild(menuDiv);
    menuDiv.classList.add('menu-container');
    const dinnerDiv= document.createElement('div');
   
    dinnerDiv.classList.add('pizza-container');
    dinnerDiv.innerHTML=`
    <h2 class='pizza-header'>Margarita</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1600'>
    <p class='pizza-text'>
    <span class='introduce-text-header'>🍕 Discover Pizza Perfection with Our Margherita Delight! 🌿</span>
    <span class='introduce-text'>
Introducing the Margherita Pizza, a timeless classic that captures the essence of Italian culinary tradition.
</span>
<span class='introduce-text'>
🍅 Tomato Splendor: Experience the burst of sun-kissed tomatoes, harmonizing flawlessly with our tangy tomato sauce.
</span>
<span class='introduce-text'>
🧀 Mozzarella Magic: Melt into layers of premium mozzarella cheese, delicately balanced for that perfect stretch and richness.
</span>
<span class='introduce-text'>
🌱 Basil Elegance: Freshly picked basil leaves crown each slice, infusing a fragrant aroma and a touch of herbal sophistication.
</span>
<span class='introduce-text'>
🌞 Simplicity Redefined: Embrace the beauty of simplicity as handcrafted dough and minimalistic ingredients blend into a symphony of taste.
</span>
<span class='introduce-text'>
👨‍🍳 Crafted with Love: Our skilled chefs pour their passion into every Margherita Pizza, creating a masterpiece that tells a story of culinary expertise.
</span>  
</p>
    
    `;
    const dinnerDiv2= document.createElement('div');

    dinnerDiv2.classList.add('pizza-container');
    dinnerDiv2.innerHTML=`
    <h2 class='pizza-header'>Pepperoni</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
    <p class='pizza-text'>
    <span class='introduce-text-header'>
    🍕 Elevate Your Cravings with Our Irresistible Pepperoni Pizza! 🌶️
    </span>
    <span class='introduce-text'>
Introducing the Pepperoni Pizza, a symphony of flavors that ignites your taste buds with every bite.
</span>
<span class='introduce-text'>
🍅 Bold Tomato Kick: Our zesty tomato sauce provides the perfect canvas for the starring act of savory pepperoni.
</span>
<span class='introduce-text'>
🧀 Cheese Galore: Melt into a sea of melted mozzarella, amplifying the richness of the pepperoni's smoky goodness.
</span>
<span class='introduce-text'>
🌶️ Spicy Sensation: Savor the kick of thinly sliced, perfectly seasoned pepperoni that adds just the right amount of heat.
</span>
<span class='introduce-text'>
👌 Pizza Mastery: Crafted by our expert chefs, each Pepperoni Pizza embodies culinary finesse and a passion for perfection.
</span>
<span class='introduce-text'>
🎉 Party Favorite: Whether it's a game night, a celebration, or a cozy evening in, our Pepperoni Pizza is always the life of the party.
</span>    
</p>
    `;
    const dinnerDiv3= document.createElement('div');
    
    dinnerDiv3.classList.add('pizza-container');
    dinnerDiv3.innerHTML=`
    <h2 class='pizza-header'>Eggplant and spinach</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/1437812/pexels-photo-1437812.jpeg?auto=compress&cs=tinysrgb&w=1600'>
    <p  class='pizza-text'><span class='introduce-text-header'>🍆 Introducing Our Delectable Eggplant Pizza! 🍕</span>
    <span class='introduce-text'>
    Indulge in a slice of pure innovation with our Eggplant Pizza. Crafted to perfection, this culinary masterpiece redefines pizza enjoyment.
    </span>
    <span class ='introduce-text'>
    🌱 Fresh Twist: Our handpicked eggplant slices serve as a nutritious and flavorful crust alternative.
    </span>
    <span class ='introduce-text'>
        🧀 Cheesy Bliss: Generously topped with a blend of premium cheeses that melt to perfection, creating a symphony of flavors in every bite.
    </span>
    <span class ='introduce-text'>
    
    🍅 Garden Freshness: Bursting with vibrant tomato sauce and a medley of fresh toppings that celebrate the best of nature's bounty.
    </span>
    <span class ='introduce-text'>
    
    🌶️ Bold Flavors: A touch of herbs and spices adds an irresistible kick, elevating your taste experience to a whole new level.
    </span>
    
    `;
    const dinnerDiv4= document.createElement('div');
    
    dinnerDiv4.classList.add('pizza-container');
    dinnerDiv4.innerHTML=`
    <h2 class='pizza-header'>Olive Garden</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
    <p class='pizza-text'>
    <span class='introduce-text-header'>
    🌿 Embark on a Flavorful Journey with Our Olive Garden Pizza! 🍕
    </span>

    <span class='introduce-text'>
Introducing the Olive Garden Pizza, a culinary adventure that transports you to the heart of Mediterranean indulgence.
</span>

<span class='introduce-text'>
🍅 Mediterranean Bliss: Immerse yourself in the robust flavors of sun-ripened tomatoes and our secret blend of olive garden herbs.
</span>

<span class='introduce-text'>
🧀 Wholesome Cheeses: Revel in the harmony of feta, mozzarella, and Parmesan cheeses that create a delightful tapestry of creamy goodness.
</span>

<span class='introduce-text'>
🍈 Garden Freshness: A symphony of olives, bell peppers, and artichokes dances across each slice, celebrating the bounties of the garden.
</span>

<span class='introduce-text'>
🌿 Herbaceous Elegance: Fragrant rosemary, basil, and thyme infuse a touch of herbal sophistication, elevating your taste experience.
</span>


    </p>
    `;
    const dinnerDiv5= document.createElement('div');
    
    dinnerDiv5.classList.add('pizza-container');
    dinnerDiv5.innerHTML=`
    <h2 class='pizza-header'>Italian Pizza</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
    <p class='pizza-text'>
    <span class='introduce-text-header'>
    🇮🇹 Embark on a Flavorful Journey to Italy with Our Authentic Italian Pizza! 🍕
    </span>

    <span class='introduce-text'>
Introducing the Italian Pizza, a culinary masterpiece that pays homage to the rich traditions and vibrant flavors of Italy.
</span>

<span class='introduce-text'>
🍅 Tomatoes From the Sun: Experience the burst of sweet San Marzano tomatoes, handpicked at the peak of ripeness for an unforgettable taste.
</span>

<span class='introduce-text'>
🧀 Melting Perfection: Immerse yourself in layers of creamy mozzarella and aged Parmigiano-Reggiano, crafted to achieve the ultimate melt.
</span>

<span class='introduce-text'>
🌿 Fresh Herb Symphony: Basil, oregano, and thyme unite in a fragrant dance, infusing every bite with the essence of Italian countryside.
</span>

<span class='introduce-text'>
🍖 Cured Delights: Embark on a journey of taste with our selection of authentic Italian cured meats, from velvety prosciutto to spicy salami.
</span>


   
</p>
    `;
    const dinnerDiv6= document.createElement('div');
    
    dinnerDiv6.classList.add('pizza-container');
    dinnerDiv6.innerHTML=`
    <h2 class='pizza-header'>Rainbow Pizza</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&w=1600'>
    <p class='pizza-text'>
    <span class='introduce-text-header'>
🌈 Experience a Flavorful Journey with Our Vibrant Rainbow Pizza! 🍕
</span>
<span class='introduce-text'>
Introducing the Rainbow Pizza, a feast for the eyes and the palate that brings a burst of color to your dining table.
</span>
<span class='introduce-text'>
🍅 Tomato Canvas: Our zesty tomato sauce sets the stage for a spectrum of flavors that are as beautiful as they are delicious.
</span>
<span class='introduce-text'>
🧀 Cheesy Kaleidoscope: Melt into a world of mozzarella, cheddar, and provolone cheeses that create a harmonious blend of creamy goodness.
</span>
<span class='introduce-text'>
🌽 Garden Harvest: Taste the rainbow with a medley of fresh veggies, from bright bell peppers to juicy tomatoes, celebrating nature's palette.
</span>
<span class='introduce-text'>
🌱 Herbal Infusion: Fragrant basil, rosemary, and thyme elevate the taste experience, adding a touch of herbal elegance to every slice.
</span>
<span class='introduce-text'>
🎨 Culinary Creativity: Crafted with passion by our culinary artists, the Rainbow Pizza is a canvas of flavors that's as exciting as it is delicious.
</span>

    </p>
    `;
    const dinnerDiv7= document.createElement('div');
    
    dinnerDiv7.classList.add('pizza-container');
    dinnerDiv7.innerHTML=`
    <h2  class='pizza-header'>Mushroom Pizza</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/6147822/pexels-photo-6147822.jpeg?auto=compress&cs=tinysrgb&w=1600'>
    <p class='pizza-text'>
    <span class='introduce-text-header'>
🍄 Dive into Earthy Delights with Our Irresistible Mushroom Pizza! 🍕
</span>

<span class='introduce-text'>
Introducing the Mushroom Pizza, a culinary symphony that celebrates the rich and savory flavors of the forest.
</span>

<span class='introduce-text'>
🍅 Umami Fusion: Our umami-rich tomato sauce perfectly complements the earthy goodness of freshly sautéed mushrooms.
</span>

<span class='introduce-text'>
🧀 Creamy Dream: Melt into layers of mozzarella and creamy ricotta cheese, creating a velvety contrast to the hearty mushrooms.
</span>

<span class='introduce-text'>
🌿 Herbal Elegance: Fragrant thyme and oregano dance across each slice, enhancing the natural flavors with a touch of herbal sophistication.
</span>

<span class='introduce-text'>
🌱 Farm-to-Table: Handpicked mushrooms and thoughtfully sourced ingredients ensure a pizza that's as fresh as it is delicious.
</span>

<span class='introduce-text'>
👨‍🍳 Crafted with Care: Our skilled chefs pour their passion into every Mushroom Pizza, transforming simple ingredients into a taste sensation.
</span>

    </p>
    `;
    menuDiv.appendChild(dinnerDiv);
    menuDiv.appendChild(dinnerDiv2);
    menuDiv.appendChild(dinnerDiv3);
    menuDiv.appendChild(dinnerDiv4);
    menuDiv.appendChild(dinnerDiv5);
    menuDiv.appendChild(dinnerDiv6);
    menuDiv.appendChild(dinnerDiv7);
}



export default createMenu;