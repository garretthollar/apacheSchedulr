var profile = new Vue({
    el: '#profile',
    data: {
        form: {
            FirstName:'',
        },
        newMajor: '',
        majors: [],
        myMajors: []
    },
    beforeCreate: function(){
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
    mounted: function() {
        axios.get('https://api.schedulr.xyz/list_programs')
            .then(response=> {
                this.majors = response.data;
            })
            .catch(error=> {
                console.log(error);
            })

        axios.get('https://api.schedulr.xyz/my_programs',{
            headers: {
                Authorization: "Bearer " + this.$cookies.get("access_token_cookie")
            }
        })
            .then(response=> {
                this.myMajors = response.data;
            })
            .catch(error=> {
                console.log(error);
            })
        
    },
    methods: {
        getPrograms() {
            axios.get('https://api.schedulr.xyz/my_programs',{
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("access_token_cookie")
                }
            })
            .then(response=> {
                this.myMajors = response.data;
            })
            .catch(error=> {
                console.log(error);
            })
        },
        addProgram () {
            // Find the major in the list
            var course;
            for (major in this.majors){
                if (this.majors[major].name === this.newMajor){
                    course = this.majors[major].prog_id;
                    break;
                }
            }
            
            axios({ method: 'POST', url: 'https://api.schedulr.xyz/add_program', headers: {Authorization: "Bearer " + this.$cookies.get("access_token_cookie")}, data: {prog_id: course} })
            .then(response => {
                if (response.status == 200)
                {
                    console.log("Program added!");
                }
            })
            .catch(error => {
                console.log(error);
                console.log(this.$cookies.get("access_token_cookie"));
            })
            this.getPrograms();

        },
        deleteProgram(course){
            console.log(course.prog_id);
            axios({ method: 'POST', url: 'https://api.schedulr.xyz/drop_program', headers: {Authorization: "Bearer " + this.$cookies.get("access_token_cookie")}, data: {prog_id: course.prog_id} })
            .then(response => {
                if (response.status == 200)
                {
                    console.log("Program dropped!");
                    var index = this.myMajors.indexOf(course);
                    this.myMajors.splice(index);
                }
            })
            .catch(error => {
                console.log(error);
            })

        },
        nextPage(){
            window.location.href = '/schedule_requests';
        },
    }
})