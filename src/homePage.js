const homePage = () => {
    const contentDiv = document.querySelector('#content')
    const title = document.createElement('h1')
    const slogan = document.createElement('h2')
    const image = document.createElement('img')

    title.textContent = 'not A Real Restaurant'
    slogan.textContent = 'Food Done Properly... kinda'
    image.setAttribute('src', 'images/food-pic.jpeg')
    
    contentDiv.appendChild(title)
    contentDiv.appendChild(slogan)
    contentDiv.appendChild(image)
};

export default homePage
