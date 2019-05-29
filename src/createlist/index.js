import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { InputAdornment } from '@material-ui/core';


const units = ['kg', 'lt', 'un'];

const CreateList = () => (
  <div className="page-container">
    <form className="form-container">
      <TextField 
        label="Lista"
        name="List"
        value={''}
        onChange={() => {}}
        required
      />
      <TextField 
        label="Produto"
        name="product"
        value={''}
        onChange={() => {}}
        required
      />
      <TextField 
        label="Quantidade"
        name="quantity"
        value={''}
        onChange={() => {}}
        required
      />
      <TextField
        select 
        label="Unidade"
        name="unity"
        value={''}
        onChange={() => {}}
        required
      >
        {units.map(option => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </TextField>
      <TextField 
        label="Preço"
        name="price"
        value={''}
        onChange={() => {}}
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>
        }}
      />
    </form>
  </div>
);

export default CreateList;