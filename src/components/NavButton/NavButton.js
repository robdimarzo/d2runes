import React from 'react';
import { A } from 'hookrouter';

import Rune from '../Rune/Rune';
import './NavButton.scss';

function NavButton(props) {
    const href= '/' + props.name.toLowerCase();
    return (
        <A href={href} className={href === window.location.pathname ? 'active' : null}>
            <Rune name={props.name} size="30"/>
            <span>{props.name}</span>
        </A>
    )
  }
  
  export default NavButton;
  