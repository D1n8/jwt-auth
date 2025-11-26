import db from '../db/db.js'

class UserService {
    async registration(email, password) {
        const candidate = await db.query(`
                SELECT * FROM user WHERE email=${email};
            `)
        if (candidate) throw new Error('Пользователь с таким email уже существует');

        const result = await db.query(`
                INSERT INTO users VALUES ($1, $2);
            `, [email, password])

        return result;
    }

    async getUsers(){
        const data = await db.query(`
                SELECT * FROM user;
            `)
        return data;
    }
}

export default new UserService();