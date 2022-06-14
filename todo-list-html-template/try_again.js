const template = document.createElement("template");
template.innerHTML = `

<style>

h1 {
  text-align: center;
}
div {
  text-align: center;
}
.btn {
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid lighten(gray, 24%);
  height: 28px;
  padding: 0 24px 0 16px;
  letter-spacing: .25px;
  border-radius: 24px;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
}
.td-left {
  min-width: 200px;
}

p.bold {
  font-weight: 900;
  font-size: 150%;
}

table, th, td {
  border: 1px solid black;
}

.todo-table, .input-row {
	
	margin-left: auto;
	margin-right: auto;
  
}

.input-row{
  margin-top: 50px;
}

.todo-input {
	display:block;
	box-sizing: border-box;
	width:100%;
	margin-right:0px;

  </style>
<div>
  <h1></h1>   
      <table class="table todo-table">
        <thead class="tr-top">
			<tr>
				<td class="td-left"><p class="bold">Action</p></td>
				<td><p class="bold">Delete</p></td>
			</tr>
        </thead>
		<tbody class="todo-table-body">
		</tbody>
		<tfoot>
			<tr>
				<td><input class="todo-input"></input></td>
				<td><button class="add">Add ToDo</button></td>
			</tr>
		</tfoot>
		</tr>
	</table>
</div>
`;

class ToDoList extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector("h1").innerHTML = this.getAttribute("titulo");

		this.counter = 0;
		this.loadTable();
		this.shadowRoot
			.querySelector(".add")
			.addEventListener("click", () => this.addToDo());
	}

	loadTable() {
		var table = this.shadowRoot.querySelector(".todo-table-body");

		for (var i = 0; i < this.attributes.length; i++) {
			this.counter += 1;
			console.log(this.counter);
			var att = this.attributes[i];
			var this_comp = this;
			if (att.name.includes("item")) {
				table.innerHTML += `
                <tr>
                    <td>Cocinar</td>
                    <td id="${this_comp.counter}>
                    </td>
                    </tr>
                    
                    `;

				console.log(
					this.shadowRoot.querySelector(`[id="${this_comp.counter}"]`)
				);
				var td = this.shadowRoot.querySelector(`[id="${this_comp.counter}"]`);
				td.innerHTML = `<button class="btn btn-delete" ids =${this.counter} name=${att.name} type="button" ><span class="mdi mdi-delete mdi-24px"></span>
                    <span>Delete</span></button>`;
				var this_comp = this;
				console.log(this_comp);
				console.log(
					this.shadowRoot.querySelector(`[ids="${this_comp.counter}"]`)
				);
				this.shadowRoot
					.querySelector(`[id="${this_comp.counter}"]`)
					.addEventListener("click", function () {
						this_comp.toggleCompleted(this);
					});
			}
		}
	}

	toggleCompleted(item) {
		console.log(this);
		this.removeAttribute(item.name);
		var row = item.parentElement.parentElement;
		row.remove();
		console.log(this);
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
