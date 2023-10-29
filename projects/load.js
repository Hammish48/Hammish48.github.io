projects = []
class Project{
    constructor(name, description, image, options){
        this.name = name
        this.description = description
        this.image = image
        this.options = options
    }
}

function redirect(url) {
    window.location.href = url
}
function downloadFile(filePath) {
    const a = document.createElement('a');
    a.download = filePath;
    a.href = filePath
    a.click();
    a.remove();
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
        super(color, "redirect")
        this.url = url
        this.name = name
    }
}

projects.push(new Project(
    "Shadow Jump",
    "An infinite score platformer were you jump from platform to platform while avoiding the hidden enemies <br> this was made for the pyweek 35 game jam using python and pygame <br> while this game is simple I like that its one of those time killers that you can just open and play",
    "thumbnails/shadow-jump.png",
    [new Download("Download (.exe)", "../downloads/shadow-jump-win.zip"),new Redirect("Play In Browser (Experimental)", "../games/shadow-jump"),new Redirect("View pyweek entry", "https://pyweek.org/e/HamSandwich/")]
))

projects.push(new Project(
    "Placeholder",
    "placeholder",
    "thumbnails/roles-reversed.png",
    [new Download("Download (.exe)", "../downloads/roles-reversed-win.zip"),new Redirect("View on itch.io", "https://ham-sandwich47.itch.io/roles-reversed")]
))

projects.push(new Project(
    "Roles Reversed",
    "A game made for the <a href='https://itch.io/jam/gmtk-2023' target='_blank'>GMTK 2023</a> game jam which had the theme Roles Reversed <br> It was my second game made it godot and my second ever game jam. The idea of this game is that the roles are reversed so instead of being the player, you are the enemy. <br> not gonna lie the idea sounded a lot better in my head <br> I couldn't think of a name",
    "thumbnails/roles-reversed.png",
    [new Download("Download (.exe)", "../downloads/roles-reversed-win.zip"),new Redirect("View on itch.io", "https://ham-sandwich47.itch.io/roles-reversed")]
))


projects.push(new Project(
    "A Dying World",
    'A 2d platformer made in one week for the pyweek 36 game jam the aim of the game\
    is to\
    rid the world of <span style="font-weight: bold;">dark matter</span> (which was the\
    theme of\
    the jam) by shooting at enemies. <br> The game was made in one week using python and\
    pygame\
    <br> I worked in a team with <a href="https://github.com/reactoimpact"\
        target="_blank">@Reactoimpact</a>',
    "thumbnails/a-dying-world.png",
    [new Download("Download (.exe)", "../downloads/a-dying-world-win.zip"),new Redirect("Play In Browser (Experimental)", "../games/a-dying-world"),new Redirect("View Source on GitHub", "https://github.com/Hammish48/pyweek36")]
))


function createButtonContainer(options){
    container = document.createElement("div")
    container.className = "project-option-button-container"
    for (let x = 0; x <= options.length - 1;x++){
        let btn = document.createElement("button")
        btn.className = "project-option-button"
        btn.textContent = options[x].name
        if (options[x].type == "redirect"){
            btn.onclick = ()=>{redirect(options[x].url)}
        }else{
            btn.onclick = ()=>{downloadFile(options[x].file)}
        }
        container.appendChild(btn)
    }
    if (options.length == 0){
        container.style.display = "none"
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
    if (navigator.userAgentData.mobile){
        if (project.options.length == 3){
            element.style.height="340px"
        }else if (project.options.length == 2){
            element.style.height="365px"
        }
    }else{
        if (project.options.length == 2){
            element.style.height="53.1vh"
        }
    }
    pcc.appendChild(element)
    pcc.appendChild(createButtonContainer(project.options))
    return p
}


function createRow(){
    let r = document.createElement("div")
    r.className = "row"
    return r
}
let r;
r = Math.round(Math.random() * 10)
console.log(r)
if (r%2==1){
r = Math.floor(Math.random() * (projects.length))
projects.splice(r, 0, new Project(
    "cat",
    "look how sophisticated he is",
    "thumbnails/catsuit.jpg",
    []
))
}
function main(){
    projects = projects.reverse()
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
