var commentApp = new Vue ({
    el: '#commentData' ,
    data: {
      comments:
      [
        {
          comment_id:'',
          comment_name:''
        }
      ]
    },
    methods: {
      // fetchComments() {
			// 	// console.log(document.getElementById("feedbackComment").value);
	    //   fetch('http://ec2-35-161-167-109.us-west-2.compute.amazonaws.com/api/comment.php')
	    //   // .then(response => response.json())
	    //   .then (json => {commentApp.comments = json; console.log(commentApp.comments)})
	    //   .catch( function(err){
	    //     console.log(err)
	    //   })
	    // }

      fetchComments() {
				// console.log(document.getElementById("feedbackComment").value);
	      fetch('http://ec2-35-161-167-109.us-west-2.compute.amazonaws.com/api/comment.php')
	      .then(response => response.json())
	      .then (json => {commentApp.comments = json; console.log(json)})
	      .catch( function(err){
	        console.log(err)
	      })
	    },
      pushComment() {
        fetch('http://ec2-35-161-167-109.us-west-2.compute.amazonaws.com/api/comment.php', {
          method:"POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            comment_name:document.getElementById('comment').value
          })
        })
        .then(response => {console.log(response)})
        .catch(function(err) {
          console.error(err)
        })
      }
    },
    created: function(){
        this.fetchComments()
    }

})
