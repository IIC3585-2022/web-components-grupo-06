import {LitElement, html, css} from 'lit';

export class ToDoList extends LitElement {
  static properties = {
    _listItems: {state: true},
    hideCompleted: {},
  };
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
      background-color: rgba(0, 0, 0, .2) !important;; 
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
    }
    input[type=text],
    input[type=text]:focus{
      color: #fff;
      border: none;
      background-color: rgba(0, 0, 0, .1);
    }
    li.list-group-item{
      background-color: #423a6f;
      color: #F8F9FA;
      min-height:50px;
    }

    .delete{
      cursor: pointer;
    }

    label.add{
      margin-bottom: 15px;
    }

    .filtred{
      display: none !important;
    }
    .flexio{
      display: flex;
    }
    .stretchio{
      flex-grow: 1;
      margin-right: 10px;
    }
    .no-border{
      border: none;
      background-color: transparent;
      color: white;
      font-size: 1.2rem;
      padding-bottom: 1%;
      padding-right: 3%;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    
    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:checked + .slider {
      background-color: #2196F3;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    
    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }
    .flexio-center{
      display: flex;
      justify-content: center;
    }
    .flexio-center span{
      padding-top: 1%;
    }
  `;

  constructor() {
    super();
    this._listItems = [];
    this.hideCompleted = false;
  }

  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;
    const todos = html`
      <ul class="list-group todos mx-auto text-light">
        ${items.map(
          (item) => html`
              <li
                class=${item.completed ? 'completed cursor-pointer noselect list-group-item d-flex justify-content-between align-items-center' : 'cursor-pointer noselect list-group-item d-flex justify-content-between align-items-center'}
                @click=${() => this.toggleCompleted(item)}>
                  <span>${item.text}</span>
              </li>`
        )}
      </ul>
    `;
    const caughtUpMessage = html`
      <ul class="list-group todos mx-auto text-light">
              <li
                class='list-group-item d-flex justify-content-between align-items-center'
                  <span>Ya no te queda nada por hacer!</span>
              </li>
      </ul>
    `;
    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      ${todosOrMessage}
      <br>
      <div class="flexio">
        <input type='text' class='add text-light stretchio' id="newitem">
        <button @click=${this.addToDo} class='no-border'>+</button>
      </div>
      <br>
      <div class='flexio-center'>
        <label class="switch">
          <input type="checkbox"
            @change=${this.setHideCompleted}
            ?checked=${this.hideCompleted}>
            <span class="slider round"></span>
        </label>
        &nbsp
        &nbsp
        <span> Esconder tareas hechas </span>
      </div>
    `;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addToDo() {
    this._listItems = [
      ...this._listItems,
      {text: this.input.value, completed: false},
    ];
    this.input.value = '';
  }
}
customElements.define('todo-list', ToDoList);
