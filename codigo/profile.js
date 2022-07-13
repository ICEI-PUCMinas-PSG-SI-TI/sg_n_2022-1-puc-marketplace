const profile_text = document.getElementById('profile-textarea');
const getUsername = () => {
    const active_user = JSON.parse(localStorage.getItem('active_user'));
    if(!active_user){
        window.location.href = 'products.html';
    }
    const username_title = document.getElementById('profile-name');
    profile_text.value = active_user.description;
    username_title.innerHTML = active_user.name;
}
//on Change textarea to update the profile
const updateProfile = () => {
    
    let active_user = JSON.parse(localStorage.getItem('active_user'));
    active_user.description = profile_text.value;
    localStorage.setItem('active_user', JSON.stringify(active_user));

}
profile_text.addEventListener('keyup', updateProfile);

getUsername();