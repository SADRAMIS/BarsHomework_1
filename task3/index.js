const ul = document.getElementById('itemList')

ul.addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
        console.log(e.target.textContent)
    }
})