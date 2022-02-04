const LinksSocialMedia = {
    github:"Gustavo-MDe-Paula",
    youtube:"Youtube",
    instagram:"gustavomdepaula",
    facebook:"profile.php?id=100006915017776",
    twitter:"twitter"
}

function ChangeSocialMediaLinks(){
    for( let li of SocialMediaLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href =`https://www.${social}.com/${LinksSocialMedia[social]}`

    }
}

ChangeSocialMediaLinks()

function GetGithubProfileInfos(){
   const url = `https://api.github.com/users/${LinksSocialMedia.github}`

   fetch(url)
    .then(response =>response.json())
    .then(data =>{
        UserName.textContent =  data.name
        UserBio.textContent = data.bio
        UserGit.href = data.html_url
        UserPhoto.src = data.avatar_url
        UserLogin.textContent = data.login
    })
  
}

GetGithubProfileInfos()