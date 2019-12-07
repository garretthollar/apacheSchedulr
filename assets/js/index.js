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
        axios.get('josh.danilafe.com:23450/myinfo')
            .then(response => {
                info = response;
                this.errors.push(response);
                console.log(info);
            })
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
            axios.post(`/login`,{
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
                        window.location.href = "/home";
                    
                }
            })
        },
        
    },
    
        
})
