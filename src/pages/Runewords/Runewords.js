import React from 'react';
import { useTitle } from 'hookrouter'
import runewords from './../../api/runewords.api';

import Page from '../../components/Page/Page';
import Rune from '../../components/Rune/Rune';
import RunewordCard from '../../components/RunewordCard/RunewordCard';


function Runewords(props) {
    useTitle(props.rune);
    return (
        <Page title={props.rune}>
            <Rune name={props.rune} size="200"/>
            {runewords.map(runeword => (
                <RunewordCard 
                    name={runeword.name} 
                    runes={runeword.runes} 
                    key={runeword}
                />
                // <Runeword name={props.rune}/>
            ))}
        </Page>
    )
}

export default Runewords 