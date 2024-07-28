let show=[];

function project(event){
    event.preventDefault();

    let title = document.getElementById("projectInput").value;
    let start = document.getElementById("startInput").value;
    let end = document.getElementById("endInput").value;
    let description = document.getElementById("description").value;
    let python = document.getElementById("check-python").checked;
    let java = document.getElementById("check-java").checked;
    let ruby = document.getElementById("check-ruby").checked;
    let typeScript = document.getElementById("check-typeScript").checked;
    let upload = document.getElementById("upload").files;

    upload = URL.createObjectURL(upload[0]);
    console.log(upload);

    const grup = {
        title, 
        start,
        end,
        description,
        python,
        java,
        ruby,
        typeScript,
    };

    show.push(grup);
    console.log(show);
    addproject();

}


function addproject(){
    document.getElementById("new").innerHTML = "";

    for(let i = 0; i< show.length; i++){
        document.getElementById("new").innerHTML += `
<div class="card" style="width: 270px; margin: 5px 10px; box-shadow: 0px 0px 5px; border-radius: 10px;">
    <a href="project.html?id=${i}" target="_blank">
        <img src="./assets/coding-image.jpg" alt="" style="width: 230px; border-radius: 10px;">
        <h1 style="margin: 10px 20px;"></h1>
        <p style="margin: 10px 20px;"></p>
        <p style="margin: 10px 20px;"></p>
    </a>
    <h1>${show[i].project}</h1>
    <p>Durasi</p>
    <p>${show[i].description}</p>
    <div class="image-card">
        <img src="./assets/app-store-brands-solid.svg" alt="">
        <img src="./assets/java-brands-solid.svg" alt="">
        <img src="./assets/html5-brands-solid.svg" alt="">
    </div>
    <div class="button-card">
        <button class="edit-card">Edit</button>
        <button class="delete-card">Delete</button>
    </div>
</div>
`
    }
}