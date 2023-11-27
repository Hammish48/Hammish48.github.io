
//this basically formats the page depending on how big your monitor is
//idk why but the project option buttons shift depending on the size of the monitor
//I hate formatting


if (!navigator.userAgentData.mobile){
    document.body.style.zoom = `${window.innerHeight/923*100}%`
}

if (navigator.userAgentData.mobile){
    let a = document.getElementsByClassName("row")
    for (let x = 0; x<a.length;x++){
        a[x].style.overflowX = "scroll"
    }
    a = document.getElementsByClassName("box-container")
    for (let y = 0; y<a.length;y++){
        a[y].style.transform = "translateX(430px)"
    }

}
