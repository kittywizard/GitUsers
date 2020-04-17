//init github class
const github = new Github;

//init UI class
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    //make sure not blank
    if(userText !== '') {
        //make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found") {
                    //show alert - ui.js
                    ui.showAlert('User not found', 'alert alert-danger');
                    
                } else {
                    //show profile - ui.js
                    ui.showProfile(data.profile);
                }
        });
    } else {
        //clear profile
        ui.clearProfile();
    }
});