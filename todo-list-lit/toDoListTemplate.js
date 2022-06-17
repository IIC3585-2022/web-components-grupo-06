import { LitElement, html, css } from "lit-element";

class ToDoList extends LitElement {
	static get properties() {
		return {
			counter: { type: Number },
			total_events: { type: Number },
			remaining_events: { type: Number },
			promt: {},
			titulo: {},
			tasks: { type: Array },
		};
	}

	constructor() {
		super();

		this.counter = 0;
		this.total_events = 0;
		this.remaining_events = 0;
		this.tasks = [];
		this.task_count = this.tasks.length;

		for (let i = 0; i < this.attributes.length; i++) {
			var att = this.attributes[i];
			if (att.name.includes("item")) {
				this.tasks.push([att.value, this.counter]);

				this.counter += 1;
				this.total_events += 1;
				this.remaining_events += 1;
			}
		}
	}

	loadTable() {}

	render() {
		const tasks = html`${this.tasks.map(
			([task, id]) =>
				html`
					<div class="flex-row row${id}">
						<input
							type="checkbox"
							class="left-action-row input${id}"
							@click="${() => this.taskDone(id)}"
						/>
						<h4 class="middle-action-row">${task}</h4>
						<button
							type="button"
							class="right-action-row item${id}"
							@click="${() => this.removeRow(id)}"
						>
							Delete
						</button>
					</div>
				`
		)}`;

		return html`
			<div class="title-div">
				<h1 class="title">${this.titulo}</h1>
			</div>

			<div class="todo-table">
				<div class="head-row flex-row">
					<h2 class="head-div tasks-div">${this.total_events} Tasks</h2>
					<h4 class="head-div remaining-div">
						${this.remaining_events} Remaining
					</h4>
				</div>
				<div class="border border-first"></div>
				<div class="actions">
					${tasks}
				</div>
				<div class="border border-second"></div>

				<div class="footer-flex">
					<input
						class="cool-input"
						type="text"
						placeholder="${this.promt}"
						maxlength="35"
					/>
					<button class="add-button" type="button" @click="${this.addToDo}">
						Add
					</button>
				</div>
			</div>
		`;
	}

	removeRow(id) {
		var row = this.renderRoot.querySelector(`.row${id}`);
		var toggle = row.children[0].checked;
		if (!toggle) {
			this.remaining_events -= 1;
		}
		this.total_events -= 1;

		row.remove();
	}

	taskDone(input_id) {
		this.renderRoot.querySelector(`.input${input_id}`).checked
			? (this.remaining_events -= 1)
			: (this.remaining_events += 1);
	}

	addToDo(input) {
		console.log(this.task_count);
		var input = this.shadowRoot.querySelector(".cool-input");
		if (input.value) {
			this.counter += 1;
			this.total_events += 1;
			this.remaining_events += 1;
			this.tasks = [...this.tasks, [input.value, this.counter]];
			input.value = "";
		}
	}

	static get styles() {
		return css`
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
		`;
	}
}

window.customElements.define("to-do-list", ToDoList);
