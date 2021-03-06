
class ComponentBuy {
    static selector = '[data-component-buy]';

    selectors = {
        input: '[data-component-buy-child="input"]',
        csrf: '[data-component-buy-child="csrf"] > input',
        submit: '[data-component-buy-child="submit"]',
        result: '[data-component-buy-child="result"]',
        refresh: '[data-component-buy-child="refresh"]',
        error: '[data-component-buy-child="error"]',
    };
    children = {
        input: null,
        csrf: null,
        submit: null,
        result: null,
        refresh: null,
        error: null,
    };
    options = {
        url: '/ru/wallet/buy/',
        resultClassSuccess: 'modal-buy-processing__result_success',
        resultClassError: 'modal-buy-processing__result_error',
    };
    root = null;

    constructor(element) {
        this.root = element;

        this.initChildren();
      //  this.initSubmit();
      //  this.initRefresh();
    }

    initChildren = () => {
        this.children.input = this.root.querySelector(this.selectors.input);
        this.children.csrf = this.root.querySelector(this.selectors.csrf);
        this.children.submit = this.root.querySelector(this.selectors.submit);
        this.children.result = document.querySelector(this.selectors.result);
        this.children.refresh = document.querySelector(this.selectors.refresh);
        this.children.error = document.querySelector(this.selectors.error);
    }

    initSubmit = () => {
        this.children.submit.addEventListener('click', () => {

            this.reset(); // remove classes from previous buy

            let xhr = new XMLHttpRequest();
            let query = [];

            xhr.open('POST', this.options.url, true);
            //Send the proper header information along with the request
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onreadystatechange = () => {
                //Call a function when the state changes.
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        this.children.result.classList.add(this.options.resultClassSuccess);
                    } else {
                        this.children.result.classList.add(this.options.resultClassError);
                        let response = JSON.parse(xhr.response);
                        this.children.error.innerHTML = '';
                        Object.keys(response).forEach(key => {
                            if (Array.isArray(response[key])) {
                                response[key].forEach(value => {
                                    this.children.error.innerHTML += value + '<br/>'
                                });
                            } else {
                                this.children.error.innerHTML += response[key];
                            }
                        });
                    }
                }
            }

            query.push(`csrfmiddlewaretoken=${this.children.csrf.value}`);
            query.push(`count=${this.children.input.value}`);
            
            xhr.send(query.join('&'));
            
        });
    }
    initRefresh = () => {
        this.children.refresh.addEventListener('click', () => {
            location.reload();
        });
    }
    reset = () => {
        this.children.result.classList.remove(this.options.resultClassSuccess);
        this.children.result.classList.remove(this.options.resultClassError);
    }
}

export default ComponentBuy;