import React from 'react';
import { useTitle } from 'hookrouter'
import Page from '../../components/Page/Page';
import Rune from '../../components/Rune/Rune';


function Runewords(props) {
    useTitle(props.rune);
    return (
        <Page title={props.rune}>
            <Rune name={props.rune} size="200"/>
        </Page>
    )
}

export default Runewords 