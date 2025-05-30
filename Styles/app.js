const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const reamingDiv = document.querySelector(".reamingDiv");
const active_listItem = document.querySelector(".list-item.active.bgLight");


dark.addEventListener("click", ()=>{
   sidebar.className = "sidebar";

   reamingDiv.className = "bgDark";
    active_listItem = "list-item active";
})

night.addEventListener("click", ()=>{
    sidebar.className = "sidebar night";
    reamingDiv.className = "bgGreen";
    active_listItem = "list-item active";
})
light.addEventListener("click", ()=>{
    sidebar.className = "sidebar light";
    reamingDiv.className = "bgLight";
    active_listItem = "list-item active light";
})