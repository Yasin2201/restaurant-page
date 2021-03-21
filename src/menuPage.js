const menuPage = () => {
    const contentDiv = document.querySelector('#content')

    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menuDiv')

    const menuTitle = document.createElement('h1')
    menuTitle.textContent = 'Menu'
    menuTitle.classList.add('menuTitle')
    menuDiv.appendChild(menuTitle)

    const item1 = document.createElement('h2')
    item1.textContent = 'Burger..........  £5.99'
    item1.classList.add('item1-h2')
    menuDiv.appendChild(item1)


    const item2 = document.createElement('h2')
    item2.textContent = 'Fries..............  £3.99'
    item2.classList.add('item2-h2')

    menuDiv.appendChild(item2)

    const item3 = document.createElement('h2')
    item3.textContent = 'Pizza.............  £7.99'
    item3.classList.add('item3-h2')

    menuDiv.appendChild(item3)

    
    contentDiv.appendChild(menuDiv)
}

export default menuPage
