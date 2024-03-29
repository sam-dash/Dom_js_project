// Стили общие 
Object.assign(document.body.style, {
    backgroundColor: "#E5FF76",
    padding: "0",
    margin: "0",
});


// Присвоила переменной обертку сайта, в которую будем все добавлять
const container = document.getElementById("app")
// Копирует значения всех свойств из одного или нескольких исходных объектов в целевой объект
Object.assign(container.style, {
    maxWidth: '1400px',
    fontFamily: '"Inter", sans-serif',
    margin: '0px auto'
 })


// HEADER 
// Создала тэг header 
const header = document.createElement('header')
// Создала класс
header.classList.add('header')
// Вставила внутрь контейнера
container.appendChild(header)

Object.assign(header.style, {
    minHeight: '75px',
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: "0px 50px"
})


// ЛОГОТИП
// new Image() создает новый элемент изображения
const headerLogo = new Image()
headerLogo.src = "/img/Icon.svg"
headerLogo.alt = "icon logo"

header.appendChild(headerLogo)


// НАВИГАЦИЯ
const navWrapper = document.createElement("div")

Object.assign(navWrapper.style, {
    display: 'flex',
    alignItems: 'center'
})

header.appendChild(navWrapper)

const headerNavigation = document.createElement('nav')
navWrapper.appendChild(headerNavigation)

// Используем insertAdjacentHTML() для добавления HTML-кода сразу для списка
headerNavigation.insertAdjacentHTML('beforeend', '<ul class = "header__list"> <li> <a href ="#">Guides</a></li> <li><a href ="#">Features</a></li> <li><a href ="#">Pricing</a></li> <li><a href ="#">Support</a></li> <li><a href ="#">Changelog</a></li> </ul>')

// Присваиваем css ul
headerNavigation.querySelectorAll('.header__list').forEach(list => {
    Object.assign(list.style, {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0',
        flexWrap: 'wrap'
    })
})

// Присваиваем css li
headerNavigation.querySelectorAll('li').forEach(list => {
    Object.assign(list.style, {
        listStyle: 'none'
    })
})

// Вертикальная линия между меню и кнопками
const headerVerticalLine = document.createElement('div')
navWrapper.appendChild(headerVerticalLine)

Object.assign(headerVerticalLine.style, {
    marginRight: "8px",
    marginLeft: "8px",
    marginTop: "4px",
    content: '""',
    border: '1px solid #c6df5d',
    display: 'inline-block',
    height: '16px'
})


// КНОПКИ ВХОДА
const headerButtons = document.createElement('div')
navWrapper.appendChild(headerButtons)

Object.assign(headerButtons.style, {
    display: 'flex',
    flexWrap: 'wrap'
})

// Добавляем ссылки
headerButtons.insertAdjacentHTML('beforeend', '<a href="#">Sign in</a> <a class="header__button-signup" href="#">Sign up</a>')

// Добавим класс всем ссылкам в header
const headerLink = navWrapper.querySelectorAll('a')
headerLink.forEach(link => link.classList.add('header__link'))

// Стилизуем ссылки
// Array.from() — делает возвращаемое getElementsByClassName массивом
Array.from(document.getElementsByClassName('header__link')).forEach(link => {
    Object.assign(link.style, {
        color: '#242424',
        fontSize: '17px',
        fontWeight: '400',
        padding: "10px"
    })
})

Array.from(headerButtons.getElementsByClassName('header__button-signup')).forEach(list => {
    Object.assign(list.style, {
        boxSizing: "border-box",
        borderRadius: "100px",
        backgroundColor: "#242424",
        color: "#f0f0f0",
        padding: "10px 24px"
    })
})



// MAIN
const main = document.createElement('main');
container.appendChild(main);

Object.assign(main.style, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

// Заголовок
const mainH1 = document.createElement('h1');
main.appendChild(mainH1);
mainH1.textContent = 'Finally, all your team’s work in one place';

Object.assign(mainH1.style, {
    maxWidth: '1000px',
    textAlign: 'center',
    fontSize: '90px',
    fontWeight: '700',
    lineHeight: '100px',
    letterSpacing: '-2.5px',
    color: '#1E1E1E',
    margin: '96px 0 23px 0',
})

// Параграф
const mainParagraph = document.createElement('p');
main.appendChild(mainParagraph);
mainParagraph.textContent = 'Increase your team’s speed, collaboration, and alignment by giving everyone an overview of the most important work happening across your company.';




Object.assign(mainParagraph.style, {
    maxWidth: '890px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '33px',
    color: '#5B6436D9',
    margin: '0'
})

// Изменить цвет отдельных слов в параграфе
// Получаем массив слов
const words = mainParagraph.textContent.split(' ')
let coloredText = '';

const colors = {
    'speed,': '#1E1E1E',
    'collaboration,': '#1E1E1E',
    'alignment': '#1E1E1E'
};

words.forEach(word => coloredText += colors[word] ? `<span style = "color: ${colors[word]}"> ${word} </span> ` : word + ' ')

mainParagraph.innerHTML = coloredText;


// Div с кнопками
const buttonsMain = document.createElement('div')
main.appendChild(buttonsMain)

buttonsMain.insertAdjacentHTML("beforeend", '<a href = #>Get started for free</a><a href = #>Watch video</a>')
const links = buttonsMain.querySelectorAll('a');

// Стилизуем кнопки
Object.assign(buttonsMain.style, {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '48px',
    gap: '16px'
})

links.forEach(link => {
    Object.assign(link.style, {
        color: '#FFFFFF',
        fontSize: '19px',
        lineHeight: '1',
        fontWeight: '500',
        width: '260px',
        height: '68px',
        boxSizing: "border-box",
        border: '1px solid #E5FF76E5',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F19E1'
    });
});

Object.assign(links[1].style, {
    color: '#242424',
    backgroundColor: '',
    border: '1px solid #C6DF5D'
})


// span внизу 
const postScript = document.createElement('span')
main.appendChild(postScript)

postScript.textContent = 'No credit card required'

Object.assign(postScript.style, {
    marginTop: '16px',
    color: '#5B6436',
    fontFamily: "Inter",
    fontSize: "15px",
    fontWeight: "400",
})


// textDecoration для ссылок
Array.from(document.getElementsByTagName('a')).forEach(list => list.style.textDecoration = 'none')
