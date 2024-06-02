const MAX_COLOR_VALUE = 16777215

const getRandomColor = () => {
    return `#${Math.floor(Math.random() * MAX_COLOR_VALUE).toString(16)}`
}

const changeColorBtn = document.getElementById('change-color')

changeColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
})