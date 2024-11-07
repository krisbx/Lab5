alert("Kris was here!");

class Center extends HTMLElement{
    connectedCallback(){
        this.innerHTML =` <div>${this.innerHTML}</div>`
    }
}

customElements.define(`x-center`, Center);