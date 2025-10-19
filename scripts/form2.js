let count = localStorage.getItem("reviewCount");
if (!count) {
  count = 0;
}
else{
  count = parseInt(count);
}
document.addEventListener("DOMContentLoaded",()=>{
    count+=1
    localStorage.setItem("reviewCount",count);
    let counterDisplay = document.querySelector("#counter");
    counterDisplay.textContent = `You have submitted ${count} review(s).`;
})