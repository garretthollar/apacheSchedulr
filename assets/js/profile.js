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

        }
    }
})