import createRestaurantPage from "./restaurant";
import createMenu from './menuPage';
import createAbout from './aboutPage';


const createButtons=()=>{
    const mainContainer = document.getElementById('content');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    
    btn1.id='button-1';
    btn2.id='button-2';
    btn3.id='button-3';
    btn1.textContent='Home'
    btn2.textContent='Menu'
    btn3.textContent='About'
    btn1.classList.add('btn');
    btn2.classList.add('btn');
    btn3.classList.add('btn');
    mainContainer.appendChild(btn1);
    mainContainer.appendChild(btn2);
    mainContainer.appendChild(btn3);


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