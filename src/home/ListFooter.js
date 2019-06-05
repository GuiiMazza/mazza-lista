import React from 'react';

const ListFooter = (props) => (
  <div className="list-footer">
    <p>31/01/1996</p>
    <p>Valor total: R$ {props.total}</p>
  </div>
);

export default ListFooter;
