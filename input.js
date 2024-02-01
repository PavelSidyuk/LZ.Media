export default class Input {
    element;
    constructor({
                    param = [],
                    btnName = ''
                } = {}) {
        this.param = param;
        this.btnName = btnName;
        this.element = this.creatElement(this.createTemplate());

    }

    creatElement(template) {
        const element = document.createElement('div');
        element.innerHTML = template;
        return element.firstElementChild;

    }

    renderLinkTemplate(link) {
        if (link !== undefined) {
            return `<a href="${link}">Forgot Password?</a>`
        } else return ''
    }

    renderInputList(list) {
        return list.map(item => this.renderInput(item.name, item.id, item.label, item.type, item.placeholder, item.src, item.link)).join('');
    }

    renderInput(name, id, label, type, placeholder, src, link) {

        return `<div class="form__input">
                    <label for="${name}">${label}</label>
                    <input type="${type}" name="${name}" id="${id}"placeholder="${placeholder}">
                    <img class="password__toggle" src="${src}" alt="">
                    ${this.renderLinkTemplate(link)}
                </div>`
    }

    createTemplate() {
        return (`
        <form action="" class="my-form"> 
               ${this.renderInputList(this.param)}
            </div>
            <button class="form__submit_btn" type="submit">${this.btnName}</button>
        </form>`);


    }
}

