function init() {
    h1=document.querySelector("h2");
    h1.style.color = "blue";
    list = document.querySelectorAll("li.g1"); // has only elements with given class name
    for (let i = 0;i<2;i++)
    {
        list[i].innerText = list[i].innerText.toUpperCase();
    }
    newsub = document.createElement("li");
    newsub.innerText = "AFLL";
    ul1 = document.querySelector("ul");
    // ul1.appendChild(newsub);
    // ul1.insertBefore(newsub,list[0]);
    ul1.insertBefore(newsub,ul1.firstChild) // or lastChild
    // list[1].remove();
    // ul1.removeChild(list[1]);
    // ul1.replaceChild(newsub,ul1.children[3]);
    list[0].parentNode.replaceChild(newsub,ul1.children[3]);
}