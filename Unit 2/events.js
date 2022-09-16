function f1() {
    this.innerText="clicked already";
}
document.querySelector("#but1").onclick = f1

function handler(event) {
    ev1 = event;// makes this ev global which can be accessed in console
    console.log(event.target.innerText)// same output with innerHTML
    event.target.style.fontSize = "20px";
    event.target.style.color = "red";
}

function init() {
    list = document.querySelectorAll("li");
    // using event object property:
    for(let i in list)
    {
        list[i].onclick = handler;
    }
    // adding eventlistener
    document.querySelector("p").addEventListener("click",function(event) {
        // event.target.style.color="black"
        event.target.innerHTML = "<h1>For more info head on to:</h1><a href='https://www.imdb.com/india/top-rated-indian-movies/'>Click here</a>"
    })
}
