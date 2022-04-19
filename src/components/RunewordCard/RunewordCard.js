import React from 'react';
import './RunewordCard.css';

import runewords from './../../api/runewords.api';


function RunewordCard(props) {
// const RunewordCard = (props) => {
    // const runeList = props.runes.map(item => (
    //     <li key={item.id}>{item.name}</li>
    // ));
    // console.log(runewords)
    return (
        <div>
            <h2>{props.name}</h2>
            <ul>
                {props.runes.map((rune) => {
                    return(
                        <li>{rune.name}</li>
                    )
                })
            }
            </ul>

        </div>
    )
};

  


  export default RunewordCard;
  