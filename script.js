


// Присвоила переменной обертку сайта, в которую будем все добавлять
const container = document.getElementById("app")
container.style.maxWidth = '1440px'
container.style.fontFamily = '"Inter", sans-serif'
container.style.margin = '0px auto'

// HEADER 
// Создала тэг header 
const header = document.createElement('header')
header.classList.add('header')
// Добавляю ее в обертку
container.appendChild(header)

header.style.minHeight = '75px'
header.style.margin = '0px auto'
header.style.display = 'flex'
header.style.justifyContent = 'space-between'
header.style.alignItems = 'center'
header.style.padding = "0px 50px"



// ЛОГОТИП
// Создаем картинку логотипа
const headerLogo = new Image()
headerLogo.src = "/img/Icon.svg"
headerLogo.alt = "icon logo"
// Добавляю ее в конец header 
header.appendChild(headerLogo)



// НАВИГАЦИЯ
const navWrapper = document.createElement("div")
navWrapper.classList.add('nav__wrapper')
header.appendChild(navWrapper)

navWrapper.style.display = 'flex'
navWrapper.style.alignItems = 'center'


// Пункты меню
const headerNavigation = document.createElement('nav')

// Используем insertAdjacentHTML() для добавления HTML-кода сразу для списка
headerNavigation.insertAdjacentHTML('beforeend', '<ul class = "header__list"> <li> <a href ="#">Guides</a></li> <li><a href ="#">Features</a></li> <li><a href ="#">Pricing</a></li> <li><a href ="#">Support</a></li> <li><a href ="#">Changelog</a></li> </ul>')
navWrapper.appendChild(headerNavigation)

const headerLinkElement = navWrapper.querySelectorAll('a')
headerLinkElement.forEach(link => link.classList.add('header__link'))

// Присваиваем css ul
headerNavigation.querySelectorAll('.header__list').forEach(list => {
    list.style.display = 'flex'
    list.style.justifyContent = 'space-around'
    list.style.padding = '0'
    list.style.flexWrap = 'wrap'
})

// Присваиваем css li
headerNavigation.querySelectorAll('li').forEach(list => list.style.listStyle = 'none')
headerNavigation.querySelectorAll('li').forEach(list => list.style.padding = '10px')



// Вертикальная линия между меню и кнопками
const headerVerticalLine = document.createElement('div')
headerVerticalLine.classList.add('header__vertical-line')
navWrapper.appendChild(headerVerticalLine)

headerVerticalLine.style.marginRight = "8px"
headerVerticalLine.style.marginLeft = "8px"
headerVerticalLine.style.marginTop = "4px"
headerVerticalLine.style.content = '""';
headerVerticalLine.style.border = '1px solid #c6df5d';
headerVerticalLine.style.display = 'inline-block';
headerVerticalLine.style.height = '16px';



// Кнопки входа
const headerButtons = document.createElement('div')
// Добавляем класс
headerButtons.classList.add('header__buttons')
// Добавляем ссылки
headerButtons.insertAdjacentHTML('beforeend', '<a class="header__link" href="#">Sign in</a> <a class="header__link header__button-signup" href="#">Sign up</a>')
// Вставляем в обертку навигации
navWrapper.appendChild(headerButtons)

headerButtons.style.display = 'flex'
headerButtons.style.flexWrap = 'wrap'

// Обратимся к ссылкам по классу
navWrapper.querySelectorAll('.header__link').forEach(link => {
    link.style.color = '#242424'
    link.style.fontSize = '17px'
    link.style.fontWeight = '400'
})

headerButtons.querySelectorAll('a').forEach(list => list.style.padding = "10px")
headerButtons.querySelectorAll('.header__button-signup').forEach(list => {
   list.style.boxSizing = "border-box"
   list.style.borderRadius = "100px"
   list.style.backgroundColor = "#242424"
   list.style.color = "#f0f0f0"
   list.style.padding = "10px 24px"

})



// Стили общие 
document.body.style.backgroundColor = "#E5FF76"
document.body.style.padding = "0"
document.body.style.margin = "0"


// убираем у ссылок подчеркивание и добавляем цвет
document.querySelectorAll('a').forEach(list => list.style.textDecoration = 'none')

// MAIN
const main = document.createElement('div');
container.appendChild(main);

const mainH1 = document.createElement('h1');
mainH1.textContent = 'Finally, all your team’s work in one place';
main.appendChild(mainH1);

const mainParagraph = document.createElement('p');
mainParagraph.textContent = 'Increase your team’s speed, collaboration, and alignment by giving everyone an overview of the most important work happening across your company.';
main.appendChild(mainParagraph);
