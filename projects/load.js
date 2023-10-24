projects = []
class Project{
    constructor(name, description, image, options){
        this.name = name
        this.description = description
        this.image = image
        this.options = options
    }
}

class Option{
    constructor(color, type){
        this.color = color
        this.type = type
    }
}
class Download extends Option{
    constructor(name,file, color=[255,255,255]){
        super(color, "download")
        this.file = file
        this.name = name
    }
}
class Redirect extends Option{
    constructor(name,url, color=[255,255,255]){
        super(color, "download")
        this.url = url
        this.name = name
    }
}

projects[0] = new Project(
    "A project",
    "a really sick and epic project that I made",
    "thumbnails/catsuit.jpg",
    [new Download("download vius","./hello.txt"), new Redirect("rickrol", "youtube.com"), new Redirect("stop", "youtube.com")]
)

projects[1] = new Project(
    "another project",
    "steals you're ip",
    "thumbnails/catsuit.jpg",
    [new Redirect("hhehe", ""),new Redirect("hhehe", ""),new Redirect("hhehe", "")]
)
projects[2] = projects[1]
projects[3] = projects[2]
projects[4] = projects[2]

projects[4] = new Project(
    "A Dying World",
    'A 2d camera platformer made in one week for the pyweek 36 game jam the aim of the game\
    is to\
    rid the world of <span style="font-weight: bold;">dark matter</span> (which was the\
    theme of\
    the jam) by shooting at enemies. <br> The game was made in one week using python and\
    pygame\
    <br> I worked in a team with <a href="https://github.com/reactoimpact"\
        target="_blank">@Reactoimpact</a>',
    "thumbnails/a-dying-world.png",
    [new Redirect("Download (.exe)", ""),new Redirect("View Source on GitHub", ""),new Redirect("Play In Browser", "")]
)

function createButtonContainer(options){
    container = document.createElement("div")
    container.className = "project-option-button-container"
    for (let x = 0; x <= 2;x++){
        let btn = document.createElement("button")
        btn.className = "project-option-button"
        btn.textContent = options[x].name
        container.appendChild(btn)
    }
    return container
}

function createProject(project){
    let p = document.createElement("div")
    p.className="project"
    let element = document.createElement("h1")
    element.textContent = project.name
    p.appendChild(element)
    element = document.createElement("img")
    element.src = "/projects/" + project.image
    p.appendChild(element)
    let pcc = document.createElement("div")
    pcc.className = "project-content-container"
    p.appendChild(pcc)
    element = document.createElement("p1")
    element.innerHTML = project.description
    pcc.appendChild(element)
    pcc.appendChild(createButtonContainer(project.options))
    return p
}


function createRow(){
    let r = document.createElement("div")
    r.className = "row"
    return r
}

function main(){
let d = document.getElementById("projects")
let row = createRow()
d.appendChild(row)
let bc = document.createElement("div")
bc.className = "box-container"
pointer = 0
projects.forEach(p =>{
    bc.appendChild(createProject(p))
    console.log("project successfully created")
    console.log(pointer)
    pointer ++
    if (pointer >=3){
        row.appendChild(bc)
        pointer = 0;
        row = createRow()
        d.appendChild(row)
        bc = document.createElement("div")
        bc.className = "box-container"
    }
})
row.appendChild(bc)

}
main()
