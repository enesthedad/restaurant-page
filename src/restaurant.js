



const createRestaurantPage=()=>{
    const container = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add("page-content");
    container.appendChild(pageContent);
    const landingContainer = document.createElement('div');
    landingContainer.setAttribute('id','main-container')
    // Create Header
    const header=document.createElement('h1');
    header.classList.add('landing-header');
    header.textContent='Welcome to Pizzaria Delizioso : Where Flavor Comes to Life!';
    
    landingContainer.appendChild(header)

    // Create paragraph

    const paragraph=document.createElement('p');
    paragraph.classList.add('landing-text')
    paragraph.innerHTML=`Indulge your senses in a culinary journey that celebrates the art of pizza making at Pizzaria Delizioso. Our charming restaurant invites you to experience the perfect blend of tradition and innovation, all in a single slice.
    
    <span class='landing-text-header'>Savor the Craftsmanship:</span>
    
    
    At Pizzaria Delizioso, crafting pizzas is an art form. Our master chefs meticulously handpick the freshest ingredients, from locally sourced vegetables to premium meats, to create each masterpiece. With passion and dedication, our team kneads the dough to perfection, building the foundation for a symphony of flavors.
    
    <span class='landing-text-header'>A Symphony of Flavors:</span>
    Prepare to be swept away by a symphony of flavors that dance upon your taste buds. Our diverse menu offers an array of classic and inventive pizzas that cater to every palate. From the rich and hearty Margherita Classica, topped with plump tomatoes and fresh basil, to the daring Truffle Fantasy, adorned with luxurious truffle oil and mushrooms, our selection promises a delightful journey through the world of pizza.
    
    <span class='landing-text-header'>Beyond the Crust:</span>
    Our commitment to excellence extends beyond the crust. Indulge in a selection of delectable appetizers, crisp salads, and savory pasta dishes that complement the star of the show – our pizzas. Each dish is a harmonious blend of authentic Italian recipes and modern twists, creating a dining experience that's as memorable as it is satisfying.
    
    <span class='landing-text-header'>Cozy Ambiance:</span>
    Step into a warm and welcoming atmosphere that invites you to relax and enjoy every moment. Whether you're sharing a meal with loved ones, embarking on a romantic date night, or simply seeking solace in the company of good food, Pizzaria Delizioso sets the stage for unforgettable memories.
    
    <span class='landing-text-header'>Exquisite Pairings:</span>
    Elevate your culinary journey with a thoughtfully curated selection of wines, craft beers, and artisanal beverages. Our knowledgeable staff is ready to guide you through pairings that accentuate the flavors of your chosen dishes, ensuring a symposium of taste that lingers long after the last bite.
    
    <span class='landing-text-header'>Come Join Us:</span>
    Pizzaria Delizioso is more than just a restaurant; it's a celebration of passion, flavor, and community. Join us and discover a haven where each pizza tells a story, each bite ignites a sensation, and each visit becomes a cherished memory. From casual gatherings to special occasions, we're here to create an experience that transcends the ordinary.
    
    Visit Pizzaria Delizioso today, and embark on a journey of taste that will redefine your perception of pizza.
    
    <span class='italic'>Taste. Passion. Delizioso.</span>
    
    Experience the Essence of Pizza Perfection.`
    landingContainer.appendChild(paragraph);

   console.log('5');
    pageContent.appendChild(landingContainer);

}




export default createRestaurantPage;