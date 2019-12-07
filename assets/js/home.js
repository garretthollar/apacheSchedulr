var home = new Vue({
    el: '#home',
    data: {
    },
    created: function() {
        console.log("Before");
        axios.get('http://josh.danilafe.com:23450/myinfo')
            .then(response => {
                console.log(response)
                if (response.data.ID == 0){
                    window.location.hfef = "/index.html";
                }
            })
            .catch(function(error){
                console.log("didn't work");
                console.log(error);
            });
        
        console.log("After");
    },
})