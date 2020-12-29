const {exec,escape} = require('../db/mysql')
const {genPassword} = require('../utils/cryp')
const login = async (userName,password)=>{
    userName = escape(userName);
    password = genPassword(password)
    password = escape(password);
    let sql = `select * from yszj_user where userName=${userName} and userPassword=${password}`;
    console.log(sql)
    const userData = await exec(sql);
    return userData[0]||{}
}

module.exports = {
    login
}
