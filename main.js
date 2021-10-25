console.log("etch a sketch project")

const container = document.querySelector(".container")

const range = document.querySelector('#range')

range.addEventListener('input', (event) => {
    console.log(parseInt(event.target.value))
})

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        for (let j = 0; j < size; j++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        row.appendChild(cell)
        }
        container.appendChild(row)
}
}

createGrid(16)

const cells = container.querySelectorAll('.cell')

const randomColorButton = document.querySelector('.random-button')

const colorPicker = document.querySelector('#color')

const blackColorButton = document.querySelector('.black-button')

const eraser = document.querySelector('#erase')

const clearButton = document.querySelector('.clear-button')

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
