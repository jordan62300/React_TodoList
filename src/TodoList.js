import React, {Component} from 'react';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: [],
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        })
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        })
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div align="center" className="list-group-item mb-3" key={item}>
                    {item}  <button className="btn btn-danger ml-4" onClick={this.deleteTodo.bind(this,item)}>X</button> {/*btn pour supprimer*/}
                </div>
            )
        })
    }

    deleteTodo(item){
        let array = this.state.items;
        let index = array.indexOf(item)
        array.splice(index,1);                          {/* selectionne l'index et le supprime du tableau */}
        this.setState({
            items: array
        })
    }

    render(){
        return (
            <div>
                <h1 align="center">Ma Todo list</h1>
                <form className="form-row align-items-center"> 
                    <input 
                    value={this.state.userInput} 
                    type="text" 
                    placeholder="add task"
                    onChange={this.onChange.bind(this)}
                    className="form-control mb-2"/>
                    
                    <button 
                    onClick={this.addTodo.bind(this)}
                    className="btn btn-primary">Ajouter</button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}

export default TodoList