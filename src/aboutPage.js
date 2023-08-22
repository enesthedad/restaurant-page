const createAbout = ()=>{
    const container = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const formContainer = document.createElement('form');


    container.appendChild(pageContent);
    pageContent.appendChild(formContainer);
    const inputName = document.createElement('div');
    const inputSurname = document.createElement('div');
    const confirmBtn = document.createElement('button');
    confirmBtn.textContent='Confirm';
    inputName.innerHTML=`<label>Name</label><input type='text'>`;
    inputSurname.innerHTML=`<label>Surname</label><input type='text'>`;
    formContainer.appendChild(inputName);
    formContainer.appendChild(inputSurname);
    formContainer.appendChild(confirmBtn);

}



export default createAbout;