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
    let cardSection ="";
    let live = "";
    $.when(
        $.getJSON(`${APIENDPOINT}`)
        // $.getJSON(`https://api.github.com/repos/octocat/hello-world/git/trees`)
        ).then((repoResponse) => {
            console.log(APIENDPOINT + " " + user)
            console.log(repoResponse);
            console.log(repoResponse[0].name);
            repoResponse.forEach((repo, index) => {
                //console.log(repo.name);
                console.log(repo.html_url);
                //console.log(`https://${user}.github.io/${repo.name}/`);
                //console.log("P " + repo.description.length())

                if ( repo.name != "Jose-Enciso"){
                    let repoHTML = repo.html_url;
                    cardSection += `
                        <section class="card">
                            <h3>${repo.name}</h3>
                            <img class="card-img" alt="..." src="https://raw.githubusercontent.com/joseenciso/${repo.name}/master/media/img/${repo.name}-thumbnail.png">
                            <div class="card-body">
                                <p class="card-text">${repo.description}</p>
                                <div class="card-button-container">
                                    <a href="${repoHTML}" class="button" target="_blank">
                                        <i class="fab fa-github-alt fab-5x"></i><span>Code</span>
                                    </a>
                                    <a href="https://${user}.github.io/${repo.name}/" class="button" target="_blank">
                                        <i class="fas fa-globe-europe fas-5x"></i>
                                        <span>Live</span>
                                        </a>
                                </div>
                            </div>
                        </section>
                    `;
                }
                

            });

            $(cardSection).insertAfter("#portfolio");
            //$("#cards-container").append(card);
        }
    )
}

fetchRepos();