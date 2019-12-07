var home = new Vue({
    el: '#home',
    data: {
    },
    beforeCreate: function() {
        console.log(this.$cookies.isKey("jwt"));
        console.log("Before");
        axios.get('http://josh.danilafe.com:23450/myinfo')
            .then(response => {
                console.log(response)
                if (response.data.ID == 0){
                    console.log("Not logged in, returning to index");
                    window.location.href = "/index.html";
                }
            })
            .catch(function(error){
                console.log("didn't work");
                console.log(error);
            });
        
        console.log("After");
    },
})