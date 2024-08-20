function onClick(event){
    let eleId ="";
    if(event.target) eleId = event.target.id; //on button click
    else eleId = event.id;                    //on clicking right/left half
    const [direction, pageId ] = eleId.split("-");

    if(direction === "to"){
        const prevPageEle = document.getElementById(pageId);
        const prevPageName = pageId.split("Page")[0];
        prevPageEle.classList.toggle(prevPageName+"Click");
        if(prevPageName === "cover") displayInstructions(true)
    }else if(direction === "from"){
        const currPageEle = document.getElementById(pageId);
        const currPageName = pageId.split("Page")[0];
        currPageEle.classList.add(currPageName+"Click");
    }
}

function onCoverClick(event){
    const coverId = event.target.id;
    const coverEle = document.getElementById(coverId);
    coverEle.classList.add("coverClick");
    displayInstructions(false);
}

function displayInstructions(displayString){
    let display = ""
    if(displayString) display="visible";
    else display = "hidden";
    const instructionsEle = document.querySelectorAll(".instructions__description");
    for(let i=0;i<instructionsEle.length;i++){
        instructionsEle[i].style.visibility = display;
    }
}

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


function onProjectClick(event){
    closeOpenProjects();
    const projEle = event.target.closest(".portfolio__projects--item");
    const projEleId = projEle.id;
    const projCard = document.getElementById(projEleId+"--card");
    projCard.classList.add('projectClicked');
}

function onCardClose(event){
    event.stopPropagation();
    const projEle = event.target.closest(".portfolio__projects--item");
    const projEleId = projEle.id;
    const projCard = document.getElementById(projEleId+"--card");
    projCard.classList.remove('projectClicked');
}

function closeOpenProjects(){
    const openProjEle = document.querySelectorAll(".projectClicked");
    for(let i=0;i<openProjEle.length;i++){
        const ele = document.getElementById(openProjEle[i].id);
        ele.classList.remove('projectClicked');
    }
}

function onLeftClick(event){
    const prevBtn = getBtnClick(event,"left");
    onClick(prevBtn);
}

function onRightClick(event){
    const nextBtn = getBtnClick(event,"right");
    onClick(nextBtn);
}

function getBtnClick(event, direction){
    let btnClass = "";
    if(direction === "left") btnClass = 'prevBtn'
    else btnClass = 'nextBtn'
    const parentElement = event.target.parentElement;
    const targetChild = Array.from(parentElement.children).find(child => child.classList.contains('navButtons'));
    return Array.from(targetChild.children).find(child => child.classList.contains(btnClass));
}
