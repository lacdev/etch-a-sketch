console.log("etch a sketch project")

const container = document.querySelector(".container")

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        container.appendChild(cell)
}
}

createGrid(16)

const range = document.querySelector('#range')

const cells = container.querySelectorAll('.cell')

const randomColorButton = document.querySelector('.random-button')

const colorPicker = document.querySelector('#color')

const blackColorButton = document.querySelector('.black-button')

const eraser = document.querySelector('#erase')

const clearButton = document.querySelector('.clear-button')

function removeGrid(){
    //while firstElementChild exists, remove it
    while (container.firstChild){
        container.removeChild(container.firstChild)
    } 
}

range.addEventListener('input', (event) => {
    let size = parseInt(event.target.value)
    console.log(size)
    removeGrid()
    createGrid(size)
    // container.textContent = ''
    // createGrid(size)
})

const clearGrid = () => {
    cells.forEach((cell) => {
        cell.style = 'background-color: white'
    })
}

clearButton.addEventListener('click', clearGrid)

blackColorButton.addEventListener('click', ()=> {
    cells.forEach((cell) => {
        cell.classList.remove('random')    
    })
    colorPicker.value = "#000000"
})

eraser.addEventListener('click', ()=> {
    cells.forEach((cell) => {
    cell.classList.remove('random')    
    })
    colorPicker.value = '#FFFFFF'
})

randomColorButton.addEventListener('click', ()=> {
    cells.forEach((cell) => {
    cell.classList.toggle('random')
    })
})

colorPicker.addEventListener('input', ()=> {
    cells.forEach((cell)=> {
        cell.classList.remove('random')
    })
} )

const getRandomColor = () => {
    var letters = '0123456789ABCDEF'
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const paintCurrentColor = (event) => {
    let currentColor = colorPicker.value
    if (event.target.classList.contains('random')) {
        currentColor = getRandomColor()
    }
    event.target.style = `background-color: ${currentColor}`
}

container.addEventListener('mouseover', paintCurrentColor )


