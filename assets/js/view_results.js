var scheduleTable = new Vue({
    el: '#viewResults_scheduleTable',
    data: {
        semesters:[]
    },
    mounted: function() {
        axios.get('https://api.schedulr.xyz/gen_schedule', {
            headers: {
                Authorization: "Bearer " + this.$cookies.get("access_token_cookie")
            },
            max_classes: 4
        })
            .then(response=> {
                this.semesters = response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
})

var scheduleModal = new Vue({
        el: "#viewResults_scheduleModal", 
        data: {
            header: "Schedule Name Here"
        }
})