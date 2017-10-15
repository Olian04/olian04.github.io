import { React, ReactDOM, _} from './global';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Navigation } from './view/navigation';

let targetUrl = 'https://olian04.github.io/RockPaperTracer/';

ReactDOM.render(
    (
        <div>
            <Navigation onNavigate={url => {
                targetUrl = url;
            }} style={{
                padding: 0,
                margin: 0
            }} />
            <iframe src={targetUrl} style={{
                position: 'relative',
                left: 0,
                top: 0,
                padding: 0,
                margin: 0,
                border: 'none',
                width: '99.5vw',
                height: '100vh' 
            }}></iframe>
        </div>
    ),
    document.getElementById('root')
);