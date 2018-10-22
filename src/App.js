/**
 * Created by kevin on 10/21/18.
 */
import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    };

    render(){
        const filteredrobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredrobots}/>
            </div>
        )
    }
}

export default App;