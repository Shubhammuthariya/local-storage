// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) =>{
// e.preventDefault();
// document.querySelector('body')
// .classList.add('bg-dark')
// document.querySelector('#my-form')
// .style.background = '#ccc'
// });  

// btn.addEventListener('mouseover', (e) =>{
// e.preventDefault();
// document.querySelector('#my-form')
// .style.background = '#ccc'
// });

// btn.addEventListener('mouseout', (e) =>{
// e.preventDefault();
// document.querySelector('#my-form')
// .style.background = '#cc8';
// });

const myform = document.querySelector('#my-form');
const myname = document.querySelector('#name');
const myemail = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users')

myform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    
    if(myname.value==='' || myemail.value===''){
        //msg.classList.add('error')
        msg.innerHTML = 'PLEASE FILL THE BLANKS';
        setTimeout(() => msg.remove(), 2000)
    }
    // else{
    //    let temp = document.createElement('li')
    //    temp.appendChild(document.createTextNode(`${myname.value} : ${myemail.value}`));
    //    userlist.appendChild(temp);
    // }

    sessionStorage.setItem('name' , myname.value)
    sessionStorage.setItem('email' , myemail.value)
    // clear filed
    myname.value='';
    myemail.value='';
    
}
