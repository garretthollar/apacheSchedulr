var home = new Vue({
    el: '#mainpage',
    data: {
    },
    beforeCreate: function() {
        if(this.$cookies.isKey("access_token_cookie"))
        {
            axios.get('https://api.schedulr.xyz/my_taken',{
            headers: {
                Authorization: "Bearer " + this.$cookies.get("access_token_cookie")
            }
            })
            .then(response=> {
                if (response.status != 200)
                    window.location.href = '/index.html'
            })
            .catch(error => {
                window.location.href = '/index.html'
            })
        
        }
        else
            window.location.href = '/index.html'
        
    },
})