import { getData } from "../services/requests";

const message = {
    failure: 'Ошибка загрузки...',
    fail: 'assets/img/fail.png'
};


const showServerCards = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);


    btn.addEventListener('click', function () {
        getData('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => failMess(error));
        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }

    function failMess(response) {
        let failMessage = document.createElement('div');
        let failImg = document.createElement('img');
        failMessage.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        failImg.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        failMessage.textContent = message.failure;
        failImg.setAttribute('src', message.fail);
        document.querySelector(wrapper).appendChild(failImg);
        document.querySelector(wrapper).appendChild(failMessage);
    }
};

export default showServerCards;
