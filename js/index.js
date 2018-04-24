$(document).ready(function () {
    let scroll = new Scroll({
        element: $("#container"),
        url: "http://pashkoff.net/cgi-bin/colors",
        itemTemplate: $("#itemTemplate"),
        initLimit: 16,
        limit: 6
    })
})
