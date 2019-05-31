import React, { Component} from 'react';
import Form from './Form'
import './List.css';
import ListItem from './ListItem'
import { connect } from 'react-redux'
import { Creators as ListAction} from '../store/actions/list'
import { bindActionCreators } from 'redux'
import { dispatch } from 'rxjs/internal/observable/range';

class CreateList extends Component {

  addProduct = (product, list) => {
    this.props.addProduct(product, list)
  }
  render() {
    return (
      <div className="page-container">
      <Form addProduct={this.addProduct}/>
        <div className="list-item-container">
          <ListItem />
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