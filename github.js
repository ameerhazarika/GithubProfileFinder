class Github {

    constructor()
    {
      this.client_id ='f0f478d935790638cd04';
      this.client_secret ='beb9df67655846d3a43c48787bd9a379ea4b0ae0';
      this.repo_count = 5;
      this.repo_sort = 'created_at : asc';

    }

    async getUser(user)
     {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);



     

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();


     return {
       profile, 
       repos// same as profile : profile in es5
     }
     }






}