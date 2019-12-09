var register = new Vue({
    el: '#register-form',
    data: {
        form: {
            email:'',
            password:'',
            name:'',
            program:''
        },
        errors:[],
        programs: []
    },
    created: function() {
        axios.get('https://api.schedulr.xyz/list_programs')
            .then(response => {
                this.programs = response.data;
            })

    },
    methods: {
        registerSubmit() {
            this.errors = [];
            let self = this;
            axios.post('https://api.schedulr.xyz/signup',{
                email: this.form.email,
                password: this.form.password,
                name: this.form.name
            })
            .then(response => {
                if (response.status == 200)
                {
                    console.log("Account created!");
                    this.$cookies.set("access_token_cookie",response.data.access_token, "30MIN");
                    console.log("cookie has bene set");
                    this.errors.push("Account created! Redirecting now.");

                    setTimeout(() => {window.location.href = "/index.html";}, 2000);
                }
            })
            .catch(function(error){
                console.log("didn't work");
                console.log(error);
                if (error.response.status == 409)
                {
                    self.errors.push("Account already exists!");
                }
            });
        }
    }
})