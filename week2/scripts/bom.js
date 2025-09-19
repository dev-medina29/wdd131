
let buttonElement=document.querySelector('button');
buttonElement.addEventListener('click',function(){
    let input=document.querySelector('#favchap');
    if(input.value.trim!==''){
        let button=document.querySelector('button');
        let list=document.querySelector('ul');
        let mi=document.createElement('li');
        let deleteButton=document.createElement('button');
        mi.textContent=input.value;
        button.textContent='❌';
        let buttonDelete=document.createElement('button');
        mi.append(buttonDelete);
        list.append(mi);
        deleteButton.addEventListener('click',function(){
            list.removeChild(mi);
            input.focus();
        });
        input.value='';
        input.focus();
    }else {
    input.focus();
    }
})