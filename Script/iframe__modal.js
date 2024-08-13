document.addEventListener('DOMContentLoaded',()=>{
    mainElement = document.querySelector('.modal-wrapper');
    imgElement =  document.querySelector('.video__img');
    
    modalHtml= `
        <div class="modal-background-blur"></div>
        <button class="modal-close">
        <svg width="64px" height="64px" viewBox="-8.16 -8.16 40.32 40.32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path fill="#767676" d="M19 5L5 19M5.00001 5L19 19" stroke="#f1f1f1" class="close-svg" stroke-width="1.128" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
        </svg>
        </button>
        <div class="iframe-container">
        <iframe src="https://www.youtube-nocookie.com/embed/Mdcw3Sb98DA?autoplay=1&modestbranding=1" frameborder="0" class="youtube-iframe" ></iframe>
    `
    // DEFINE FUNCTIONS
    function renderModalHtml(){
        mainElement.innerHTML = modalHtml;
        showModal();
        //add event listener
        closeBtn = document.querySelector('.modal-close');
        closeBtn.onclick = ()=>{
            console.log(closeBtn)
            closeModal()
        }
    }
    function closeModal(){
        mainElement.innerHTML = '';
        hideModal();
    }
    function showModal(){
        mainElement.style.opacity = 1;
        mainElement.style.zIndex = 100 ;
    }
    function hideModal(){
        mainElement.style.opacity = 0;
        mainElement.style.zIndex = -100 ;
    }
    //CODE
    imgElement.onclick = ()=>{
        renderModalHtml()
    }

})
