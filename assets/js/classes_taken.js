var classTable = new Vue({
    el: '#classesTaken_classTable',
    data: {
        courses:[]
    },
    created: function() {
        axios.get('https://api.schedulr.xyz/my_needed',{
            params: {
                access_token: this.$cookies.get("access_token_cookie")
            }
        })
            .then(response=> {
                this.courses = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        
    }
})

var scheduleModal = new Vue({
        el: "#classesTaken_addClassModal", 
        data: {
        courses:[]
    },
    mounted: function() {
        axios.get('https://api.schedulr.xyz/my_needed')
            .then(response=> {
                this.courses = response.data;
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
})