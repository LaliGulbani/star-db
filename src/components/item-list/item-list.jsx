
import React, { Component } from 'react';

import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service';

import './item-list.css';

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList) => this.setState({
        peopleList
    }))
      .catch((err) => console.log('Lali'))
  }

  renderItems(arr) {

    console.log({arr});
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.propsOnItemSelected(id)}>
          {name}
        </li>
      )
    })
  }

  render() {

    const { peopleList } = this.state;

    if(!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList)

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}