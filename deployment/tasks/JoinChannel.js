const _ = require('lodash');
const cfg = require('../../config');
const logger = cfg.log4js.getLogger(__filename);
const channelManager = require('../../channel-manager');

class JoinChannel {

    constructor(fabricStarterClient, eventBus, socketServer) {
        this.fabricStarterClient = fabricStarterClient;
        this.socketServer = socketServer;
    }

    async run(config) {
        let channel = _.get(config, 'channel');

        logger.debug("Starting task JoinChannel for: ", config);

        // this.fabricStarterClient.joinChannel(channel);
        await channelManager.joinChannel(channel, this.fabricStarterClient, this.socketServer);

    }
}

module.exports = JoinChannel;