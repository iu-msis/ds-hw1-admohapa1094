var commentApp = new Vue ({
    el: '#commentData' ,
    data: {
      comments:
      [
        {
          id:'',
          comment:''
        }
      ]
    },
    methods: {
      fetchComments() {
				// console.log(document.getElementById("feedbackComment").value);
	      fetch('http://ec2-35-161-167-109.us-west-2.compute.amazonaws.com/api/comment.php')
	      // .then(response => response.json())
	      .then (json => {commentApp.comments = json
        })
        .then(resp => {console.log(resp)})
	      .catch( function(err){
	        console.log(err)
	      })
	    }
    },
    created: function(){
        this.fetchComments()
    }

})
