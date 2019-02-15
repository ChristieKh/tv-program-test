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

    async getTeleprogram(id) {
        const body = await this.getResource(`/program/list?domain=perm&date_from=2019-02-14&date_to=2019-02-15&xvid[0]=1&xvid[1]=2&xvid[2]=479`);
        console.info("body ", body[id]);
        return await body[id].map(this._transformChannelForProgramm);
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
            id: channel.xvid,
            dateStart: channel.start
        }
    }

}
