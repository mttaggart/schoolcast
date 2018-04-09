import React from "react";
import { Redirect } from "react-router-dom";
import FeedForm from "./FeedForm";
import FeedListFeed from "./FeedListItem";

class Feeds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editFeed: null
        }
    }

    componentDidMount() {
        this.props.getFeeds(this.props.token);
    }

    deleteHandler(id) {
        const deleteConfirm = window.confirm("Are you sure you want to delete this feed?");
        if(deleteConfirm) {
            this.props.deleteFeed(this.props.token, id);
        }
    }

    editHandler(feed) {
        this.setState({editFeed: feed});
    }

    updateHandler(token, feed) {
        this.props.updateFeed(this.props.token, feed);
        this.setState({editFeed: null});
    }

    render() {

        if(!this.props.authenticated) {
            return (
                <Redirect to="/login" from="/admin/feeds" />
            );
        }

        return (
            <div>
                <h3>Feeds</h3>    
                <ul>
                    {
                        this.props.feeds.map( (feed, idx) => {
                            return (
                                <FeedListFeed 
                                    key={idx}
                                    feed={feed}
                                    editHandler={this.editHandler.bind(this)}
                                    deleteHandler={this.deleteHandler.bind(this)}
                                />
                            );
                        })
                    }
                </ul> 
                <FeedForm
                    title="Add Feed" 
                    submitHandler={this.props.addFeed} 
                    token={this.props.token} 
                />
                <FeedForm 
                    title="Edit Feed"
                    submitHandler={this.updateHandler.bind(this)}
                    token={this.props.token}
                    feed={this.state.editFeed}
                />
            </div>
        );
    }
}

    
    

export default Feeds;