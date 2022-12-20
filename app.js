let details = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container");
let getUserBtn = document.getElementById("get-user-btn");
let url = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        imgContainer.innerHTML = `<img src=${data.avatar} style="width:200px; height:200px; border-radius: 50%;">`;
        details.innerHTML = `
            <h2> ${data.first_name} ${data.last_name} </h2>
            <h3> ${data.employment.title} </h3>
            <h4> <i class="fa-solid fa-location-dot"><i> ${data.address.city} </h4>
        `

        let randomColor =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6,"0");
        
        document.body.style.setProperty("background-color", randomColor);
        getUserBtn.style.setProperty("background-color", randomColor);
        imgContainer.style.setProperty("background-color",randomColor);
        console.log(document);

        e.preventDefault();
    })
}

window.addEventListener("load",getUser);
getUserBtn.addEventListener("click",getUser);