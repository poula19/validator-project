const { check } = require("express-validator");

module.exports=[
    check ('name').matches(/^Ahmed/) ,
    check ('email').isEmail(),
    check ('password').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
]