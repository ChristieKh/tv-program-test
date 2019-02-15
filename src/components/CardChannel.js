import React, {Component} from "react";
import ApiService from '../services/ApiService';
import ItemChannel from './ItemChannel';

export default class CardChannel extends Component {

    apiService = new ApiService();

    state = {
        id: 0,
        channels: {},
        transmission: {},
        loading: true,
        error: false
    };

    constructor() {
        super();
        this.updateChannel();
    }

    updateChannel() {
        const id1 = this.state.channels.id =! null && this.state.channels.id;
        console.info("id1", id1);
        const id = 1;
        this.apiService.getAllChannel()
            .then(channels => this.onChannelLoaded(channels));
        this.apiService.getTeleprogram(id)
            .then(transmission => {
                this.onTransmitionLoaded(transmission)
            })
    }

    onChannelLoaded(channels) {
        this.setState({
            channels,
            loading: false
        })
    };

    onTransmitionLoaded(transmission) {
        this.setState({
            channels: transmission
        })
    };


    render() {
        const { transmission, channels, loading} = this.state;
        const channelsForCards = !loading && channels.map((channel, transmission, index) => {
            return (
                <div
                    className="item"
                    id={index}
                    key={index}>
                    <ItemChannel channel={channel} transmission={transmission} index={index}/>
                </div>
            )
        });

        return (
            <div className="workers">
                {channelsForCards}
            </div>
        )

    }
}
