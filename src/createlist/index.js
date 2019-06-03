import React, { Component} from 'react';
import Form from './Form'
import './List.css';
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { Creators as ListAction} from '../store/actions/list'
import { bindActionCreators } from 'redux'


class CreateList extends Component {

  addProduct = (product, list) => {
    this.props.addProduct(product, list)
  }
  render() {
    return (
      <div className="page-container">
      <Form addProduct={this.addProduct}/>
        <div className="list-item-container">
          {this.props.list.items.map(item => 
            <ListItem item={item} key={item.id} deleteProduct={this.props.deleteProduct} toggleProduct={this.props.toggleProduct} />) }
        </div>
    </div>
    )
  } 
}
 

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = dispatch => bindActionCreators(ListAction, dispatch) 


export default connect(mapStateToProps, mapDispatchToProps)(CreateList);