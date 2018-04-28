import React from "react";
import { Redirect, Link, Route } from "react-router-dom";
import Display from "./Display";

class DisplaysView extends React.Component {

    componentDidMount() {
        if(this.props.token) {
            this.props.getDisplays(this.props.token);
            this.props.getPortals(this.props.token);
            this.props.getItems(this.props.token);
        }
    }

    render() {
        console.log(this.props.displays);

        if(!this.props.authenticated) {
            return (
                <Redirect to="/" from="/displays" />
            );
        }

        return (
            <div>
                <h2>Displays</h2>
                <ul>
                {
                    this.props.displays ?
                    this.props.displays.map( (display, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={`${this.props.match.path}/${display.id}`}>
                                    {display.name}
                                </Link>
                            </li>
                        )
                    })
                    : null
                }
                </ul>
                <Route 
                    path={`${this.props.match.path}/:displayId`} 
                    render={ props =>
                        <Display  
                            {...props}
                            token={this.props.token}
                            items={this.props.items}
                            displays={this.props.displays}
                        />
                    }
                />
            </div>
        )
    }
}

export default DisplaysView;