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
        else{
            this.$cookies.set("jwt","cookie!", "30MIN")
            console.log("Cookie made!");
        }

        axios.get('http://josh.danilafe.com:23450/myinfo')
            .then(response => {
                console.log(response)
                if (response.data.ID != 0){
                    console.log("Already logged in");
                    window.location.hfef = "/home.html";
                }
            })
            .catch(function(error){
                console.log("didn't work");
                console.log(error);
            });
        
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
            axios.post(`http://josh.danilafe.com:23450/login`,{
                Username: this.form.email,
                Password: this.form.password,
                Remember_Me: 'true'
            })
            .then(response => {
                console.log(response);
                if (response.data.User == 0)
                {
                    this.errors.push("Username or Password are incorrect");
                    console.log("You suck");
                }
                else
                {
                    console.log("we're in!");
                        window.location.href = "/home.html";
                    
                }
            })
        },
        
    },
    
        
})
