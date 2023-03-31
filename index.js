class TestComponent extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: "open" });

		let style = `
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			h1 { 
				margin: 2rem;
				text-align: center;
				color: orange;
			}
			form {
				border: 1px solid red;
				margin: 2em 10em;
				padding: 2em;
				font-size: 2em;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				color: Blue;
				background: radial-gradient(circle, rgba(225,225,225,1) 0%, rgba(101,217,95,1) 100%);
			}
			form input {
				width: 30em;
				height: 2em;
				background:  linear-gradient(121deg, rgba(134,34,195,1) 0%, rgba(45,227,253,1) 100%);
				margin-bottom: 2em; 
			}
			input::placeholder {
				font-size: 1.3rem;
				color: #65d95f;
				font-style: italic;
			}
			button {
				width: 10em;
				height: 5em;
				margin: 0 auto;
				border-radius: 50px;
				background: linear-gradient(121deg, rgba(14,210,109,1) 2%, rgba(54,75,232,1) 100%); 
			}
			button:hover {
				cursor: pointer;
				opacity: 0.7;
			}
		</style>
		`;

		this.shadowRoot.innerHTML = `
		${style}
		${this.render(this.state)}
		`;
	}

	connectedCallback() {
		const boton = this.shadowRoot.querySelector("#button");
		const form = this.shadowRoot.getElementById("form");
		const message = this.shadowRoot.getElementById("h1");

		boton.addEventListener("click", (e) => {
			e.preventDefault();
			message.innerHTML = "Gracias por enviarnos tus datos!!";
			form.style.display = "none";
		});
	}

	render() {
		return `
	    <h1 id="h1">Complete el siguiente formulario</h1>
	    <form action="" id="form">
            <label for="text">Ingrese su nombre</label>
            <input type="text" id="text" placeholder="Ingrese su nombre" required>
            <label for="gmail">Ingrese su correo</label>
            <input type="text" name="gmail" id="gmail" placeholder="Ingrese su Gmail" required>
            <label for="telefono">Ingrese su Numero de telefono</label>
            <input type="text" name="telefono" id="telefono" placeholder="Ingrese su telefono" required>
            <label for="fecha">Ingrese su fecha de nacimiento</label>
            <input type="date" name="fecha" id="fecha" required>
			<button id="button">Enviar</button>
        </form>
	    `;
	}
}

window.customElements.define("test-component", TestComponent);
