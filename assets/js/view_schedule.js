var scheduleTable = new Vue({
    el: '#scheduleTable',
    data: {
        users:[]
    },
    beforeCreate: function(){
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
    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=> {
                this.users = response.data;
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
})

var scheduleModal = new Vue({
        el: "#scheduleModal", 
        data: {
            header: "Schedule Name Here"
        }
})