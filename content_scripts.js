'use strict'

chrome.runtime.onMessage.addListener((request, sender, response) => {
    let button = null
    const isPlaying = (document.querySelector('.play-playing') != null)

    if (request === 'pause') {
        button = document.querySelector('.playButton')
    }
    else if (request === 'prev-track') {
        if (isPlaying) {
            button = document.querySelector('.backButton')
        }
        else {
            button = document.querySelector('.prevButton')
        }
    }
    else if (request === 'next-track') {
        if (isPlaying) {
            button = document.querySelector('.skipButton')
        }
        else {
            button = document.querySelector('.nextButton')
        }
    }

    button.dispatchEvent(new Event('mouseenter'))
    setTimeout(() => {
        button.dispatchEvent(new Event('click'))
    }, 1)
})
