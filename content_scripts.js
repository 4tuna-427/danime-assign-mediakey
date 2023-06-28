'use strict'

chrome.runtime.onMessage.addListener((request, sender, response) => {
    let button = null
    const isPlaying = (document.querySelector('.play-playing') != null)

    if (request === 'pause') {  // デバイスの一時停止ボタン押下
        // 再生・一時停止ボタンを押下
        button = document.querySelector('.playButton')
    }
    else if (request === 'prev-track') {  // デバイスの巻き戻し（＜）ボタン押下
        if (isPlaying) {
            // 動画が再生中なら、30秒戻るボタンを押下
            button = document.querySelector('.backButton')
        }
        else {
            // 動画が停止中なら、先頭に戻るボタンを押下
            button = document.querySelector('.prevButton')
        }
    }
    else if (request === 'next-track') {  // デバイスの早送り（＞）ボタン押下
        if (isPlaying) {
            // 動画が再生中なら、30秒進むボタンを押下
            button = document.querySelector('.skipButton')
        }
        else {
            // 動画が停止中なら、次の話に進むボタンを押下
            button = document.querySelector('.nextButton')
        }
    }

    button.dispatchEvent(new Event('mouseenter'))
    setTimeout(() => {
        button.dispatchEvent(new Event('click'))
    }, 1)
})
