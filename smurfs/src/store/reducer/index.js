import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE

} from "../action";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
};

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {

    case GET_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payLoad,
        isLoading: false,
      };
    case GET_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payLoad
      };

    case ADD_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // smurfs: [ ...state.smurfs, action.payLoad ],
        smurfs: action.payLoad,
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isLoading: true,
        smurfs: action.payLoad,
      };

    case DELETE_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // smurfs: [ ...state.smurfs, action.payLoad ],
        smurfs: action.payLoad
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isLoading: true,
        smurfs: action.payLoad,
      };

    case EDIT_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // smurfs: [ ...state.smurfs, action.payLoad ],
        smurfs: action.payLoad
      };
    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        isLoading: true,
        smurfs: action.payLoad,
      };


    default:
      return state;
  }
};