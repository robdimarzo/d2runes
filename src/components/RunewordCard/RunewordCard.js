import React from 'react';
import './RunewordCard.css';
import Rune from '../Rune/Rune';


function RunewordCard(props) {
// const RunewordCard = (props) => {
    // const runeList = props.runes.map(item => (
    //     <li key={item.id}>{item.name}</li>
    // ));
    // console.log(runewords)
    return (
        <article className="runeword__card">
            <h2 className="runeword__name">{props.name}</h2>
            <ul className="runeword__runes">
                {props.runes.map((rune) => {
                    return(
                        <li>{rune.name}</li>
                    )
                })
            }
            </ul>
            <div>
                <span>{props.sockets}</span>
                <span> Socketed </span>
                <span>{props.item}</span>
            </div>
            <ul className="runeword__stats">
                {props.stats.map((stat) => {
                    return(
                        <li>{stat.name}</li>
                    )
                })
            }
            </ul>
            <ul className={`runeword__sockets runeword__sockets--${props.sockets}`}>
                {props.runes.map((rune) => {
                    return(
                        <Rune name={rune.name} size="50"/>
                    )
                })
            }
            </ul>

        </article>
    )
};

  


  export default RunewordCard;
  