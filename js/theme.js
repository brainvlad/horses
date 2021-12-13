const headerLight = document.getElementById("header-ligth")
const headeDark = document.getElementById("header-dark")

const footerLight = document.getElementById("footer-light")
const footerDark = document.getElementById("footer-dark")

const homeLight = document.getElementById("home-light")
const homeDark = document.getElementById("home-dark")

const portraitLight = document.getElementById("portrait-light")
const portraitDark = document.getElementById("portrait-dark")

const animalsLight = document.getElementById("animals-light")
const animalsDark = document.getElementById("animals-dark")

const objectLight = document.getElementById("object-light")
const objectDark = document.getElementById("object-dark")

const competitionLight = document.getElementById("competition-light")
const competitionDark = document.getElementById("competition-dark")

const btn = document.getElementById("theme-button")
let theme = 'light'

const changeTheme = (theme) => {
    if (theme === 'light') {
        enableStylesheet(headerLight)
        disableStylesheet(headeDark)

        enableStylesheet(footerLight)
        disableStylesheet(footerDark)

        enableStylesheet(homeLight)
        disableStylesheet(homeDark)

        enableStylesheet(portraitLight)
        disableStylesheet(portraitDark)

        enableStylesheet(animalsLight)
        disableStylesheet(animalsDark)

        enableStylesheet(objectLight)
        disableStylesheet(objectDark)

        enableStylesheet(competitionLight)
        disableStylesheet(competitionDark)
    } else if (theme === 'dark') {
        enableStylesheet(headeDark)
        disableStylesheet(headerLight)

        enableStylesheet(footerDark)
        disableStylesheet(footerLight)

        enableStylesheet(homeDark)
        disableStylesheet(homeLight)

        enableStylesheet(portraitDark)
        disableStylesheet(portraitLight)

        enableStylesheet(animalsDark)
        disableStylesheet(animalsLight)

        enableStylesheet(objectDark)
        disableStylesheet(objectLight)

        enableStylesheet(competitionDark)
        disableStylesheet(competitionLight)
    }
}

const enableStylesheet = (node) => {
    if (node) {
        node.media = '';
    }
}
const disableStylesheet = (node) => {
    if (node) {
        node.media = 'none';
    }
}

changeTheme(theme)
btn.style.filter = "invert()"

btn.addEventListener('click', () => {
    if (theme === 'light') {
        theme = 'dark'
        btn.style.filter = ""
    } else if (theme === 'dark') {
        theme = 'light'
        btn.style.filter = "invert()"
    }

    changeTheme(theme)
})