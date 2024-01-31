export default class Input {
    element;

    constructor({
                    label = '',
                    name = '',
                    type = '',
                    id = '',
                    placeholder = '',
                    link = '',
                    src = '',
                } = {}) {
        this.label = label;
        this.name = name;
        this.type = type;
        this.id = id;
        this.placeholder = placeholder;
        this.link = link;
        this.src = src;
        this.element = this.creatElement(this.createTemplate());
    }

    creatElement(template) {
        const element = document.createElement('div');
        element.innerHTML = template;
        return element.firstElementChild;
    }

    createImgTemplate() {
        if (this.src) {
            return `<img class="password__toggle" src="${this.src}" alt="">`;
        }
        return '';
    }

    createLinkTemplate() {
        if (this.link) {
            return `<a href="${this.link}">Forgot Password?</a>`;
        }
        return '';

    }

    createTemplate() {
        return (`
            <div class="form__input">
               <label for="${this.name}">${this.label}</label>
               <input type="${this.type}" name="${this.name}" id="${this.id}"placeholder="${this.placeholder}">
               ${this.createImgTemplate()}
               ${this.createLinkTemplate()}
           </div>`);

    }

    remove() {
        this.element.remove();
    }

    destroy() {
        this.remove();
    }


}

