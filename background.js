'use strict'

let lastActiveTab = null
const targetUrl = 'https://animestore.docomo.ne.jp/animestore/sc_d_pc?.*'

chrome.windows.onCreated.addListener(async () => {
    const windowTabs = await chrome.tabs.query({ active: true, currentWindow: true })
    let tab = (windowTabs.length === 1) ? windowTabs[0] : null
    if (tab !== null) {
        if (new RegExp(targetUrl).exec(tab.url)) {
            lastActiveTab = tab
        }
    }
})

chrome.windows.onFocusChanged.addListener(async () => {
    const windowTabs = await chrome.tabs.query({ active: true, currentWindow: true })
    let tab = (windowTabs.length === 1) ? windowTabs[0] : null
    if (tab !== null) {
        if (new RegExp(targetUrl).exec(tab.url)) {
            lastActiveTab = tab
        }
    }
})

chrome.tabs.onUpdated.addListener(async (tabid, changeInfo, tab) => {
    if (new RegExp(targetUrl).exec(tab.url)) {
        lastActiveTab = tab
    }
})

chrome.tabs.onRemoved.addListener(async () => {
    const tabs = await chrome.tabs.query({})
    tabs.forEach(tab => {
        if (new RegExp(targetUrl).exec(tab. url)) {
            lastActiveTab = tab
        }
    })
})

chrome.commands.onCommand.addListener(async (command) => {
    chrome.tabs.sendMessage(lastActiveTab.id, command)
})
