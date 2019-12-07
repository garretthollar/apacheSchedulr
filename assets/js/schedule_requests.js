var scheduleRequest = new Vue({
    el: '#schedule_requests',
    data: {
        maxCredits: "",
        semestersOff: [],
        semester:''
    },
    beforeCreate: function() {
        console.log(this.$cookies.isKey("jwt"));
        axios.get('http://josh.danilafe.com:23450/myinfo')
            .then(response => {
                console.log(response)
                if (response.data.ID == 0){
                    console.log("Not logged in, returning to index");
                    window.location.href = "/index.html";
                }
            })
            .catch(function(error){
                console.log("didn't work");
                console.log(error);
            });
    },

    methods: {
        addSemester () {
            this.semestersOff.push(this.semester);
            console.log("YEET");
        },
    }
})