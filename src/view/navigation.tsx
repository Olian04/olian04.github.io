import { React, ReactDOM, _} from '../global';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

interface IProps {
    target: {
        url?: string
    },
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
                <NavItem eventKey={1} href="#">Rock Paper Trace</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                </Nav>
          </Navbar>
        );
    }
}
