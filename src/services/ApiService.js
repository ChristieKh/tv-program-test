export default class SwapiServise {
    _baseApi = 'http://epg.domru.ru';


    async getResource(url) {
        const res = await fetch(`${this._baseApi}${url}`);
        return await res.json();

    };

    async getAllChannel() {
        const body = await this.getResource(`/channel/list?domain=perm`);
        return await body.map(this._transformChannel);
    }

    async getTeleprogram() {

        const allChannel = await this.getAllChannel();
        const idChannel = allChannel
            .map(channel => {
                return channel.id
            })
            .sort((a, b) => {
                return a - b
            });

        let xvidQueryArray, xvid = "";
        for (var key in idChannel) {
            xvidQueryArray = "xvid[" + key + "]=" + idChannel[key];
            xvid += xvidQueryArray + "&"
        }
        xvid = xvid.substr(0, xvid.length - 1);

        const body = await this.getResource(`/program/list?domain=perm&date_from=2019-02-14&date_to=2019-02-15&${xvid}`);
        return body;
    }


    _transformChannel(channel) {
        return {
            nameChannel: channel.title,
            id: channel.xvid
        }
    }

    _transformChannelForProgramm(channel) {
        return {
            nameTransmission: channel.title,
            dateStart: channel.start
        }
    }
}
