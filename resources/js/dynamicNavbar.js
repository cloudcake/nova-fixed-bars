window.addEventListener('DOMContentLoaded', function() {
    calibrateWidths()
})

window.addEventListener('load', function() {
    calibrateWidths()
})

window.addEventListener('resize', function() {
    calibrateWidths()
})

function calibrateWidths() {
    document
        .querySelector('meta[name=viewport]')
        .setAttribute(
            'content',
            'width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0'
        )

    const sidebar = document.querySelector('.w-sidebar')
    const contentHeader = document.querySelector('.content .h-header')

    contentHeader.style.left = sidebar.offsetWidth + 'px'
    contentHeader.style.width = '100%'
}
