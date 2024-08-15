function onClick(event){
    const eleId = event.target.id;
    const [direction, pageId ] = eleId.split("-");

    if(direction === "to"){
        const prevPageEle = document.getElementById(pageId);
        const prevPageName = pageId.split("Page")[0];
        prevPageEle.classList.toggle(prevPageName+"Click");
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
}

function onContactSubmit(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Log the input values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can display a confirmation message to the user
    alert('Form submitted! Check the console for details.');
}