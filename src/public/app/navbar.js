let navlinks=$('.navbar-nav .nav-link ')

navlinks.click((ev)=>{
    let componetsURl=`/components/${$(ev.target).attr("data-component")}.html`
    $('#content').load(componetsURl)
})