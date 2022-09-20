import bcrypt from "bcryptjs"
const users = [
    {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        firstName: 'Johnny',
        lastName: 'Bule',
        email: 'johnny@example.com',
        password: bcrypt.hashSync('123456', 10),
        
        
    },

    {
        firstName: 'Jane',
        lastName: 'Steven',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
       
    },
]

export default users