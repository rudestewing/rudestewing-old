import React, {useReducer} from 'react';

export const Context = React.createContext();

export function ContextProvider(props) {
    const {value} = props;

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}