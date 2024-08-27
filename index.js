// Triggers page flip on click of prev/next buttons and right/left half
function onClick(event){
    let eleId ="";
    if(event.target) eleId = event.target.id; //on button click
    else eleId = event.id;                    //on clicking right/left half
    const [direction, pageId ] = eleId.split("-");

    if(direction === "to"){
        const prevPageEle = document.getElementById(pageId);
        const prevPageName = pageId.split("Page")[0];
        prevPageEle.classList.toggle(prevPageName+"Click");
        if(prevPageName === "cover") displayInstructions(true);
        if(prevPageName === "about") closeOpenProjects();
    }else if(direction === "from"){
        const currPageEle = document.getElementById(pageId);
        const currPageName = pageId.split("Page")[0];
        currPageEle.classList.add(currPageName+"Click");
        if(currPageName === "portfolio") closeOpenProjects();
    }
}

// Triggered on clicking cover page and flips to next page
function onCoverClick(event){
    const coverEle = document.querySelector(".cover");
    coverEle.classList.add("coverClick");
    displayInstructions(false);
}

// Display/Hide instructions based on page in the book
function displayInstructions(displayString){
    let display = ""
    if(displayString) display="visible";
    else display = "hidden";
    const instructionsEle = document.querySelectorAll(".instructions__description");
    for(let i=0;i<instructionsEle.length;i++){
        instructionsEle[i].style.visibility = display;
    }
}

// Handles form submission with user details
function onContactSubmit(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Form submitted! Check the console for details.');
}

// Displaying project details on clicking the project
function onProjectClick(event){
    closeOpenProjects();
    const projEle = event.target.closest(".portfolio__projects--item");
    const projEleId = projEle.id;
    const projCard = document.getElementById(projEleId+"--card");
        projCard.classList.add('projectClicked');
}

// Closing the project card details on clicking close button or leaving the project card
function onCardClose(event){
     let projCardId = ""
     //from mouseleave event
     if(event.classList && event.classList.value.includes("projectCard")){
        projCardId = event.id;
     }else{
        //from close btn
        event.stopPropagation();
        const projEle = event.target.closest(".portfolio__projects--item");
        const projEleId = projEle.id;
        projCardId = projEleId+"--card";
     }
    const projCard = document.getElementById(projCardId);
    projCard.classList.remove('projectClicked');
}

// Close all open projects when opening a different project
function closeOpenProjects(){
    const openProjEle = document.querySelectorAll(".projectClicked");
    for(let i=0;i<openProjEle.length;i++){
        const ele = document.getElementById(openProjEle[i].id);
        ele.classList.remove('projectClicked');
    }
}

// Triggering flip to previous page on clicking left half of page
function onLeftClick(event){
    const prevBtn = getBtnClick(event,"left");
    onClick(prevBtn);
}

// Triggering flip to next page on clicking right half of page
function onRightClick(event){
    const nextBtn = getBtnClick(event,"right");
    onClick(nextBtn);
}

// Simulate button click on left/right half of pages to prev/next buttons
function getBtnClick(event, direction){
    let btnClass = "";
    if(direction === "left") btnClass = 'prevBtn'
    else btnClass = 'nextBtn'
    const parentElement = event.target.parentElement;
    const targetChild = Array.from(parentElement.children).find(child => child.classList.contains('navButtons'));
    return Array.from(targetChild.children).find(child => child.classList.contains(btnClass));
}

// Add mouseleave event to project cards on initial load
function initializeEventListeners(){
    document.addEventListener('DOMContentLoaded', function() {
        const cardEleList = document.querySelectorAll('.projectCard');
        for(let i = 0;i<cardEleList.length;i++){
            cardEleList[i].addEventListener('mouseleave', ()=>{
                onCardClose(cardEleList[i]);
            });
        }
        
    });
}

initializeEventListeners();
