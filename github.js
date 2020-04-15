class GitHub {
    constructor() {
       this.client_id = '70001fe37709f8497678'; 
       this.client_secret = 'beab4cf065255a4cd4946484028c82f65a3a251d';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
    }
}