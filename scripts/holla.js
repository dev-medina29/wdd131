// const DAYS = 6;
// const LIMIT = 30;
// let studentReport = [11, 42, 33, 64, 29, 37, 44];
// for (let i=0;i<6;i++) {
//     if (studentReport[i] < LIMIT) {
//         consolw.log(studentReport[i]);
//     }
// }

let yo=new Date();
let eh=document.querySelector("#today");
// let we=document.querySelector("#ul");
const we = document.getElementsByTagName("ul");
const options={weekday:"long"};
const day= new Intl.DateTimeFormat("en-Us",options).format(yo);
eh.textContent=`Today is ${day}`;
eh.style.color="green";
eh.style.fontSize="1.5em";
for (let i=1;i<6;i++) {
   let yo=new Date();
   let nextDay= yo.setDate(yo.getDate()+i);
   let ta=document.createElement("li");
   ta.textContent=new Intl.DateTimeFormat('en-Us',options).format(nextDay);
   we[0].appendChild(ta); 
}
