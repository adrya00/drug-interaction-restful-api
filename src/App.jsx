import React from 'react';
import {Store} from './Store';


export default function App(){

  const {state, dispatch} = React.useContext(Store);
  const fetchDataAction = async () => {
    const data = await fetch('https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=1092422');
    const dataJSON = await data.json();
    
    return dispatch({
      type: 'FETCH_DATA',
      rxcuiPayload:dataJSON.interactionTypeGroup[0].interactionType[0].minConceptItem.rxcui,
      namePayload:dataJSON.interactionTypeGroup[0].interactionType[0].minConceptItem.name,
      interRxcuiPayload: dataJSON.interactionTypeGroup[0].interactionType[0].interactionPair[0].interactionConcept[1].minConceptItem.rxcui,
      interNamePayload:dataJSON.interactionTypeGroup[0].interactionType[0].interactionPair[0].interactionConcept[1].minConceptItem.name,
      severityPayload:dataJSON.interactionTypeGroup[0].interactionType[0].interactionPair[0].severity,
      descPayload:dataJSON.interactionTypeGroup[0].interactionType[0].interactionPair[0].description,
      urlPayload:dataJSON.interactionTypeGroup[0].interactionType[0].interactionPair[0].interactionConcept[1].sourceConceptItem.url
    });
  }; 

    
  React.useEffect(() => { 
    state.interRxcui.length === 0 && fetchDataAction();     
  });

  return(
    <React.Fragment>
      {console.log(state)}
      <div>
        <h1>Drug Interactions</h1>
        <p></p>
        
      </div>
    </React.Fragment>
  )};

  