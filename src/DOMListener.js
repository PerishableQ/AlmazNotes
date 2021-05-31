export class DomListener {
    constructor() {

    }

    create(selector, text) {
        const $el = document.createElement(selector);
        if (text) $el.innerHTML = text;
        
        return $el;
    }

    get($el) {
        return document.querySelector($el);
    }
}