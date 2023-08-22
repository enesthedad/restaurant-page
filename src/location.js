

const getLocation = () => {
   
    var map = L.map('map').setView([43.8605526, 18.4131988], 17);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Enes Soyturk</a> contributors'
    }).addTo(map);

    L.marker([43.8605526, 18.4131988]).addTo(map)
    .bindPopup('Best Italian Pizza in Europe!')
    .openPopup();
    
}


export default getLocation;