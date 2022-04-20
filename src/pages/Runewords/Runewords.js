import React from 'react';
import { useTitle } from 'hookrouter'
import './Runewords.scss';

import runewords from './../../api/runewords.api';

import Page from '../../components/Page/Page';
import Rune from '../../components/Rune/Rune';
import RunewordCard from '../../components/RunewordCard/RunewordCard';


function Runewords(props) {
    useTitle(props.rune);
    return (
        <Page title={props.rune}>
            <Rune name={props.rune} size="200"/>
            <div className="page__cards">
                {runewords.map(runeword => (
                    <RunewordCard 
                        key={runeword.name}
                        item={runeword.item}
                        name={runeword.name} 
                        runes={runeword.runes} 
                        stats={runeword.stats}
                        sockets={runeword.sockets}
                    />
                ))}
            </div>
        </Page>
    )
}

export default Runewords 