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
        axios.get('https://api.schedulr.xyz/list_courses', {
            headers: {
                Authorization: "Bearer " + this.$cookies.get("access_token_cookie")
            }
        })
            .then(response=> {
                this.courses = response.data;

		list = []
		
		names = this.courses.map(a => a.name)
		codes = this.courses.map(a => a.code)

		for (i = 0;i < codes.length; i++){
		    list[i] = names[i] +" ("+ codes[i] + ")";
		}
		
		autocomplete(document.getElementById("myInput"), list);		
		
            })
            .catch(error => {
                console.log(error);
            })
    }
})
