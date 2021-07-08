$(() => {

    $('#navbar').load('./components/navbar.html',loginIfNeeded() )
    $('#footer').load('./components/footer.html')
    $('#content').load('./components/all-posts.html')//hthis contains its own script too

})


function loginIfNeeded() {

    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    
    if (!currentUser) {
        $.post('/api/users', {}, (user) => {
            if (user) {
                console.log("registered current user as", user.username);
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                console.log(currentUser)
                console.log($('#username'))
                $('#username').text(currentUser.username)
               }
        })
    }
    else {
        console.log("resuming session as ", currentUser.username);
       
        console.log($('#username'))
        
        $('#username').text(currentUser.username)

    }
}