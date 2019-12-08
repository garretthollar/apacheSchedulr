var classTable = new Vue({
    el: '#classesTaken_classTable',
    data: {
        courses:[]
    },
    created: function() {
        axios.get('https://api.schedulr.xyz/my_needed')
            .then(response=> {
                this.courses = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        
    }
})

var scheduleModal = new Vue({
        el: "#classesTaken_addClassModal", 
        data: {
        classes:[]
    },
    mounted: function() {
        axios.get('https://api.schedulr.xyz/my_needed')
            .then(response=> {
                this.classes = response.data;
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
})