import User from './User.js';

class UserService {
    async create(user) {
        const createdUser = await User.create(user);
        return createdUser;
    }

    async getMe(login, password) {
        if (!login || !password) {
            throw new Error('укажите логин и пароль!');
        }
        const user = User.find({login: login, password: password});
        return user;
    }

    async update(user) {
        if (!user._id) {
            throw new Error('Id не указан!');
        }
        const updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true});
        return updatedUser;
    }

    async delete(id) {
        if (!id) {
            throw new Error('Id не указан!');
        }
        const user = await User.findByIdAndDelete(id);
        return user;
    }
}

export default new UserService();

// TODO: https://stackoverflow.com/questions/70622903/a-way-to-join-posts-with-users-in-mongoose
