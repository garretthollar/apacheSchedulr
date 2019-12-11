var scheduleTable = new Vue({
    el: '#viewResults_scheduleTable',
    data: {
        semesters:[],
        titles: ["Spring 2020", "Fall 2020", "Spring 2021", "Fall 2021", "Spring 2022", "Fall 2022",
                "Spring 2023", "Fall 2023", "Spring 2024", "Fall 2024", "Spring 2025", "Fall 2025",
                "Spring 2026", "Fall 2026", "Spring 2027", "Fall 2027", "Spring 2028", "Fall 2028"]
    },
    mounted: function() {
        axios({ method: 'POST', url: 'https://api.schedulr.xyz/gen_schedule', headers: {Authorization: "Bearer " + this.$cookies.get("access_token_cookie")}, data: {max_classes: parseInt(this.$cookies.get("maxCredits"),10)} })
            .then(response => {
                if (response.status == 200)
                {
                    this.semesters = response.data;
                    console.log("Success!");
                    console.log(response);
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