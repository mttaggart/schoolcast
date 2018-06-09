import React from "react";
import { Redirect, Link, Route } from "react-router-dom";
import { Card, Elevation } from "@blueprintjs/core";
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

        const styles = {
            classContainer: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "5px"
            },
            displayCard: {
                textAlign: "center"
            }
        }

        if(!this.props.authenticated) {
            return (
                <Redirect to="/" from="/displays" />
            );
        }

        return (
            <div>
                <h2>Displays</h2>
                <div style={styles.classContainer}>
                {
                    this.props.displays ?
                    this.props.displays.map( (display, idx) => {
                        return (
                            <Card 
                                elevation={Elevation.ONE} 
                                interactive={true}
                                key={idx}
                                style={styles.displayCard}
                            >
                                <Link to={`${this.props.match.path}/${display.id}`}>
                                    {display.name}
                                </Link>
                            </Card>
                        )
                    })
                    : null
                }
                </div>
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