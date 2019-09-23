axios.get('http://api.github.com/users/otaviomelo12')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })

