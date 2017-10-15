import { React, ReactDOM, _} from './global';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Navigation } from './view/navigation';

let target: {
    url?: string
} = {};

ReactDOM.render(
    (
        <div>
            <Navigation target={target} style={{
                padding: 0,
                margin: 0
            }} />
            <iframe src='https://github.com/Olian04/olian04.github.io' ></iframe>
        </div>
    ),
    document.getElementById('root')
);