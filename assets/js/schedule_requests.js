var scheduleRequest = new Vue({
    el: '#schedule_requests',
    data: {
        maxCredits: "",
        semestersOff: [],
        semester:''
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

    methods: {
        addSemester() {
            this.semestersOff.push(this.semester);
            console.log("YEET");
        },
        nextPage(){
            console.log("Zoomin");
            if(this.maxCredits === ""){
		this.maxCredits = 4;
		} 
            this.$cookies.set("maxCredits", this.maxCredits, "5MIN");
            window.location.href = "/view_results.html";
        },
        backPage(){
            window.location.href="/profile.html"
        }
    }
})
