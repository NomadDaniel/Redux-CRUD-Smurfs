import axios from "axios";

export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const EDIT_SMURF_START = "EDIT_SMURF_START";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";


const baseURL = 'http://localhost:3333/smurfs';

export const getSmurf = () => dispatch => {
  dispatch( { type: GET_SMURF_START } );
  axios
    .get( baseURL )
    .then( ( res ) => {
      // console.log( 'get', res );
      dispatch( { type: GET_SMURF_SUCCESS, payLoad: res.data } );
    } )
    .catch( ( err ) => {
      dispatchEvent( { type: GET_SMURF_FAILURE, payLoad: err } );
    } );
};

export const addSmurf = ( smurf ) => dispatch => {
  dispatch( { type: ADD_SMURF_START } );
  axios
    .post( baseURL, smurf )
    .then( res => {
      // console.log( 'add smurf', res.data );
      dispatch( { type: ADD_SMURF_SUCCESS, payLoad: res.data } );
    } )
    .catch( err => {
      dispatch( { type: ADD_SMURF_FAILURE, payLoad: err } );
    } );
};

export const deleteSmurf = id => dispatch => {
  dispatch( { type: DELETE_SMURF_START } );
  axios
    .delete( `${ baseURL }/${ id }` )
    .then( res => {
      console.log( 'delete smurf', res.data );
      dispatch( { type: DELETE_SMURF_SUCCESS, payLoad: res.data } );
    } )
    .catch( ( err ) => {
      dispatch( { type: DELETE_SMURF_FAILURE, payLoad: err } );
    } );
};

export const editSmurf = ( id, changes ) => dispatch => {
  dispatch( { type: EDIT_SMURF_START } );
  axios
    .put( `${ baseURL }/${ id }`, changes )
    .then( res => {
      console.log( "edit smurf", res.data );
      dispatch( { type: EDIT_SMURF_SUCCESS, payLoad: res.data } );
    } )
    .catch( ( err => {
      dispatch( { type: EDIT_SMURF_FAILURE, payLoad: err } );
    } ) );
};
