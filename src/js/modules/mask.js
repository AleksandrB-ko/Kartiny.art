const mask = (selector) => {

    let setCursorPosition = (position, element) => {
        element.focus();
        
        if (element.setSelectionRange) {
            element.setSelectionRange(position, position);
        } else if (element.createTextRange) {
            let range = element.createTextRange();


            range.collapse(true);
            range.moveEnd('charаcter', position);
            range.moveStart('charаcter', position);
            range.select();
        }
    };

    function createMask(event) {
        let matrix = '+7(___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            value = this.value.replace(/\D/g, '');

        if (def.length >= value.length) {
            value = def;
        }
        if (this.value.charAt(1) != '7') {
            this.value = '';
            this.blur();
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            } else {
                setCursorPosition(this.value.length, this);
            }
        }

    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('keypress', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
    
};
export default mask;