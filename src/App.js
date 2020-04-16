import React, { Component } from 'react';
import './App.css';
import PERSON from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ id: 'a1', name: 'Max', age: 32 },
			{ id: 'b2', name: 'Manu', age: 12 },
			{ id: 'c3', name: 'Steph', age: 26 }
		],
		other: 'some value',
		showPersons: false
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((pers) => {
			return pers.id === id;
		});

		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	};

	deletePersonHandler = (personIndex) => {
		const pers = [...this.state.persons];
		pers.splice(personIndex, 1);
		this.setState({ persons: pers });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		const STYLE = {
			backgroundColor: 'lightgreen',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<PERSON
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
		}

		return (
			<div className='App'>
				<h1>Hi, I am a React App</h1>
				<p>This is really working!</p>
				<button style={STYLE} onClick={this.togglePersonsHandler}>
					Toggle persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
