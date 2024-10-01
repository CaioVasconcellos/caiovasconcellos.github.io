class Skills extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "skills");

        const skillsImg = document.createElement("img");
            skillsImg.src = this.getAttribute("img");
            skillsImg.alt = "Imagem da skill";

        const skillsTitle = document.createElement("h3");
            skillsTitle.textContent = this.getAttribute("title");

        const skillsContent = document.createElement("p");
            skillsContent.textContent = this.getAttribute("content");

        componentRoot.appendChild(skillsImg);
        componentRoot.appendChild(skillsTitle);
        componentRoot.appendChild(skillsContent);

        return componentRoot;
    }

styles(){
    const style = document.createElement("style");
        style.textContent = `
.skills{    
width: auto;
height: auto;
display: flex;
flex-direction: column;
border: 1px var(--first-color) solid;
border-radius: .5rem;
align-items: center;
margin: auto;
position: relative;
margin-bottom: 1rem;

}

.skills img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 4px;
    margin-top: 10px;
}

.skills > h3{
    font-size: 20px;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
}

.skills >  p{
margin: 8px;
text-align: center;
font-size: 16px;
padding: 0;
}

@media screen and (min-width: 1060px){
    .skills{
        width: 350px;
        height: 250px;
    }
        `;
    return style;
}
}

customElements.define("my-skills", Skills);