import React, { Component } from "react";
import fetcher from "../../fetcher";
import SliderButton from "./SliderButton";

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            url: null
        };
    }

    fetchEpisode = id => {
        fetcher.get(`/episodePreview/${id}`, data =>
            this.setState({
                id: data.id,
                url: data.url
            })
        );
    };

    componentDidMount = () => this.fetchEpisode(0);

    render = () => (
        <section id="slider">
            <SliderButton
                src="/left.png"
                alt="previous"
                select={this.fetchEpisode}
                id={this.state.id - 1}
            />
            <img
                className="Slider-episode"
                src={this.state.url}
                alt="episode"
            />
            <SliderButton
                src="/right.png"
                alt="next"
                select={this.fetchEpisode}
                id={this.state.id + 1}
            />
        </section>
    );
}
