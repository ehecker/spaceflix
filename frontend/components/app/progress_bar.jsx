import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeRemaining: 0,
            value: 0,
        }

        this.maxTime;
        
        this.updateProgressBar = this.updateProgressBar.bind(this);
    }

    componentDidMount() {
        const video = document.getElementsByTagName("video")[0];
        video.addEventListener("timeupdate", this.updateProgressBar);
    }

    componentWillUnmount() {
        const video = document.getElementsByTagName("video")[0];
        video.removeEventListener("timeupdate", this.updateProgressBar);
    }

    clockify(baseSeconds) {
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        while (baseSeconds >= 3600) {
            hours++;
            baseSeconds = baseSeconds - 3600;
        }

        while (baseSeconds >= 60) {
            minutes++;
            baseSeconds = baseSeconds - 60;
        }

        while (baseSeconds > 0) {
            seconds++;
            baseSeconds = baseSeconds - 1;
        }

        hours > 0 ? hours.toString() + ":" : hours = "";
        minutes < 10 ? minutes = `0${minutes}`: minutes = minutes.toString();
        seconds < 10 ? seconds = `0${seconds}`: seconds = seconds.toString();

        return `${hours}${minutes}:${seconds}`;
    }

    updateProgressBar() {
        let video = document.getElementsByTagName("video")[0];
        let duration = Math.floor(video.duration)
        let currentTime = Math.floor(video.currentTime);
        
        this.maxTime = duration;

        const timeRemaining = this.clockify(duration - currentTime);
        const value = duration - (duration - currentTime);

        this.setState({
            timeRemaining,
            value
        })
    }

    render() {
        const { timeRemaining, value } = this.state;

        return(
            <div className="progress-bar-main">
                <progress className="progress-bar" min="0" max={this.maxTime} value={value}></progress>
                <p className="time-remaining">{timeRemaining}</p>
            </div>
        )
    }
}

export default ProgressBar;