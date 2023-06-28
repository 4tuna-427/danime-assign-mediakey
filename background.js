'use strict'

chrome.commands.onCommand.addListener(async (command) => {
    const tabs = await chrome.tabs.query({})
    tabs.forEach(tab => {
        if (new RegExp('https://animestore.docomo.ne.jp/animestore/sc_d_pc?.*').exec(tab. url)) {
            chrome.tabs.sendMessage(tab.id, command)
        }
    })
})
