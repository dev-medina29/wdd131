let today=new Date();
let date=today.getDate();
let options={weekday:'long'};
let output1=document.getElementById('today');
// output1.innerHTML=today.toLocaleDateString('en-US',options);
output1.innerHTML=`Today is ${new Intl.DateTimeFormat('en-US',options).format(today)}`;
output1.style.color="green";
output1.style.fontSize="1.5em";
let we=document.getElementsByTagName('body');
for (let i=1;i<7;i++) {
    let today=new Date();
    let nextDay=today.setDate(today.getDate()+i);
    let dayName= new Intl.DateTimeFormat('en-US',options).format(nextDay);
    let output2=document.createElement('p');
    we[0].appendChild(output2);
    output2.textContent=`${dayName} `;
}
