import plugin from 'tailwindcss/plugin'
import { button } from './components/button'
import { Layout } from './Layout/Layout'
import { accrodian } from './components/arcrodian';
import { loading } from './components/loading';
import { slider } from './components/slider';
import { text } from './components/text';
import { blob } from './components/blob';
import { parallax } from './components/parallax';
import { snap } from './components/snap';
import { menu } from './components/menu';
import { input } from './components/input';
import {masonry} from './Layout/masonry'
import { masonryx } from './Layout/masonryx';
import { alearts } from './components/aleart';


import { dose } from './components/table';

const components = Object.assign({}, 
    button, 
    Layout , 
    accrodian , 
    loading , 
    slider,
    text,
    blob,
    parallax,
    snap,
    menu,
    input,
    masonry,
    masonryx,
    alearts
);

module.exports = plugin(
    function({addComponents , matchUtilities}){
        addComponents(components)
        matchUtilities(dose);
    }
)