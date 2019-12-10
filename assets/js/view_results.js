var scheduleTable = new Vue({
    el: '#viewResults_scheduleTable',
    data: {
        semesters:[]
    },
    mounted: function() {
        axios({ method: 'POST', url: 'https://api.schedulr.xyz/gen_schedule', headers: {Authorization: "Bearer " + this.$cookies.get("access_token_cookie")}, data: {max_classes: this.$cookies.get("maxCredits")} })
            .then(response => {
                if (response.status == 200)
                {
                    response.data = semesters;
                }
            })
            .catch(error => {
                console.log(error);
            })
    },
})

var scheduleModal = new Vue({
        el: "#viewResults_scheduleModal", 
        data: {
            header: "Schedule Name Here"
        }
})