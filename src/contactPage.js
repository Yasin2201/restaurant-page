const contactPage = () => {
    const contentDiv = document.querySelector('#content')

    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contactDiv')

    const contactTitle = document.createElement('h1')
    contactTitle.classList.add('contactTitle')
    contactTitle.textContent = 'Contact'
    contactDiv.appendChild(contactTitle)

    const contactInfo = document.createElement('contact-h2')
    contactInfo.classList.add('contact-h2')
    contactInfo.setAttribute('style', 'white-space: pre;')

    contactInfo.textContent = '137 Restaurant Road, \r\n New Restaurant, \r\n N3W R35T, UK \r\n 07123456789 \r\n restaurant@food.com'
    contactDiv.appendChild(contactInfo)


    contentDiv.appendChild(contactDiv)
}

export default contactPage