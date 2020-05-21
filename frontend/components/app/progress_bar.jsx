import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeRemaining: 0,
            value: 30,
        }
    }

    render() {
        let { timeRemaining, value } = this.state;

        return(
            <div className="progress-bar-main">
                <progress className="progress-bar" min="0" max="100" value={value}></progress>
                <p className="time-remaining">{timeRemaining}</p>
            </div>
        )
    }
}

export default ProgressBar;