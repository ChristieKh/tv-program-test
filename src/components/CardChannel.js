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

    componentDidMount(){
        this.updateChannel();
    }

    updateChannel() {
         this.apiService.getAllChannel()
            .then(channels => this.onChannelLoaded(channels))
          //  .then(res1 => {console.info(res1)})
            .then(res => this.apiService.getTeleprogram()
            .then(transmission => {
              // console.info("trans", transmission);
                this.onTransmitionLoaded(transmission)
            }))
    }

    onChannelLoaded(channels) {
        this.setState({
            channels,
            loading: false
        })
    };

    onTransmitionLoaded(transmission) {
        this.setState({
            // channels: {
            //     ...this.state.channels,
            //     transmission,
            // },
            transmission,
            loading: false
        })
    };


    render() {
        const { transmission, channels, loading} = this.state;
        console.info("channels", channels);
        console.info("transmission", transmission);
        const channelsForCards = !loading && channels.map((channel, transmission) => {
            return (
                <div
                    className="item"
                    id={channel.id}
                    key={channel.id}>
                    <ItemChannel channel={channel} transmission={transmission} index={channel.id}/>
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
