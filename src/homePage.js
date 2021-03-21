const homePage = () => {
    const contentDiv = document.querySelector('#content')

    //main body div and elements
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('homeDiv')

    const slogan = document.createElement('h2')
    slogan.classList.add('home-h2')
    slogan.textContent = 'Inspired French \r\n Cuisine'
    slogan.setAttribute('style', 'white-space: pre;')
    homeDiv.appendChild(slogan)

    const rating = document.createElement('h3')
    rating.classList.add('home-h3')
    rating.textContent = "Voted UK's Best French Restaurant"
    homeDiv.appendChild(rating)


    const image = document.createElement('img')
    image.setAttribute('src', 'images/food-pic.jpg')
    image.classList.add('homeImage')
    homeDiv.appendChild(image)
    
    contentDiv.appendChild(homeDiv)
};

export default homePage
