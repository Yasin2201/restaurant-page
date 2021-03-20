const homePage = () => {
    const contentDiv = document.querySelector('#content')

    //main body div and elements
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('homeDiv')

    const slogan = document.createElement('h2')
    slogan.textContent = 'Food Done Properly... kinda'
    homeDiv.appendChild(slogan)

    const image = document.createElement('img')
    image.setAttribute('src', 'images/food-pic.jpg')
    image.classList.add('homeImage')
    homeDiv.appendChild(image)
    
    contentDiv.appendChild(homeDiv)
};

export default homePage
