const russianLangInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        input.addEventListener('input', function () {
            input.value = input.value.replace(/[^a-яë 0-9]/ig, '');
        });
    });
};

export default russianLangInputs;