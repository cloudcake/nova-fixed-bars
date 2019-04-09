function calibrateWidths() {
    const sidebar = document.querySelector('.w-sidebar')
    const contentHeader = document.querySelector('.content .h-header')
    const content = document.querySelector('.content')

    sidebar.style = 'height: 100%'
    contentHeader.style.marginLeft = 0
    contentHeader.style.width = '100%'
    content.style.marginLeft = `${sidebar.offsetWidth}px`
    content.style.width = '100%'
    content.style.maxWidth = '100%'

    document
        .querySelector('meta[name=viewport]')
        .setAttribute('content', 'width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0')
}

document.addEventListener('DOMContentLoaded', function() {
    calibrateWidths()
}, false);

window.onresize = function(event) {
    calibrateWidths()
};
