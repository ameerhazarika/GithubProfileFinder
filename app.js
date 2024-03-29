//instantiate Github class object
const github = new Github;

//instantiate UI class object
const ui = new UI;
// Search input

  const searchUser = document.getElementById('searchUser');

// Search input event listener
  searchUser.addEventListener('keyup',(e)=>{

      const userText = e.target.value;

      if(userText!=='')
      {
        // make http call
        github.getUser(userText)
        .then(data => {
               
          if(data.profile.message === "Not Found")
            {
              //Show alert
             ui.showAlert('User not found','alert alert-danger');
                
            }
            else
            {
              // Show Profile
              ui.showUser(data.profile);
              // Show repos
              ui.showRepos(data.repos);

            }

        });
      }
      else
      {
        // Clear profile
        ui.clearProfile();
      }

  })