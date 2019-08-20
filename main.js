console.log("hello world");

const container = document.querySelector(".container");

fetch("http://localhost:3000/")
.then(r => r.json())
.then(data => {
    console.log(data);
    data
    .map((news, i) => {
        return `
        <div class=news>
            <div class="title">
                <h4>${news.title}</h4>
            </div>
                <img src="${news.photo}"</img>
                <button class="readbtn">Lesa nánar</button>
        </div>
        `
    }).forEach((eventStr, i)=>{
        if (i === 0) return;
        document.querySelector(".container").innerHTML += eventStr;
    })
})

