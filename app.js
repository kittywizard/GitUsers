// search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    //make sure not blank
    if(userText !== '') {
        console.log(userText);
    }
});