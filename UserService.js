import User from './User.js';

class UserService {
    async create(user) {
        const createdUser = await User.create(user);
        return createdUser;
    }

    async getMe(data) {
        if (!data.login || !data.password) {
            throw new Error('укажите логин и пароль!');
        }
        const user = User.find({login: data.login, password: data.password});
        return user;
    }

    async getNoteUser(id) {
        if (!id) {
            throw new Error('Пользователь отсутствует!');
        }
        const user = User.findById(id);
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
