// Создает элемент или массив элементов с классом и стилями
const createElement = (tagName, className, styles = {}, quantityElements = 1) => {
    const elements = [];
    for (let i = 0; i < quantityElements; i++) {
        const newElement = document.createElement(tagName);
        newElement.classList.add(className);
        Object.assign(newElement.style, styles);
        elements.push(newElement); 
    }
    return quantityElements === 1 ? elements[0] : elements;
};

// Стили общие 
Object.assign(document.body.style, {
    backgroundColor: "#E5FF76",
    padding: "0",
    margin: "0"
});

const container = document.getElementById("app");
// Object.assign() - копирует значения всех свойств из одного или нескольких исходных объектов в целевой объект
Object.assign(container.style, {
    maxWidth: '1400px',
    fontFamily: '"Inter", sans-serif',
    margin: '0px auto'
});

// HEADER 
const header = () => {
    const header = createElement('header', 'header', {
        minHeight: '75px',
        margin: '0px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "0px 50px"
    });

    container.appendChild(header);
    
    // ЛОГОТИП
    const headerLogo = new Image();
    headerLogo.src = "/img/Icon.svg";
    headerLogo.alt = "icon logo";
    header.appendChild(headerLogo);
    
    // НАВИГАЦИЯ
    // Обертка навигации
    const navWrapper = createElement('div', 'header__nav-wrapper', {
        display: 'flex',
        alignItems: 'center'
    });
    header.appendChild(navWrapper);
    
    // Nav 
    const headerNavigation = createElement('nav', 'header__navigation');
    navWrapper.appendChild(headerNavigation);
    
    // ul
    const headerList = createElement("ul", "header__list", {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0',
        flexWrap: 'wrap'
    });
    headerNavigation.appendChild(headerList);
    
    // Пункты меню li, a
    const links = ['Guides', 'Features', 'Pricing', 'Support', 'Changelog'];
    links.forEach(linkText => {
        const listItem = createElement('li', 'header__list-item', {listStyle: 'none'});
        const link = createElement('a', 'header__link', { textDecoration: 'none' });
        link.textContent = linkText;
        listItem.appendChild(link);
        headerList.appendChild(listItem);
    });

    // Вертикальная линия между меню и кнопками
    const headerVerticalLine = createElement('div', 'header__vertical-line', {
        marginRight: "8px",
        marginLeft: "8px",
        content: '""',
        border: '1px solid #c6df5d',
        display: 'inline-block',
        height: '16px'
    });
    navWrapper.appendChild(headerVerticalLine);

    // Div с кнопками
    const headerButtons = createElement('div', 'header__buttons', {
        display: 'flex',
        flexWrap: 'wrap'
    });
    navWrapper.appendChild(headerButtons);

    // Кнопки
    headerButtons.insertAdjacentHTML('beforeend', '<a class = "header__link" href="#">Sign in</a> <a class="header__button-signup" href="#">Sign up</a>');

    // css кнопок 
    Array.from(document.getElementsByClassName('header__link')).forEach(link => {
        Object.assign(link.style, {
            color: '#242424',
            fontSize: '17px',
            fontWeight: '400',
            padding: "10px",
            textDecoration: 'none'
        });
    });

    Array.from(headerButtons.getElementsByClassName('header__button-signup')).forEach(list => {
        Object.assign(list.style, {
            boxSizing: "border-box",
            borderRadius: "100px",
            backgroundColor: "#242424",
            color: "#f0f0f0",
            padding: "10px 24px",
            textDecoration: 'none',
            marginLeft: "8px"
        });
    });
}

// MAIN
const main = () => {
    // main обертка
    const main = createElement('main', 'main', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }) 
    container.appendChild(main);

    // Заголовок
    const mainH1 = createElement('h1', 'main__title', {
        maxWidth: '1000px',
        textAlign: 'center',
        fontSize: '90px',
        fontWeight: '700',
        lineHeight: '100px',
        letterSpacing: '-2.5px',
        color: '#1E1E1E',
        margin: '96px 0 23px 0',
    });
    main.appendChild(mainH1);

    mainH1.textContent = 'Finally, all your team’s work in one place';

    // Параграф
    const mainParagraph = createElement('p', 'main__paragraph', {
        maxWidth: '890px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '33px',
        color: '#5B6436D9',
        margin: '0'
    });
    main.appendChild(mainParagraph);

    mainParagraph.textContent = 'Increase your team’s speed, collaboration, and alignment by giving everyone an overview of the most important work happening across your company.';

    // css для слов
    const words = mainParagraph.textContent.split(' ');
    let coloredText = '';

    const colors = {
        'speed,': '#1E1E1E',
        'collaboration,': '#1E1E1E',
        'alignment': '#1E1E1E'
    };

    words.forEach(word => coloredText += colors[word] ? `<span style = "color: ${colors[word]}"> ${word} </span> ` : word + ' ');
    mainParagraph.innerHTML = coloredText;

    // Div кнопок 
    const buttonsMain = createElement('div', 'main__wrapper-buttons', {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '48px',
        gap: '16px'
    });
    main.appendChild(buttonsMain);

    // кнопки
    buttonsMain.insertAdjacentHTML("beforeend", '<a href="#">Get started for free</a><a href="#">Watch video</a>');
    
    // css кнопок 
    const links = buttonsMain.querySelectorAll('a');
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
            backgroundColor: '#1F19E1',
            textDecoration: 'none'
        });
    });

    Object.assign(links[1].style, {
        color: '#242424',
        backgroundColor: '',
        border: '1px solid #C6DF5D'
    });

    // span внизу
    const postScript = createElement('span', 'main__post-script', {
        marginTop: '16px',
        color: '#5B6436',
        fontFamily: "Inter",
        fontSize: "15px",
        fontWeight: "400"
    });
    main.appendChild(postScript);
    
    postScript.textContent = 'No credit card required';
}

header();
main();