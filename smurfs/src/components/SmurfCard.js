import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, editSmurf } from '../store/action';
import SmurfForm from '../components/SmurfForm';

const SmurfCard = props => {
  const { item, isLoading, deleteSmurf, editSmurf } = props;
  // console.log( "item", item );
  const [ isEditing, setIsEditing ] = useState( false );

  // const [ newSmurf, setNewSmurf ] = useState( {
  //   name: item.name,
  //   age: item.age,
  //   height: item.height
  // } );

  // const handleChange = e => {
  //   setNewSmurf( { ...newSmurf, [ e.target.name ]: e.target.value } );
  //   console.log( "change", newSmurf );
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   editSmurf( item.id, newSmurf );
  // };

  // if ( isLoading ) {
  //   return (
  //     <>
  //       <h2>Smurfs are Loading</h2>
  //     </>
  //   );
  // }

  if ( isEditing ) {
    return (
      //     <form onSubmit={ handleSubmit }>
      //       <h2>Update Smurf</h2>
      //       <input
      //         type='text'
      //         name='name'
      //         placeholder='smurf name'
      //         value={ newSmurf.name }
      //         onChange={ handleChange }
      //       />
      //       <input
      //         type='number'
      //         name='age'
      //         placeholder='smurf age'
      //         value={ newSmurf.age }
      //         onChange={ handleChange }
      //       />
      //       <input
      //         type='text'
      //         name='height'
      //         placeholder='smurf height'
      //         value={ newSmurf.height }
      //         onChange={ handleChange }
      //       />
      //       <button type="submit"> Update Smurf</button>
      //     </form>
      <SmurfForm key={ item.id } item={ item } />
    );
  }

  return (
    <div>
      <h2>Name: { item.name } </h2>
      <h3>Age: { item.age } </h3>
      <h3>Height: { item.height } </h3>
      <button onClick={ () => setIsEditing( true ) } >Edit</button>
      <button onClick={ () => deleteSmurf( item.id ) }>Delete</button>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect( mapStateToProps, { deleteSmurf, editSmurf } )( SmurfCard );