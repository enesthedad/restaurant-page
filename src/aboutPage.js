import getLocation from "./location";

const createAbout = ()=>{
    const container = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    pageContent.style.height='100vh';
    const infoContainer = document.createElement('div');

    const mapContainer = document.createElement('div');
    container.appendChild(pageContent);
    infoContainer.innerHTML=`
    
    <div id='info'>
    <h2 class='info-header'>Contact</h2>
    <hr>
    <h3 class='info-header'>Phone</h3>
    <p>555-55-55</p>
    <br>
    <h3 class='info-header'>e-mail</h3>
    <p>thisisouremailaddress@notfake.com</p>
    </div>
    
    
    
    `
    mapContainer.innerHTML=`<div id="map">

    </div>`;
    pageContent.appendChild(mapContainer);
    pageContent.appendChild(infoContainer);
    
    
    getLocation();
}



export default createAbout;