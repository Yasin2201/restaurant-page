const contactPage = () => {
    const contentDiv = document.querySelector('#content')
    const contactBtn = document.querySelector('.contactBtn')
    // contactBtn.style.color = 'black'



    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contactDiv')

    const contactNum = document.createElement('h2')
    contactNum.textContent = '07123456789'
    contactDiv.appendChild(contactNum)

    const contacEmail = document.createElement('h2')
    contacEmail.textContent = 'restaurant@food.com'
    contactDiv.appendChild(contacEmail)

    const contactAddress = document.createElement('h2')
    contactAddress.textContent = '137 Restaurant Road, New Restaurant, N3W R35T, UK'
    contactDiv.appendChild(contactAddress)

    
    contentDiv.appendChild(contactDiv)
}

export default contactPage