console.log("hey")

function onClick(event){
    // let ring = document.getElementsByClassName(".circle");
    // ring.classList.add(".ring-innerPage")
    let eleId = event.target.id;
    if(eleId === ""){
        let parent = event.target;
        while (parent && parent.tagName !== 'SECTION') {
            parent = parent.parentElement;
        }
        if (parent && parent.tagName === 'SECTION') {
            eleId = parent.id;
        }
    }
    const coverEle = document.getElementById(eleId);
    let className ="";
    let className1 ="";
    let className2 ="";
    switch(eleId){
        case "coverPage":
            className1 = "coverClick";
            className2 = "coverBottom"
            break;
        case "homePage":
            className1 = "homeClick";
            className2 = "homeBottom"
            break;
        case "aboutPage":
            className1 = "aboutClick";
            className2 = "aboutBottom";
            break;
        case "portfolioPage":
            className1 = "portfolioClick";
            className2 = "portfolioBottom";
            break;
        case "contactPage":
            className1 = "contactClick";
            className2 = "contactBottom";
            break;
        case "endPage":
            className1 = "endClick";
            break;
    }
    coverEle.classList.add(className1);
    if(className2){
        coverEle.addEventListener('transitionend', function(event) {
              coverEle.classList.add(className2);
          }, { once: true });
    } 
}


function onClickBack(event){
    const eleId = event.target.id;
    const parentId = eleId.split("-")[1];
    document.getElementById(parentId).classList.toggle("coverClick")
   

}