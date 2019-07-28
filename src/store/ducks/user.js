import { createReducer, createActions } from "reduxsauce"; //facilita a criação
import Immutable from "seamless-immutable"; //mantem a variavel imutavel

/**
 *  Types & Action Creators
 */
const { Types, Creators } = createActions({
  loadRequest: ["username"],
  loadSuccess: ["data"],
  loadFailure: null,
  setCoordinate: ["coordinate"]
});
//Types:{ LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }
//Creators:
/**
 * loadRequest:()=>({ type: "LOAD_SUCCESS" })
 * loadSuccess:(data)=>({ type: "LOAD_SUCCESS", data })
 * loadFailure:()=>({ type: "LOAD_FAILURE" })
 */

export const UserTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
  data: [],
  currentyCoordinate: {}
});

/**
 * data:
 * [{nome,
 * avatar,
 * bio do usuário,
 * latidute,
 * longitude}]
 */

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, action) => {
    const { id, login, avatar_url, bio } = action.data;
    return state.merge({
      data: [
        ...state.data,
        {
          id,
          login,
          avatar_url,
          bio,
          coordinate: state.currentyCoordinate
        }
      ],
      loading: false,
      error: false
    });
  },
  [Types.LOAD_REQUEST]: state => state.merge({ loading: true, error: false }),
  [Types.LOAD_FAILURE]: state => state.merge({ loading: false, error: true }),
  [Types.SET_COORDINATE]: (state, action) =>
    state.merge({ currentyCoordinate: action.coordinate })
});
