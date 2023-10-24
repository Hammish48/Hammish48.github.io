
//this basically formats the page depending on how big your monitor is
//idk why but the project option buttons shift depending on the size of the monitor
//I hate formatting

if (!navigator.userAgentData.mobile){
let a = document.getElementsByClassName("project-option-button-container")
for (let x = 0; x<a.length;x++){
    a[x].style.transform = `translateY(${(window.innerHeight/-2)+350}px)`
}

}


if (!navigator.userAgentData.mobile){
    document.body.style.zoom = `${window.innerHeight/923*105}%`
}