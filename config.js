module.exports = {
    // CONFIG
    // please leave the commas, they are for debug purposes
    // please read all commented (//) lines.
    // comments will be above each config setting to explain the settings
    // do not ignore/delete these!

    // if dev mode should be enabled.
    devMode: false,

    // the numbers after localhost: in the site URL.
    // should be left to default unless you are a dev needing 42001 for some reason.
    websitePort: 42001,

    // the ID of the channel that the bot runs /daily and /balance in. (dms dont work)
    // to get a channel ID, enable dev mode & right click the channel.
    grindChannelId: '',
 
    // whether to automatically run the /daily and /weekly commands.
    autoDaily: true,
    autoWeekly: true,
    
    // a list of channels/servers to blacklist.
    // if a server id/channel id is here, the bot will never join battles in that channel.
    blacklist: {
        
        // a list of server IDs the bot will never join battles in
        servers: [
            'server id 1',
            'server id 2'
        ],
        
        // a list of channel IDs the bot will never join battles in
        channels: [
            'channel id 1',
            'channel id 2'
        ]
    },

    // a large delay manager.
    delays: {

        // how fast to log into the bot accounts.
        // follow discord ratelimits for this one.
        login: 1500,


    },

    // a break manager.
    breaks: {

        // the settings for a short break
        short: {
            minLength: 20000,
            maxLength: 50000,
            frequency: 0.0025
        },

        // the settings for a long break
        long: {
            minLength: 100000,
            maxLength: 125000,
            frequency: 0.0001
        }
    }
}
