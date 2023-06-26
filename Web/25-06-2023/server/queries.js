const Pool = require('pg').Pool
const bcrypt = require('bcrypt');
const pool = new Pool({
    user: 'myuser',
    host: 'localhost',
    database: 'mydb',
    password: 'mypass',
    port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM userinfo ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserByEmail = (request, response) => {
    const { email, password } = request.body;
    pool.query('SELECT * FROM userinfo WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error;
        }

        if (results.rows.length > 0) {
            const user = results.rows[0];

            // Сравнение хэшированного пароля с введенным пользователем
            bcrypt.compare(password, user.password, (bcryptError, bcryptResult) => {
                if (bcryptError) {
                    throw bcryptError;
                }
                if (bcryptResult) {
                    response.status(200).send('You are in the system');
                } else {
                    response.status(401).send('Invalid email or password');
                }
            });
        } else {
            response.status(401).send('Invalid email or password');
        }
    });
};

const createUser = (request, response) => {
    const { email, password } = request.body;
    bcrypt.genSalt(10, (saltError, salt) => {
        if (saltError) {
            throw saltError;
        }
        bcrypt.hash(password, salt, (hashError, hashedPassword) => {
            if (hashError) {
                throw hashError;
            }
            pool.query('SELECT * FROM userinfo WHERE email = $1', [email], (error, results) => {
                if (error) {
                    throw error;
                }
                if (results.rows.length > 0) {
                    response.status(401).send(`user with this email already exists`);
                } else {
                    pool.query(
                        'INSERT INTO userinfo (email, password) VALUES ($1, $2) RETURNING *',
                        [email, hashedPassword],
                        (error, results) => {
                            if (error) {
                                throw error;
                            }

                            response.status(201).send(`User added with ID: ${results.rows[0].id}`);
                        }
                    );
                }

            })

        });
    });
};

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM userinfo WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}
module.exports = {
    getUsers,
    getUserByEmail,
    createUser,
    deleteUser,
}