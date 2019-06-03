import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import NewList from '../home/NewList'
import List from '../home/List'
import { getListTotal } from '../store/reducers/list';


const Home = (props) => (
  <div className="page-container">
    <NewList />
    {props.list.items.length > 0 && 
      <List list={props.list.list} total={props.total}/>
    }
  </div>
);

const MapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
  
});

export default connect(MapStateToProps, null)(Home);