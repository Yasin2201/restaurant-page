const nav = () => {
    const contentDiv = document.querySelector('#content')

    // Header div and buttons
    const header = document.createElement('div')
    header.classList.add('navBar')

    const headerTitle = document.createElement('h1')
    header.appendChild(headerTitle)
    headerTitle.textContent = 'A "Real" Restaurant'

    const homeBtn = document.createElement('button')
    header.appendChild(homeBtn)
    homeBtn.classList.add('homeBtn')
    homeBtn.textContent = 'Home'

    const menuBtn = document.createElement('button')
    header.appendChild(menuBtn)
    menuBtn.classList.add('menuBtn')
    menuBtn.textContent = 'Menu'

    const contactBtn = document.createElement('button')
    header.appendChild(contactBtn)
    contactBtn.classList.add('contactBtn')
    contactBtn.textContent = 'Contact'


    contentDiv.appendChild(header)
}

export default nav