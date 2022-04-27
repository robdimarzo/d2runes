import React from 'react';
import './RunewordCard.scss';
import Rune from '../Rune/Rune';


function RunewordCard(props) {
// const RunewordCard = (props) => {
    // const runeList = props.runes.map(item => (
    //     <li key={item.id}>{item.name}</li>
    // ));
    // console.log(runewords)
    return (
        <article className="runeword__card">
            <div className="runeword__card--primary">
                <h2 className="runeword__name">{props.name}</h2>
                <ul className="runeword__runes">
                    {props.runes.map((rune) => {
                        return(
                            <li>{rune.name}</li>
                        )
                    })}
                </ul>
                <ul className="runeword__stats">
                    {props.stats.map((stat) => {
                        return(
                            <li>{stat.name}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="runeword__card--secondary">
                <p className="runeword__item">
                    <span className="item__sockets">{props.sockets} Socketed</span>
                    <span className="item__type">{props.item}</span>
                </p>

                <div className={`runeword__sockets runeword__sockets--${props.sockets}`}>
                    {props.runes.map((rune) => {
                        return(
                            <Rune name={rune.name} size="45" />
                        )
                    })
                }
                </div>
            </div>

        </article>
    )
};

  


  export default RunewordCard;
  