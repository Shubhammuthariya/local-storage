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
const user = document.querySelector('#users')
// form submit event
myform.addEventListener('submit', onSubmit);

// delete event
// user.addEventListener('click', removeli)
function onSubmit(e){
    e.preventDefault();
    
    if(myname.value==='' || myemail.value===''){
        //msg.classList.add('error')
        msg.innerHTML = 'PLEASE FILL THE BLANKS';
        setTimeout(() => msg.remove(), 2000)
    }
    else{
        // create new li
       let temp = document.createElement('li')
       temp.appendChild(document.createTextNode(`${myname.value} : ${myemail.value}`));
       user.appendChild(temp);
       // create delete button
       let deletebtn = document.createElement('button')
       deletebtn.className = " btn btn-danger btn-md delete"
       deletebtn.appendChild(document.createTextNode('Delete'))
       temp.appendChild(deletebtn);

       deletebtn.onclick = () =>{
        localStorage.removeItem(email)
        user.removeChild(temp)
       }
    }
    const name = e.target.name.value;
    const email = e.target.email.value;
    const obj = {
        name : name,
        email : email,
    }
    localStorage.setItem(email, JSON.stringify(obj))
    
    // console.log(obj)
    
    // clear filed
    myname.value='';
    myemail.value='';
   
}

// functionality to delete new li from storage
// function removeli(e) {
//     if(e.target.classList.contains('delete')){
//         let del = e.target.parentElement;
//         let del2 = e.target.email
//         user.removeChild(del)
//         localStorage.removeItem(del2)
//     }
// }