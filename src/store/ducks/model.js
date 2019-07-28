import { createReducer, createActions } from "reduxsauce"; //facilita a criação
import Immutable from "seamless-immutable"; //mantem a variavel imutavel

/**
 *  Types & Action Creators
 */
const { Types, Creators } = createActions({
  visible: null
});

export const ModelTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  visible: false
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.VISIBLE]: state => state.merge({ visible: !state.visible })
});
