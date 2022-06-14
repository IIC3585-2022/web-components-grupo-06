const template = document.createElement("template");
template.innerHTML = `

<style>
    
.todo-table {
	background-color: aliceblue;
	margin-left: auto;
	margin-right: auto;
	margin-top: 20px;
	border-radius: 18px;
	width: 65%;
	min-width: 200px;
	max-width: 400px;
	max-height: 80%;
	box-shadow: 10px 10px 10px #999;
	border-collapse: separate;
	border-spacing: 0 5px;
	padding: 20px;
	display: flex;
	flex-direction: column;
}

.head-row {
	order: 1;
}

.flex-row {
	display: flex;
	align-items: center;
}
.left-action-row {
	width: 10%;
}

.middle-action-row {
	width: 65%;
}

.right-action-row {
	width: 25%;
	border-radius: 15px;
	height: 25px;
	width: 70px;
}

.actions {
	order: 3;
}

.border {
	content: "";
	margin-left: 10px;
	margin-right: 10px;
	bottom: 0;
	height: 15px;
	border-bottom: 1px solid rgb(208, 235, 240);
	display: flex;
}

.border-first {
	order: 2;
}

.border-second {
	order: 4;
}
.head-div {
	width: 200px;
	width: 50%;
	text-align: center;
}

p1 .x-tasks,
.remaining-tasks {
	text-align: center;
}

.check-action {
	text-align: center;
	/* center checkbox horizontally */
	vertical-align: middle;
}

.checkbox {
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}

.border-bot {
	content: "";
	margin-left: 10px;
	margin-right: 10px;
	bottom: 0;
	height: 15px;
	border-bottom: 1px solid rgb(208, 235, 240);
	display: flex;
}
.action-row {
	margin: 10px;
	padding: 10px;
	height: 30px;
}

.footer-flex {
	margin-top: 20px;
	order: 5;
}

.cool-input {
	border-radius: 15px;
	width: 75%;
	height: 30px;
	margin-left: 5px;
	border-width: 1px;
	text-indent: 10px;
}

.add-button {
	border-radius: 15px;
	width: 60px;
	height: 30px;
	margin-left: 0;
}

.title {
	margin-top: 30px;
	text-align: center;
	color: azure;
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}



</style>

<div class="title-div">
        <h1 class="title"></h1>
    </div>

<div class="todo-table">
    <div class="head-row flex-row";">
        <h2 class="head-div tasks-div"></p2>
        <h4 class="head-div remaining-div"></h4>
    </div>
    <div class="border border-first"></div>
    <div class="actions" >
    </div>
    <div class="border border-second"></div>

    <div class="footer-flex">
        <input class="cool-input" type="text" placeholder="" maxlength="40">
        <button class="add-button" type="button">Add</button>
    </div>
</div>
`;

class ToDoList extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector("h1").innerHTML = this.getAttribute("titulo");
		this.events = [];
		this.counter = 0;
		this.total_events = 0;
		this.remaining_events = 0;
		this.loadTable();

		this.updateTasks();

		this.updateRemainingTasks();

		this.shadowRoot.querySelector(".cool-input").placeholder =
			this.getAttribute("promt");

		this.shadowRoot
			.querySelector(".add-button")
			.addEventListener("click", () => this.addToDo());
	}

	removeRow(item) {
		if (!item.parentElement.querySelector("input").checked) {
			this.remaining_events -= 1;
			this.updateRemainingTasks();
		}
		this.updateTasks();
		this.removeAttribute(item.name);
		item.parentElement.remove();
	}

	updateTasks() {
		this.shadowRoot.querySelector(
			".tasks-div"
		).innerHTML = `${this.total_events} Tasks`;
	}

	updateRemainingTasks() {
		this.shadowRoot.querySelector(
			".remaining-div"
		).innerHTML = `${this.remaining_events} Remaining`;
	}

	taskDone(toggled) {
		if (toggled) {
			this.remaining_events -= 1;
		} else {
			this.remaining_events += 1;
		}

		this.updateRemainingTasks();
	}

	loadTable() {
		var attributes = this.attributes;
		var frame = this.shadowRoot.querySelector(".actions");

		for (let i = 0; i < attributes.length; i++) {
			if (attributes[i].name.includes("item")) {
				document.addEventListener(
					"DOMContentLoaded",
					(function (doc) {
						doc.total_events += 1;
						doc.remaining_events += 1;
						var div = document.createElement("div");
						div.classList.add("flex-row");
						frame.appendChild(div);
						var input_box = document.createElement("input");
						input_box.type = "checkbox";
						input_box.classList.add("left-action-row");
						input_box.onclick = function () {
							doc.taskDone(this.checked);
						};
						div.appendChild(input_box);
						var h4 = document.createElement("h4");
						h4.classList.add("middle-action-row");
						h4.innerHTML = attributes[i].value;
						div.appendChild(h4);
						var button = document.createElement("button");

						button.type = "button";
						button.id = i;
						button.name = attributes[i].name;
						button.classList.add("right-action-row");
						button.innerHTML = `Delete`;

						button.onclick = function () {
							doc.removeRow(this);
						};
						div.appendChild(button);
					})(this),
					false
				);
			}
		}
	}

	addToDo(input) {
		var input = this.shadowRoot.querySelector(".cool-input").value;
		this.counter += 1;
		console.log(input);

		if (input != "") {
			var frame = this.shadowRoot.querySelector(".actions");
			document.addEventListener(
				"DOMContentLoaded",
				(function (doc) {
					doc.total_events += 1;
					doc.remaining_events += 1;
					doc.updateTasks();
					doc.updateRemainingTasks();
					var div = document.createElement("div");
					div.classList.add("flex-row");
					frame.appendChild(div);
					var input_box = document.createElement("input");
					input_box.type = "checkbox";
					input_box.classList.add("left-action-row");
					div.appendChild(input_box);
					var h4 = document.createElement("h4");
					h4.classList.add("middle-action-row");
					h4.innerHTML = input;
					div.appendChild(h4);
					var button = document.createElement("button");

					button.type = "button";
					button.id = doc.counter;
					button.name = `item${doc.counter}`;
					button.classList.add("right-action-row");
					button.innerHTML = `Delete`;

					button.onclick = function () {
						doc.removeRow(this);
					};
					div.appendChild(button);
				})(this),
				false
			);
			var input = (this.shadowRoot.querySelector(".cool-input").value = "");
		}
	}
}

customElements.define("to-do-list", ToDoList);
