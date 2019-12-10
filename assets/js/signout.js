var signout = new Vue({
    el: '#signout',
    mounted: function() {
        if (this.$cookies.isKey("access_token_cookie"))
            this.$cookies.remove("access_token_cookie")
        window.location.href = '/index.html'
    },
})