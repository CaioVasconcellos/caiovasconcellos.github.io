class Work extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.appendChild(this.build());
        this.shadow.appendChild(this.styles());
    }

    static get observedAttributes() {
        return ['reverse'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'reverse') {
            const workElement = this.shadowRoot.querySelector('.work');
            if (newValue !== null) { 
                workElement.classList.add('reverse');
            }
        }
    }

    build(){    
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "work");

        const workImg = document.createElement("div");
            workImg.setAttribute("class", "work__img");

            const newsImage = document.createElement("img");
                newsImage.src = this.getAttribute("img");
                newsImage.alt = "Imagem do projeto";

                workImg.appendChild(newsImage);

        const workInformation = document.createElement("div");
            workInformation.setAttribute("class", "work__information");

            const workTitle = document.createElement("h3");
                workTitle.textContent = this.getAttribute("title"); 

            const workContent = document.createElement("p");
                workContent.textContent = this.getAttribute("content");

            const workLink = document.createElement("a");
                workLink.href = this.getAttribute("link-url");
                workLink.innerHTML = "Veja mais &rarr;";

                
        
            workInformation.appendChild(workTitle);
            workInformation.appendChild(workContent);
            workInformation.appendChild(workLink);
            

            componentRoot.appendChild(workImg);
            componentRoot.appendChild(workInformation);

        if (this.hasAttribute('reverse')) {
            componentRoot.classList.add("reverse"); 
        }

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .work{
            row-gap: 2rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
            text-align: center;

        }


        .work img{
        width: 350px;
        height: 200px;
        box-shadow: 0 4px 25px rgba(14,36,49,.15);
        border-radius: .5rem;
        overflow: hidden;
        }

        .work img{
            transition: 1s;
            cursor: pointer;
            margin-bottom: -2rem;
        }

        .work img:hover{
            transform: scale(1.1);
        }

        .work__information > h3{
        font-size: 20px;

        .work__information > p{
        font-size: 15px;
    }


        }

        @media screen and (min-width: 768px){
        .work{
        max-width: 100rem;
        display: flex;
        margin: 0 auto 6rem;
        flex-direction: row;
        gap: 4rem;
        text-align: left;


        }

        

        .work.reverse{
            flex-direction: row-reverse;
            text-align: right;
        }

        .work.reverse .work__information > h3 {
            text-align: right;
        }

        .work.reverse .work__information > p {
            text-align: right;
        }


        .work img{
            width: 100%;
            min-width: 40rem;
            max-width: 47rem;
            height: auto;

        }

        .work__information{
            max-width: 47rem;
        }

        .work__information > h3{
        font-size: 30px;
        text-align: left;
        }

        .work__information > p{
        font-size: 20px;
        text-align: left;
        margin: 1rem 0 4rem;
        margin-bottom: 1rem;
        }

        .work__information > a{
        font-size: 20px;
        color: var(--second-color);
        }

    


            `;
            return style;
    }
}
customElements.define("my-work", Work);

document.addEventListener("DOMContentLoaded", () => {
    const works = document.querySelectorAll("my-work");

    works.forEach((work, index) => {
        if ((index + 1) % 2 === 0) {
            work.setAttribute("reverse", "true");
        }
    });
});


