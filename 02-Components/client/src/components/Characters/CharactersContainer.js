import React, { Component } from "react";

import fetcher from "../../fetcher";
import Characters from "./Characters";
import Details from "./Details";

export default class CharactersContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            details: {
                id: null,
                url: "",
                name: "",
                bio: ""
            }
        };
    }

    fetchImages = () => {
        fetcher.get("/roster", data => {
            this.setState({
                images: data.map(image => ({
                    id: image.id,
                    url: image.url
                }))
            });
        });
    };

    fetchCharacter = id => {
        fetcher.get(`/character/${id}`, data => {
            let details = {
                id: data.id,
                url: data.url,
                name: data.name,
                bio: data.bio
            };

            this.setState({ details });
        });
    };

    componentDidMount = () => {
        this.fetchImages();
        this.fetchCharacter(0);
    };

    render = () => (
        <div>
            <Characters
                images={this.state.images}
                select={this.fetchCharacter}
            />
            <Details {...this.state.details} />
        </div>
    );
}
