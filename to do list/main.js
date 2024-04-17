const input = document.getElementById('input')
const add = document.getElementById('add')
const del = document.getElementById('delete')
const count = document.getElementById('count')
const tasks = document.getElementById('tasks')

let counter = 0

add.addEventListener('click', addTask)
input.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        addTask()
    }
})
del.addEventListener('click', deleteAll)
tasks.addEventListener('change', (e)=>{
    if(e.target.tagName === 'INPUT' && e.target.type === 'checkbox'){
        const checkbox = e.target
        const item = checkbox.parentNode

        if(checkbox.checked){
            item.classList.add('completed')
            counter --
            count.innerText = counter
        } else {
            item.classList.remove('completed')
            counter ++
            count.innerText = counter
        }
    }
})

function addTask(){
    const newTask = input.value.trim()
    if (newTask !== ''){

        const newElement = document.createElement('li')
        const check = document.createElement('input')
        check.type = 'checkbox'
        const label = document.createElement('label')
        label.textContent = newTask

        newElement.appendChild(check)
        newElement.appendChild(label)
        newElement.classList.add('task')
        tasks.appendChild(newElement)

        input.value = ''
        counter ++
        count.innerText = counter
    }
}

function deleteAll(){
    while(tasks.firstChild){
        tasks.removeChild(tasks.firstChild)
        counter --
    }
    count.innerText = counter
    
}


