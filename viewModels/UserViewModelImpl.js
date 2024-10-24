import UserModel from "../model/UserModle";

class UserViewModelImplementation {

    constructor() {
        this.user = new UserModel(1, "Steve Ali", "steve.ali@gmail.com")
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