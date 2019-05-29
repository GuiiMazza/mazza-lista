import React from 'react';
import CustomCard from '../common/CustomCard';
import {faShoppingBasket, faCheck} from '@fortawesome/free-solid-svg-icons';
import ListFooter from './ListFooter';
import ListItem from './ListItem';
import './List.css'

const List = () => (

<CustomCard containerClass="list-container" footer={<ListFooter />} link="/lista">
  <div>
    <p className="title">Mês</p>
    <div className="list-card-body">
      <ListItem icon={faShoppingBasket} text="1 Item(s) Restante"/>
      <ListItem icon={faCheck} text="2 Item(s) Comprados"/>
    </div>
  </div>
</CustomCard>
);


export default List;
