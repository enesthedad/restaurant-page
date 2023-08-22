const createMenu = ()=>{
    const container  = document.getElementById('content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content');
    container.appendChild(pageContent);


    const headerMenu = document.createElement('h1');
    headerMenu.textContent='MENU'
    pageContent.appendChild(headerMenu);

    const menuDiv= document.createElement('div');
    pageContent.appendChild(menuDiv);
    menuDiv.classList.add('menu-container');
    const dinnerDiv= document.createElement('div');
    dinnerDiv.height='750';
    dinnerDiv.width='750';
    dinnerDiv.classList.add('pizza-container');
    dinnerDiv.innerHTML=`
    <h2>Margarita</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&w=1600'>
    <p>Margarita pizza, domates, mozarella, fesleğen, zeytinyağı ve tuzla yapılan Napoli pizzası</p>
    <hr>
    `;
    const dinnerDiv2= document.createElement('div');
    dinnerDiv2.height='750';
    dinnerDiv2.width='750';
    dinnerDiv2.classList.add('pizza-container');
    dinnerDiv2.innerHTML=`
    <h2>Pepperoni</h2>
    <img class='pizza-img' src='https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
    <p>pepperoni, pepperoni sos, mozerella peyniri, mısır, yeşil zeytin ve siyah zeytin </p>
    `;
    menuDiv.appendChild(dinnerDiv);
    menuDiv.appendChild(dinnerDiv2);

}



export default createMenu;