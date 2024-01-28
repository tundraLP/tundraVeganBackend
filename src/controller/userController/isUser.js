const { User } = require('../../db');

const isUser = async (mail) => {
    const user = await User.findOne({ where: {mail}});
    if (user) return true;
    return false;
}

module.exports = isUser;