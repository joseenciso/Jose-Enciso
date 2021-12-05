const user = 'joseenciso';
const APIENDPOINT = `https://api.github.com/users/${user}/repos`;

$(".fa-times").addClass('hide');

$("button .fa-bars").click( ()=> {
    $(".fa-times").addClass('show');
    $(".fa-times").removeClass('hide');
    $(".fa-bars").addClass('hide');
    $(".fa-bars").removeClass('show');
});

$("button .fa-times").click( ()=> {
    $(".fa-times").addClass('hide');
    $(".fa-times").removeClass('show');
    $(".fa-bars").addClass('show');
    $(".fa-bars").removeClass('hide')
});


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
                //console.log("P " + repo.description.length())

                if ( repo.name != "Jose-Enciso"){
                    card += `
                        <div class="card">
                            <div class="card-inner">
                                <img class="card-img" alt="..." src="https://raw.githubusercontent.com/joseenciso/${repo.name}/master/media/img/${repo.name}-thumbnail.png">
                                <div class="card-body position-absolute top-0 start-0 h-100">
                                    <h3 class="text-center">${repo.name}</h3>
                                    <p class="card-text">${repo.description}</p>
                                    <div class="card-button-container text-center position-absolute bottom-0 start-0 w-100">
                                        <hr class="m-0">
                                        <a href="${repo.html_url}" class="btn button p-1" target="_blank"><i class="fab fa-github-alt px-1"></i>Code</a>
                                        <a href="https://${user}.github.io/${repo.name}/" class="btn button p-1" target="_blank"><i class="fas fa-globe-europe px-1"></i>Live</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }
                

            });
            $("#cards-container").append(card);
        }
    )
}

fetchRepos();