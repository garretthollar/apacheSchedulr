var indexLogin = new Vue({
    el: '#index_loginForm',
    data: {
        form: {
            email:'',
            password:''
        },
        errors:[],
    },
    created: function() {
        console.log("Before");
        if (this.$cookies.isKey("jwt")) {
            console.log("Cookie exists");
        }

        // axios.get('http://josh.danilafe.com:23450/myinfo')
        //     .then(response => {
        //         console.log(response)
        //         if (response.data.ID != 0){
        //             console.log("Already logged in");
        //             window.location.hfef = "/home.html";
        //         }
        //     })
        //     .catch(function(error){
        //         console.log("didn't work");
        //         console.log(error);
        //     });
        
        console.log("After");
    },
    
    methods: {
        getHomePage() {
             axios.get('/home')
                 .then(response=> {
                 info = response;
                 console.log(info);
             })
        },
        
        loginSubmit() {
            this.errors = [];
            axios.post(`https://api.schedulr.xyz/login`,{
                email: this.form.email,
                password: this.form.password
            })
            .then(response => {
                console.log(response);
                if (response.status == 401)
                {
                    this.errors.push("Username or Password are incorrect");
                }
                else if (response.status == 200)
                {
                    console.log("we're in!");
                    this.$cookies.set(response.data.access_token,"cookie!", "30MIN");
                    console.log("cookie has bene set");

                        window.location.href = "/home.html";
                    
                }
            })
        },
        
    },
    
        
})
