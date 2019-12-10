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
        addClass() {
            // Find the major in the list
            var course;
            for (thing in this.courses){
                if (this.courses[thing].name === this.newCourse){
                    course = this.courses[thing].course_id;
                    console.log("Found course + ", course);
                    break;
                }
            }
            
            axios({ method: 'POST', url: 'https://api.schedulr.xyz/add_taken', headers: {Authorization: "Bearer " + this.$cookies.get("access_token_cookie")}, data: {course_id: course} })
            .then(response => {
                if (response.status == 200)
                {
                    console.log("Course added!");
                }
            })
            .catch(error => {
                console.log(error);
                console.log(this.$cookies.get("access_token_cookie"));
            })

        }, 
        getCourses() {

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
