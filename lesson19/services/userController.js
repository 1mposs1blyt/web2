class UserController {
    constructor() {
        this.users = [
            'user one', 
            'user two', 
            'user three', 
            'user four', 
            'user five'
        ];

    }
    users = [
        'user one', 
        'user two', 
        'user three', 
        'user four', 
        'user five'
    ];
    async getUsers(req, res) {
        res.render('users.html',this.users);
    }
}

new UserController();
module.exports = UserController;