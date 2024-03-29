//navbar functionality
const navLinkContainer = document.querySelector(".nav-link-list-container")
const navLinkList = document.querySelector(".nav-list")
const navLinks = document.querySelectorAll(".list-item > a")
const mobileNavButton = document.querySelector(".mobile-only-nav-button")
mobileNavButton.addEventListener('click', showNavLinks)

function showNavLinks() {
    navLinkContainer.classList.toggle("hide-on-mobile")
    navLinkList.classList.toggle("expand-for-mobile")
    navLinks.forEach(link => {
        link.classList.toggle('expand-for-mobile')
    })
    mobileNavButton.classList.toggle("mobile-position")
}

//boxart functionality
const boxArtLink = document.querySelector('#div-box-art-link')
boxArtLink.addEventListener('click', showBoxArt)

function showBoxArt() {
    const boxArtContainer = document.querySelector('.div-box-art-container')
    boxArtContainer.classList.toggle('js-expand')
    boxArtContainer.classList.toggle('js-hide')
}



