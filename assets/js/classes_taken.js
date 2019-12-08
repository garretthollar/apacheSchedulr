var classTable = new Vue({
    el: '#classesTaken_classTable',
    data: {
        courses:[]
    },
    created: function() {
        axios.get('https://api.schedulr.xyz/my_taken',{
            headers: {
                Authorization: "Bearer " + this.$cookies.get("access_token_cookie")
            }
        })
            .then(response=> {
                this.courses = response.data;
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        
    }
})

var scheduleModal = new Vue({
        el: "#classesTaken_addClassModal", 
        data: {
        courses:[],
        newCourse:''
    },
    methods: {
        printHi() {
            console.log("Hi");
        }
    },
    mounted: function() {
        axios.get('https://api.schedulr.xyz/my_needed', {
            headers: {
                Authorization: "Bearer " + this.$cookies.get("access_token_cookie")
            }
        })
            .then(response=> {
                this.courses = response.data;
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
})