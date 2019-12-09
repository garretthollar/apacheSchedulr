var profile = new Vue({
    el: '#profile',
    data: {
        form: {
            FirstName:'',
        },
        newMajor: '',
        majors: []
    },
    mounted: function() {
        axios.get('http://josh.danilafe.com:23450/myinfo')
            .then(response=> {
                console.log(response);
                this.form.FirstName = response.data.FirstName;
                this.form.LastName = response.data.LastName;
                this.form.Email = response.data.Username;
            })
            .catch(error => {
                console.log(error);
            })
        axios.get('https://api.schedulr.xyz/list_programs')
            .then(response=> {
                this.majors = response.data;
            })
            .catch(error=> {
                console.log(error);
            })
        
    }
})