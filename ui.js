class UI 
{

    constructor(){

        this.profile = document.getElementById('profile');

    }
   // Display user profile in UI  
    showUser(user){
      
      this.profile.innerHTML = `
      
        <div class="card card-body mb-3">
        
            <div class="row">

              <div class="col-md-3">

                 <img class="img-fluid mb-2" src="${user.avatar_url}">
                 <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
              </div>
              <div class="col-md-9">

                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>


                <span class="badge badge-success">Followers: ${user.followers}</span>


                <span class="badge badge-info">Following: ${user.public_repos}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                
                </ul>

              </div>

            </div>
        
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>

      `;

    }

    showRepos(repos){
        // we're getting an array of objects
        let output ='';
        repos.forEach(function(repo){

            output+= `<div class="card card-body mb-2>
                            <div class="row">
                                <div class="col-md-6">
                                  <a href="${repo.html_url}">${repo.name}</a>
                                </div>
                                <div class="col-md-6">
                                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                                    <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                                    <span class="badge badge-primary">Forks: ${repo.fork_count}</span>

                                </div>
                            </div>


                      </div>`


        });
        // output the repositories
        document.getElementById('repos').innerHTML = output;


    }

    showAlert(message,className){

            // clear existing alerts
            this.clearAlert();

            // create div element
            const div = document.createElement('div');

            // add classes
            div.className = className ;
            // create text node
            div.appendChild(document.createTextNode(message));
            // get parent of search before which we want to insert the alert
            const container = document.querySelector('.searchContainer');
            // get search box
            const search = document.querySelector('.search');
            // add alert
            container.insertBefore(div,search);

            setTimeout(()=>{
              this.clearAlert()
            }, 3000);



    }

    clearAlert(){

          const currentAlert = document.querySelector('.alert');

          if(currentAlert)
            {
              currentAlert.remove();
            }

    }

    // clear profile
    clearProfile()
    {
      this.profile.innerHTML = '';
    }

}


