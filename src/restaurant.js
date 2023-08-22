



const createRestaurantPage=()=>{
    const container = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add("page-content");
    container.appendChild(pageContent);

    // Create Header
    const header=document.createElement('h1');
    header.classList.add('red');
    header.textContent='Welcome Our Page!';
    
    pageContent.appendChild(header)

    // Create IMG
    const image = document.createElement('img');
    image.src='https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    image.height='500';
    image.classList.add('border');
    pageContent.appendChild(image);
    // Create paragraph

    const paragraph=document.createElement('p');
    paragraph.textContent=`The best Restaurant!`
    pageContent.appendChild(paragraph);



}




export default createRestaurantPage;