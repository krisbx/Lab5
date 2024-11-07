class Center extends HTMLElement{
    connectedCallback(){
        this.innerHTML =` <div style="text-align:center">${this.innerHTML}</div>`
    }
}

customElements.define("x-center", Center);

class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", Year);

class Titletip extends HTMLElement{
    connectedCallback(){
        this.innerHTML =` <abbr style="color:#F00;" title="Hello!">${this.innerHTML}</abbr>`
    }
}

customElements.define("x-tooltip", Titletip);

alert("Kris was here!");
