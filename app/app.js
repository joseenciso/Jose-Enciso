const user = 'joseenciso';
const APIENDPOINT = `https://api.github.com/users/${user}/repos`;

function fetchRepos(){
    let card ="";
    let live = "";
    $.when(
        $.getJSON(`${APIENDPOINT}`)
        // $.getJSON(`https://api.github.com/repos/octocat/hello-world/git/trees`)
        ).then((repoResponse) => {
            console.log(APIENDPOINT + " " + user)
            console.log(repoResponse);
            console.log(repoResponse[0].name);
            repoResponse.forEach((repo, index) => {
                console.log(repo.name);
                console.log(repo.html_url);
                console.log(`https://${user}.github.io/${repo.name}/`);
                
                card += `
                <div class="card">
                    <img src="${repo.html_url}/img/${repo.name}-thumbnail.png" class="card-img-top rounded-3" alt="...">
                    <h3>${repo.name}</h3>
                    <p>${repo.description}</p>
                    <div class="card-button-container text-center">
                        <a href="${repo.html_url}" class="btn button p-1" target="_blank"><i class="fab fa-github-alt"></i>GitHub</a>
                        <a href="https://${user}.github.io/${repo.name}/" class="btn button p-1" target="_blank"><i class="fas fa-globe-europe"></i>Live</a>
                    </div>
                </div>
                `;

            });
            $(".cardsContainer").append(card);
        }
    )
}

fetchRepos();