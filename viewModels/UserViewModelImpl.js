import UserModel from "../model/UserModle";

class UserViewModelImplementation {

    constructor() {
        this.user = new UserModel(1, "", "");
    }

    addUserName(name) {
        this.user.name = name;
        console.log("from add nam function ", this.user);
    }
    addUserEmail(email) {
        this.user.email = email;
        console.log("from add email function ", this.user);
    }
    showUser() {
        console.log("from show function ", this.user);
        return this.user;
    }

    updateUserData() {
        // this.user.name = "Sally Hassan";
        // this.user.email = "sally_hassam11@gmail.com";
        this.user = new UserModel(1, "Sally Hassan", "sally_hassam11@gmail.com")
        // console.log("update happen", this.user);
        return this.user;
    }
}

export default UserViewModelImplementation;