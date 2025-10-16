const date= new Date();
const hours= date.getHours();
const minutes= date.getMinutes();
const seconds= date.getSeconds();
const year= date.getFullYear();
const month= date.getMonth()+1;
const day= date.getDate();
current_year= document.querySelector("#currentyear");
if (current_year){
    current_year.innerHTML= `${year}`;
}

current_date= document.querySelector("#lastModified");
if (current_date){
    current_date.innerHTML= `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;
}


// Here we go
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function Mine(List){
    // const Id=document.createElement("id");
    // const Name=document.createElement("name");
    List.forEach(list=>{
        
        let option=document.createElement("option")
        option.setAttribute("name",list.name);
        option.setAttribute("value",list.id);
        option.innerHTML=`${list.name}`;
        // option.innerHTML=`${i} medina`;
        let med=document.querySelector("#product");
        if (med){
            med.appendChild(option);
        }
    })
}

Mine(products);

document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount");
    if (!count) {
    count = 0;
    }
    count = parseInt(count) + 1;
    localStorage.setItem("reviewCount", count);
    const counterDisplay = document.getElementById("counter");
    if (counterDisplay) {
      counterDisplay.textContent = `You have submitted ${count} review(s).`; 
    }
});





