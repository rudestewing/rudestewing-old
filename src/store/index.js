import React, {useReducer} from 'react';

export const Context = React.createContext();

export function Provider(props) {
    const {reducer, initialState} = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{
            state: state,
            dispatch: dispatch
        }}>
            {props.children}
        </Context.Provider>
    )
}