exports.userMapper = ({ _id, name, age, email, password }) => ({
    _id,
    name,
    age,
    email,
    password
})

exports.userMapperSignIn = ({ password, ...user }) => user
