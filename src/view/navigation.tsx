import { React, ReactDOM, _} from '../global';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

interface IProps {
    onNavigate: (url: string) => void, 
    style
}

export class Navigation extends React.Component<IProps> {
    render() {
        return (
            <Navbar style={this.props.style}>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="https://github.com/Olian04">Olian04</a>
                </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                <NavItem eventKey={1} href="https://olian04.github.io/RockPaperTracer/">Rock Paper Trace</NavItem>
                <NavItem eventKey={2} href="https://olian04.github.io/Turing.js/">Turing.js</NavItem>
                <NavItem eventKey={3} href="https://pypi.python.org/pypi/peekiter" >PyPeekIter</NavItem>
                <NavItem eventKey={4} href="https://chrome.google.com/webstore/detail/imggenie/ledidodlffonochbejoldpombnlhfdhh" >ImgGenie</NavItem>
                </Nav>
          </Navbar>
        );
    }
}
