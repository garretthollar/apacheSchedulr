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

var dropdown = new Vue({
        el: "#classesDropdown", 
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
                this.$nextTick(function(){ $('#selector').selectpicker('refresh'); });
		})
		
    }
})
