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
        getPrograms();
        
    },
    methods: {
        getPrograms() {
            axios.get('https://api.schedulr.xyz/list_programs')
            .then(response=> {
                this.myMajors = response.data;
            })
            .catch(error=> {
                console.log(error);
            })
        },
        addProgram () {
            axios.post('https://api.schedulr.xyz/add_program',{
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("access_token_cookie")
                },
                prog_id: 27
            })
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
        }
    }
})