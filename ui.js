class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div calss="card card-body mb-3">
                <div class="row>
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}"
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge badge.primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge.secondaryr">Public Repos: ${user.public_gist}</span>
                        <span class="badge badge.success">Followers: ${user.followers}</span>
                        <span class="badge badge.info">Public Repos: ${user.following}</span>
                        <br><br>
                    </div>
                </div>
            </div>
        `;
    }
}