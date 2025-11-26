import UserService from "../service/UserService.js";

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            const data = UserService.registration(email, password);
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async login(req, res, next) {
        try {

        } catch (error) {
            console.log(error);
        }
    }

    async logout(req, res, next) {
        try {

        } catch (error) {
            console.log(error);
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (error) {
            console.log(error);
        }
    }

    async getUsers(req, res, next) {
        try {
            const data = UserService.getUsers();
            console.log(data)

            return res.json(data)
        } catch (error) {
            console.log(error);
        }
    }
}

export default new UserController();