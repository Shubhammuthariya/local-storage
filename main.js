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

//functionality for buttons
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
    
     // create edit button
    let edit = document.createElement('button')
    edit.className = " btn btn-danger btn-md edit"
    edit.appendChild(document.createTextNode('Edit'))
    temp.appendChild(edit)  
    
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const obj = {
        name : name,
        email : email,
    }
    localStorage.setItem(email, JSON.stringify(obj))

    // functionality to delete new li from storage
    deletebtn.onclick = () =>{
    localStorage.removeItem(obj.email)
    user.removeChild(temp)
   }

    // functionality to edit new li item
    edit.onclick = () =>{
        localStorage.removeItem(email)
        user.removeChild(temp)
        myname.value = obj.name;
        myemail.value = obj.email;
       }

  }
    // clear filed
    myname.value='';
    myemail.value='';
   
}

