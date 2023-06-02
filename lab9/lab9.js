class Dog {
    constructor(id, title, sex, age, description, dogImage)
    {
        this.id = id;
        this.title = title;
        this.sex = sex;
        this.age = age;
        this.description = description;
        this.dogImage = dogImage;
    }
}


let arr;
const showDog = (id - 1) => {
    
    modal.innerHTML =
    `
    <div class="modal-content">
        <img src="https://usersdogs.dmytrominochkin.cloud/images/dog/p${arr[id].id}.jpeg">
        <section class="mod">
            <b class="name">${arr[id].title}</b>
            <hr>
            <p class="about">Sex</p>
            <p class="data">${arr[id].sex}</p>
            <hr>
            <p class="about">Age</p>
            <p class="data">${arr[id].age}</p>
            <hr>
            <p class="about">Personality</p>
            <p class="data">${arr[id].description}</p>
        </section>
        <button class="button-close-modal">X</button>
    </div>
    `;
    closeButton = document.querySelector(".button-close-modal");
    list.hidden="true";
    // let body = document.querySelector("body");
    window.addEventListener("click", e => {
        if (e.target === html || e.target == closeButton) {   
            list.hidden="";
            modal.innerHTML ="";
        }
        console.log(e.target);
    },
    true);

}
html = document.querySelector("html");

fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
.then(response => response.json())
.then(json => {
    arr=json;
    json.forEach(element => {
        list.innerHTML += 
        `<li onclick="showDog(${element.id})">
            <div>
                <img alt="dog" src="https://usersdogs.dmytrominochkin.cloud/${element.dogImage}">
            </div>
            <b class="name">${element.title}</b>
            <p class="sex">${element.sex}</p>
        </li>`;
    });
});