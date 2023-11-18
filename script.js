const hovertext = document.getElementById("hoverText");
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) =>{
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

hovertext.addEventListener("mouseenter", () =>{
    cursor.style.visibility = "visible";
});

hovertext.addEventListener("mouseleave", () => {
    cursor.style.visibility = "hidden";
})
