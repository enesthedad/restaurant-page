import createRestaurantPage from "./restaurant";
import createMenu from './menuPage';
import createAbout from './aboutPage';
import getLocation from "./location";


const createButtons=()=>{
    const mainContainer = document.getElementById('content');
    const navbar = document.getElementById('navbar');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    const logo= document.createElement('div');
    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('id','button-container');
    logo.setAttribute('id','logo');
    logo.textContent=`{PiZZa}`;
    btn1.id='button-1';
    btn2.id='button-2';
    btn3.id='button-3';
    btn1.textContent='Home'
    btn2.textContent='Menu'
    btn3.textContent='About'
    btn1.classList.add('btn');
    btn2.classList.add('btn');
    btn3.classList.add('btn');
    navbar.appendChild(logo);
    btnContainer.appendChild(btn1);
    btnContainer.appendChild(btn2);
    btnContainer.appendChild(btn3);
    navbar.appendChild(btnContainer);

    btn1.addEventListener('click',()=>{
        removePage();
        createRestaurantPage();
    })

    btn2.addEventListener('click',()=>{

        removePage();
        createMenu();
    })
    btn3.addEventListener('click',()=>{
        removePage();
        createAbout();
        getLocation();
    })
    logo.addEventListener('click',()=>{
        removePage();
        createRestaurantPage();
    })

}
const removePage=()=>{
    const mainContainer = document.getElementById('content');

    const pageContent= document.querySelector('.page-content');
    if(pageContent){
        mainContainer.removeChild(pageContent);
    }



}


export default createButtons;