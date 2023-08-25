import UserService from './UserService.js';

class UserController {
    async create(request, response) {
        try {
            const user = await UserService.create(request.body);
            response.json(user);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async getMe(request, response) {
        try {
            const user = await UserService.getMe(request.params.login, request.params.password);
            response.json(user);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async update(request, response){
        try {
            const user = await UserService.update(request.body);
            response.json(user);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }
    async delete(request, response) {
        try {
            const user = await UserService.delete(request.params.id);
            response.json(user);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }
}

export default new UserController();
