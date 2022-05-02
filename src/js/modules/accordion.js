// css animation
// const accordion = (triggerSelector, itemsSelector) => {
//     const btns = document.querySelectorAll(triggerSelector),
//         blocks = document.querySelectorAll(itemsSelector);

//     blocks.forEach(block => {
//         block.classList.add('animated', 'fadeInDown');
//     });

//     btns.forEach(btn => {
//         btn.addEventListener('click', function () {
//             if (!this.classList.contains('active')) {
//                 btns.forEach(btn => {
//                     btn.classList.remove('active', 'active-style');
//                 });
//                 this.classList.add('active', 'active-style');
//            }
//         }); 
//     });
// };

// export default accordion;

//js animation

// const accordion = (triggerSelector) => {
//     const btns = document.querySelectorAll(triggerSelector);

//     btns.forEach(btn => {
//         btn.addEventListener('click', function () {
//             this.classList.toggle('active-style');
//             this.nextElementSibling.classList.toggle('active-content');

//             if (this.classList.contains('active-style')) {
//                 this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
//             } else {
//                 this.nextElementSibling.style.maxHeight = '0px';
//             }
//         });
//     });

// };

// export default accordion;


const accordion = (triggersSelector) => {

    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            btns.forEach(btn => {
                if (!this.classList.contains('active-style')) {
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                    btn.nextElementSibling.style.maxHeight = 0 + 'px';
                }
            });

            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
};

export default accordion;