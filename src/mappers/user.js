exports.userMapper = ({ _id, name, age, email, password }) => ({
    _id,
    name,
    age,
    email,
    password
})

exports.userMapperSignIn = ({ _id, name, age, email, password }) => ({
    _id,
    name,
    age,
    email
})
