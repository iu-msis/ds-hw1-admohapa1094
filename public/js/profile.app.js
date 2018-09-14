var profileApp = new Vue ({
    el: '#profile' ,
    data: {
      user: {
        "nameFirst": '',
        "nameLast": '',
        "birthdate" : '',
        "age": '',
        "email": '',
        "picture": ''
      }
    },
    computed: {

    },
    methods: {
      pretty_date: function (d) {
        return moment(d).format('l')
      },

      calculate_age: function(thisWouldBeEasierIfIPulledFromRandomUser) {
        return moment().diff(thisWouldBeEasierIfIPulledFromRandomUser,'years')
      },

      fetchProfile() {
        fetch('https://randomuser.me/api/')
        .then( function(response) {return response.json()})
        .then( json => {
          profileApp.user.nameFirst = json.results[0].name.first;
          profileApp.user.nameLast = json.results[0].name.last;
          profileApp.user.birthdate = json.results[0].dob.date;
          profileApp.user.email = json.results[0].email;
          profileApp.user.picture = json.results[0].picture.large;
          console.log('FETCH returned');
          console.log(json);
        })
        .catch(function(err){
            console.log('FETCH error:');
            console.log(err);
        })
      }
    },
    created: function(){
        this.fetchProfile()
    }

})
