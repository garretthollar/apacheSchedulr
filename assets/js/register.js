var register = new Vue({
    el: '#register-form',
    data: {
        form: {
            email:'',
            password:'',
            name:''
        },
        errors:[]
    },
    methods: {
        registerSubmit() {
            this.errors = [];
            let self = this;
            axios.port('https://api.schedulr.xyz/signup',{
                email: this.form.email,
                password: this.form.password,
                name: this.form.name
            })
            .then(response => {
                if (response.status == 200)
                {
                    console.log("Account created!");
                    this.$cookies.set("jwt",response.data.access_token, "30MIN");
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