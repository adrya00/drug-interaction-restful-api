import React from 'react';

export const Store = React.createContext();

const initialState = {

    rxcui:[],
    Name:[],
    interRxcui:[],
    interName:[],
    severity:[],
    description:[],
    url:[]
}

function reducer(state, action){
    switch (action.type){
        case 'FETCH_DATA':
            return {...state, 
                rxcui:action.rxcuiPayload, 
                name: action.namePayload, 
                interRxcui: action.interRxcuiPayload, 
                interName: action.interNamePayload, 
                severity: action.severityPayload, 
                description: action.descPayload, 
                url:action.urlPayload};
        default:
            return state;
    }
}

export function StoreProvider(props){
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = {state, dispatch};
return <Store.Provider value={value}>{props.children}
</Store.Provider>
}