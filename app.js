//init github class

const github = new Github;

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
                    
                } else {
                    //show profile - ui.js
                }
        });
    } else {
        //clear profile
    }
});