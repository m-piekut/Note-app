//main content
const add = document.querySelector('.add')
const clearall = document.querySelector('.clear-all')
const notes = document.querySelector('.notes')
const note = document.getElementsByClassName('note')
const deleteNote = document.getElementsByClassName('close')
//popup
const popup = document.querySelector('.popup')
const select = document.querySelector('#select')
const newNote = document.querySelector('#new-note')
const addNoteBtn = document.querySelector('.add-note')
const closePopuop = document.querySelector('.close-popup')
const errror = document.querySelector('.error')








//usuwanie wszystkich notatek
clearall.addEventListener('click',()=>{
    notes.innerHTML = ''
})
// otwieranie popupa
add.addEventListener('click', ()=>{
    popup.classList.add('visable')
    select.value = 'none'
})
//dodawanie nowej notatki


const addNote = ()=>{
    const note = document.createElement('div')
    note.setAttribute('class', `note ${select.value}`)
    
    let h3;
    if(select.value === 'shopping'){
        h3 =  'Zakupy'
    } else if(select.value === 'work'){
        h3 = 'Praca';
    }else{
        h3 = 'Inne'
    };
    let p = newNote.value  
    notes.appendChild(note)
    note.innerHTML= `<h3>${h3}</h3>
    <button class="close" id=""><i class="fas fa-times"></i></button>
    <p>${p}</p>`

    popup.classList.remove('visable')
    newNote.value =''
}

const chceckInputs = ()=>{
    if(select.value === 'none' || newNote.value === ''){
        errror.style.display = 'block'
    }else{
        addNote()
        
        errror.style.display = 'none'
    }
}


addNoteBtn.addEventListener('click', chceckInputs)


//zamykanie popupa
closePopuop.addEventListener('click', ()=>{
    popup.classList.remove('visable')
})


notes.addEventListener('click', (e)=>{
    console.log(e.target)
    if(e.target.closest('button').className === 'close'){
        e.target.closest('div').remove()
    }
})