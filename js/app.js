console.log('Conectado')
const formulario = document.getElementById('formulario')
const listatareas = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()


let tareas = {} 
document.addEventListener('DOMContentLoaded', () =>{

console.log('cargo la pagina')

})

formulario.addEventListener('submit', event => {
    event.preventDefault()
    console.log('evento',event)
    SetTarea(e)
})


const SetTarea = e =>{
    const texto = e.target.querySelector('input').value
    console.log(texto)

    if(texto.strim() === ''){
        console.log('cadena vacia')
        return
    }
    const tarea ={
        id:Date.now(),
        estado: false
    }

    console.log('Tarea',tarea)
    tarea[tarea.id] = tarea
    pintarTareas()
    formulario.reset()
    e.target.querySelector('input').focus()
}

const pintarTareas = () => {

localStorage.setItem('tareas',JSON.stringify(tareas))
if(Object.values(tareas).length === 0){

listatareas.innerHTML = 
`
acaba lo de las tareas jijijija
`
return


}

listatareas.innerHTML = ''
Object.values(tareas).forEach( item =>{

console.log('item',item)
const clone = template.cloneNode(true)
clone.querySelector('p').textContent = item.texto
if(item.estado){
    clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle','fa-undo-alt')
}

})

}

//poner ,matricula y demas 