import React from "react";

class Portal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIdx: 0 // start with first item
        }
    }

    updateItem() {
        let nextIdx;
        if (this.state.currentIdx === this.props.items.length - 1) {
            nextIdx = 0;  // Reset to beginning
        } else {
            nextIdx = this.state.currentIdx + 1; // Advance by one
        }
        const timeout = this.props.items[this.state.currentIdx].duration;
        setTimeout(() => this.setState({currentIdx: nextIdx}),timeout);
    }

    componentDidMount() {
        if(this.props.items.length > 0) this.updateItem();
    }

    componentDidUpdate() {
        if(this.props.items.length > 0) this.updateItem();
    }

    render() {

        if(this.props.items.length === 0) return null;

        const currentItem = this.props.items[this.state.currentIdx];
        const portal = this.props.portal;
        const customCSS = JSON.parse(portal.customCSS);
        const styles = Object.assign(
            {
                verticalAlign: "middle",
                textAlign: "center",
            },
            {
                position: "absolute",
                top: `${window.innerHeight * (portal.top / 100)}px`,
                left: `${window.innerWidth * (portal.left / 100)}px`,
                width: `${window.innerWidth * (portal.width / 100)}px`,
                height: `${window.innerHeight * (portal.height / 100)}px`,
            },
            customCSS,
        );
        return (
            <div style={styles}>
                <p>{currentItem.content}</p>
            </div>
        )
        
    }

}

export default Portal;