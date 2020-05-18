import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf, editSmurf } from '../store/action';

const SmurfForm = props => {
  const { addSmurf, isLoading, editSmurf, item } = props;
  const [ newSmurf, setNewSmurf ] = useState(
    item
      ? { name: item.name, age: item.age, height: item.height }
      : { name: '', age: '', height: '' }
  );

  const handleChange = e => {
    setNewSmurf( { ...newSmurf, [ e.target.name ]: e.target.value } );
    console.log( "change", newSmurf );
  };

  const handleSubmit = e => {
    e.preventDefault();
    item
      ? editSmurf( item.id, newSmurf )
      : addSmurf( newSmurf );
    setNewSmurf( { name: '', age: '', height: '' } );
  };

  if ( isLoading ) {
    return (
      <>
        <h2>Adding smurf...</h2>
      </>
    );
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h2>{ item
        ? `Update Smurf here`
        : `Add New Smurf` }</h2>
      <input
        type='text'
        name='name'
        placeholder='smurf name'
        value={ newSmurf.name }
        onChange={ handleChange }
      />
      <input
        type='number'
        name='age'
        placeholder='smurf age'
        value={ newSmurf.age }
        onChange={ handleChange }
      />
      <input
        type='text'
        name='height'
        placeholder='smurf height'
        value={ newSmurf.height }
        onChange={ handleChange }
      />
      <button type="submit"> { item
        ? `Update Smurf`
        : `Add Smurf` }</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect( mapStateToProps, { addSmurf, editSmurf } )( SmurfForm );