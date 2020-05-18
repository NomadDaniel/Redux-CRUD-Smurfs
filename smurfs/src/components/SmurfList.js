import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';

//import action
import { getSmurf } from "../store/action";

const SmurfList = props => {
  const { smurfs, isLoading, getSmurf } = props;
  useEffect( () => {
    getSmurf();
  }, [ getSmurf ] );
  // console.log( "smurfs", smurfs );

  if ( isLoading ) {
    return (
      <>
        <h2>Smurfs are Loading</h2>
      </>
    );
  }

  return (
    <div>
      { smurfs.map( ( item ) => (
        <SmurfCard key={ item.id } item={ item } />
      ) ) }
    </div>
  );
};

const mapStateToProps = state => {
  // console.log( "initial state", state );
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect( mapStateToProps, { getSmurf } )( SmurfList );