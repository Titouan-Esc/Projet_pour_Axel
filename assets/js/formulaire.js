// ! Initialisation des const
const todoListe = document.querySelector('.liste');
const todoTache = document.querySelector('#tache');
const todoButton = document.querySelector("#bouton");
const msg = document.querySelector('.msg');

// ? Au clique du bouton!
todoButton.addEventListener('click', (e) =>{
    e.preventDefault()
    
    const newList = document.createElement('li');
    newList.className = 'li';
    newList.appendChild(document.createTextNode(`${todoTache.value}`));

    if(todoTache.value === "") {
        msg.innerHTML = 'Ho tu écrit quelque chose!!!';
        msg.style.background = 'red';
        setTimeout(() =>{
            msg.innerText = "";
            msg.style.background = 'transparent'
        }, 2500);
    }else {
        const todoCheck = document.createElement('button');
        const todoRemove = document.createElement('button');
        todoCheck.innerHTML = '<p> OK </p>';
        todoRemove.innerHTML = '<p> NO </p>';
        todoCheck.classList.add('check');
        todoRemove.classList.add('remove');
        newList.appendChild(todoCheck);
        newList.appendChild(todoRemove);
        todoListe.appendChild(newList)
        todoTache.value = "";

    }
    console.log(newList);
});

// ?Bouton check et remove
todoListe.addEventListener('click', (e) =>{
    const button = e.target.parentNode;

    if(button.classList.contains('remove')) {
        msg.innerText = 'Baltringue pourquoi tu as supprimé ça!'
        msg.style.background = 'yellow';
        setTimeout(() =>{
            msg.innerText = "";
            msg.style.background = 'transparent'
        }, 2500);
        button.parentNode.remove();
    }else if(button.classList.contains('check')) {
        if(button.parentNode.style.textDecoration === 'line-through') {
            button.parentNode.style.textDecoration = 'none';
        } else {
            button.parentNode.style.textDecoration = 'line-through';
        }
    };
});