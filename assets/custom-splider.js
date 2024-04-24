if(!customElements.get("splider-component")) {
  class SpliderComponent extends HTMLElement{
  
     constructor(){
        super();
        this.element = this
        console.log(this)
        this.options = JSON.parse(this.element.dataset.sliderOption);
        console.log(this.options);
  
        this.displaySliderShow()
  
     }
  
      displaySliderShow(){
  
        new Splide(this.element, this.options).mount()
      }
  
  
  
    }
    customElements.define("splider-component", SpliderComponent)
  
  }