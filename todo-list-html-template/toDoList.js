const template = document.createElement("template");
template.innerHTML = `

<style>
    div {
        align: center;
    }

</style>
<div>
    <h4></h4>
        <table class="todo-table">

    </table>
    <div class="input_row"></div>
        <input class="todo-input"></input>
        <button class="add">Agregar</button>
    </div>
</div>
<div class="main_container">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>`;

class ToDoList extends HTMLElement {
	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector("h4").innerHTML = this.getAttribute("titulo");

		this.counter = 0;
		this.loadTable();
		this.shadowRoot
			.querySelector(".add")
			.addEventListener("click", () => this.addToDo());
	}

	loadTable() {
		var table = this.shadowRoot.querySelector(".todo-table");

		for (var i = 0; i < this.attributes.length; i++) {
			this.counter += 1;
			console.log(this.counter);
			var att = this.attributes[i];
			if (att.name.includes("item")) {
				var row = table.insertRow();
				row.insertCell(0).innerHTML = att.value;
				row.insertCell(
					1
				).innerHTML = `<button class="btn btn-delete" id =${this.counter} name=${att.name} type="button" ><span class="mdi mdi-delete mdi-24px"></span>
            <span>Delete</span></button>`;
				var this_comp = this;
				this.shadowRoot
					.querySelector(`[id="${this_comp.counter}"]`)
					.addEventListener("click", function () {
						this_comp.toggleCompleted(this);
					});
			}
		}
	}

	toggleCompleted(item) {
		this.removeAttribute(item.name);
		var row = item.parentElement.parentElement;
		row.remove();
	}

	addToDo(input) {
		this.counter += 1;

		var input = this.shadowRoot.querySelector(".todo-input").value;
		this.shadowRoot.querySelector(".todo-input").value = "";

		console.log(input);
		var table = this.shadowRoot.querySelector(".todo-table");
		var row = table.insertRow();

		this.setAttribute(`item${this.counter}`, `${input}`);
		row.insertCell(0).innerHTML = input;
		row.insertCell(
			1
		).innerHTML = `<button class="btn btn-delete" id =${this.counter} name=${input} type="button" ><span class="mdi mdi-delete mdi-24px"></span>
            <span>Delete</span></button>`;
		var this_comp = this;
		this.shadowRoot
			.querySelector(`[id="${this_comp.counter}"]`)
			.addEventListener("click", function () {
				this_comp.toggleCompleted(this);
			});
	}
}

customElements.define("to-do-list", ToDoList);
