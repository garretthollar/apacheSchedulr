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
        }
    }
})