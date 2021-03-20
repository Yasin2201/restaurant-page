const menuPage = () => {
    const contentDiv = document.querySelector('#content')

    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menuDiv')

    const item1 = document.createElement('h2')
    item1.textContent = 'Burger'
    menuDiv.appendChild(item1)

    const item2 = document.createElement('h2')
    item2.textContent = 'Fries'
    menuDiv.appendChild(item2)

    const item3 = document.createElement('h2')
    item3.textContent = 'Pizza'
    menuDiv.appendChild(item3)

    
    contentDiv.appendChild(menuDiv)
}

export default menuPage
