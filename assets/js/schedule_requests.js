var scheduleRequest = new Vue({
    el: '#schedule_requests',
    data: {
        maxCredits: "",
        semestersOff: [],
        semester:''
    },
    beforeCreate: function() {
        
    },

    methods: {
        addSemester() {
            this.semestersOff.push(this.semester);
            console.log("YEET");
        },
        nextPage(){
            console.log("Zoomin");
            this.$cookies.set("maxCredits", this.maxCredits, "5MIN");
            window.location.href = "/view_results.html";
        }
    }
})