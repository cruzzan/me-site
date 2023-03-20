document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible.expandable')
    M.Collapsible.init(elems, {
        accordion: false
    })
})
