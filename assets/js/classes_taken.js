var classTable = new Vue({
    el: '#classesTaken_classTable',
    data: {
        courses:[]
    },
    methods: {
        deleteClass(course, semester, year) {
            axios({ method: 'POST', url: 'https://api.schedulr.xyz/drop_taken', headers: {Authorization: "Bearer " + this.$cookies.get("access_token_cookie")}, data: {
                "course_id": course,
                "semester": semester,
                "year": year
              } })
            .then(response => {
            if (response.status == 200)
            {
                console.log("Class dropped!");
                console.log(response);
                //window.location.href = '/classes_taken.html'
            }
            })
            .catch(error => {
                console.log(error);
            })

        },
        nextStep(){
            window.location.href = '/profile.html'
        }
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
            
            axios({ method: 'POST', url: 'https://api.schedulr.xyz/add_taken', headers: {Authorization: "Bearer " + this.$cookies.get("access_token_cookie")}, data: {course_id: course, "semester": "SPRING",
            "year": 2019,
            "status": "COMPLETE",
            "grade": "B+"} })
            .then(response => {
                if (response.status == 200)
                {
                    console.log("Course added!");
                    this.getCourses();
                    window.location.href = '/classes_taken.html';
                }
            })
            .catch(error => {
                console.log(error);
            })

        },
        getCourses() {
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
