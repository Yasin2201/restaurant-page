import homePage from "./homePage"
import menuPage from "./menuPage"
import contactPage from './contactPage'
import nav from "./nav"

nav()
homePage()

const menuBtn = document.querySelector('.menuBtn')
const homeBtn = document.querySelector('.homeBtn')
const contactBtn = document.querySelector('.contactBtn')

homeBtn.addEventListener("click", () => {
    let menuDiv = document.querySelector('.menuDiv')
    let contactDiv = document.querySelector('.contactDiv')

    if (menuDiv != null) {
        menuDiv.remove()
        homePage()
        menuDiv = null

    } else if (menuDiv == null) {
        ;
    }

    if (contactDiv != null) {
        contactDiv.remove()
        homePage()
        contactDiv = null

    } else if (contactDiv == null) {
        ;
    }

  });


menuBtn.addEventListener("click", () => {
    let homeDiv = document.querySelector('.homeDiv')
    let contactDiv = document.querySelector('.contactDiv')

    if (homeDiv != null) {
        homeDiv.remove()
        menuPage()
        homeDiv = null

    } else if (homeDiv == null) {
        ;
    }

    if (contactDiv != null) {
        contactDiv.remove()
        menuPage()
        contactDiv = null

    } else if (contactDiv == null) {
        ;
    }

  });


contactBtn.addEventListener("click", () => {
  let menuDiv = document.querySelector('.menuDiv')
  let homeDiv = document.querySelector('.homeDiv')

  if (menuDiv != null) {
      menuDiv.remove()
      contactPage()
      menuDiv = null

  } else if (menuDiv == null) {
      ;
  }

  if (homeDiv != null) {
    homeDiv.remove()
    contactPage()
    homeDiv = null

    } else if (homeDiv == null) {
        ;
    }
});