document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.w-sidebar')
    const sidebarHeader = document.querySelector('.h-header')
    const contentHeader = document.querySelector('.content .h-header')
    const menuExpandButton = document.createElement('i')

    contentHeader.classList.add('collapsed')
    sidebar.classList.add('collapsed')
    sidebarHeader.classList.add('collapsed')

    menuExpandButton.className = 'fa fa-bars collapsed'
    menuExpandButton.addEventListener('click', function(e) {
        e.preventDefault()

        if (menuExpandButton.classList.contains('fa-close')) {
            menuExpandButton.className = 'fa fa-lg fa-bars collapsed'
        } else {
            menuExpandButton.className = 'fa fa-lg fa-close expanded'
        }

        sidebar.classList.toggle('collapsed')
        sidebarHeader.classList.toggle('collapsed')
        contentHeader.classList.toggle('collapsed')
    })

    contentHeader.prepend(menuExpandButton)

    document
        .querySelector('meta[name=viewport]')
        .setAttribute('content', 'shrink-to-fit=yes')

    sidebar.style = 'height: 100%'
}, false);
