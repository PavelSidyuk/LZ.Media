const validationMethods = {
/*
тут небольшая валидация на то что поле не пустое.

*/
    length(field, args) {
        const valLength = field.value.length,
            sign = args[0],
            then = args[1]

        let message = null;
        switch (sign) {
            case '>=':
                if (!(valLength >= then)) {
                    message = `минимальная длина поля ${then}`
                }
                break;
            case '=<':
                if (!(valLength <= then)) {
                    message = `максимальная длина поля ${then}`
                }
                break;
        }
        return message;
    },
}


const form = {
    formEl: null,
    rules: null,

    init() {
        this.formEl = document.querySelector('.register');
        this.formEl.addEventListener('submit', e => this.formSubmit(e))

        this.rules = [
            {
                selector: 'input[name="register_name"]',
                methods: [
                    {name: 'length', args: ['>=', 1]},
                    {name: 'length', args: ['<=', 40]}
                ],
            },
            {
                selector: 'input[name="register_password"]',
                methods: [
                    {name: 'length', args: ['>=', 1]},
                    {name: 'length', args: ['<=', 40]}
                ],
            },
            {
                selector: 'input[name="register_email"]',
                methods: [
                    {name: 'length', args: ['>=', 1]},
                    {name: 'length', args: ['<=', 40]}
                ],
            },
        ]
    },

    formSubmit(e) {
        if (!this.validate()) {
            e.preventDefault();
        }
    },

    validate() {
        let isValid = true;

        for (let rule of this.rules) {
            const inputEl = document.querySelector(rule.selector)
            console.log(inputEl)
            for (let method of rule.methods) {
                const validMethod = validationMethods[method.name];
                const errMessage = validMethod(inputEl, method.args);

                console.log(errMessage)
                if (errMessage) {
                    console.log(errMessage);
                    isValid = false;
                    inputEl.classList.add('in-valid')
                    break;
                }else {
                    inputEl.classList.remove('in-valid')
                }
            }
        }

        console.log(isValid);
        return isValid;

    }
}


form.init();