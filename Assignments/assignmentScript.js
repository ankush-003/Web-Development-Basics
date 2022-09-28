function init() {
    clip = document.querySelector("#trailer");
    clip.addEventListener("mouseover",function() {
        clip.play();
    })
    document.querySelector("header").addEventListener("click",function(){
        document.querySelector("#details").innerHTML="a 2004 first-person shooter game developed by Bungie and published by Microsoft Game Studios for the Xbox console. The game features new weapons, enemies, and vehicles, and shipped with online multiplayer via Microsoft's Xbox Live service. In Halo 2's story mode, the player assumes the roles of the human Master Chief and alien Arbiter in a 26th-century conflict between the United Nations Space Command, the genocidal Covenant, and the parasitic Flood."
    })
    document.querySelector(".sale").addEventListener("click",function(){
        alert("Hurry up, discount sale is going on!!!");
    })
}
