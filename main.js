const container = document.querySelector(".grid-container")
const totalSize = container.scrollWidth;

const createGrid = (size) => {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.style.minWidth = `${100 / size}%`
        cell.style.minHeight = `${100 / size}%`
        container.appendChild(cell)
}
}

//Initial grid size
createGrid(16)

const range = document.querySelector('#range')
const randomColorButton = document.querySelector('.random-button')
const colorPicker = document.querySelector('#color')
const blackColorButton = document.querySelector('.black-button')
const eraser = document.querySelector('#erase')
const clearButton = document.querySelector('.clear-button')

const removeGrid = () => {
    //while firstElementChild exists, remove it
    while (container.firstChild){
        container.removeChild(container.firstChild)
    } 
}

range.addEventListener('input', (event) => {
    let size = parseInt(event.target.value)
    removeGrid()
    createGrid(size)
})

const clearGrid = () => {
    document.querySelectorAll('.cell').forEach((cell) => {
        cell.style.backgroundColor = '#FFFFFF'
    })
}

clearButton.addEventListener('click', clearGrid)

const removeRandomClass = () => {
    document.querySelectorAll('.cell').forEach((cell) => {
        cell.classList.remove('random')    
    })
}

const toggleRandomClass = () => {
    document.querySelectorAll('.cell').forEach((cell)=> {
        cell.classList.toggle('random')
    })
}

blackColorButton.addEventListener('click', ()=> {
    removeRandomClass()
    colorPicker.value = "#000000"
})

eraser.addEventListener('click', ()=> {
    removeRandomClass()
    colorPicker.value = '#FFFFFF'
})

randomColorButton.addEventListener('click', ()=> {
    toggleRandomClass()
})

colorPicker.addEventListener('input', ()=> {
    removeRandomClass()
})

const getRandomColor = () => {
    let letters = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

const paintCurrentColor = (event) => {
    let currentColor = colorPicker.value
    if (event.target.classList.contains('random')) {
        currentColor = getRandomColor()
    }
    event.target.style.backgroundColor = currentColor
}

container.addEventListener('mouseover', paintCurrentColor)


