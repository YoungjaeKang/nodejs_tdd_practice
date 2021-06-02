// db를 싱크하는 역할. node bin/sync-db.js를 통해 db.sqlite를 생성!
const models = require('../models');

module.exports = () => {
    const options = {
        force: process.env.NODE_ENV === 'test' ? true : false
    };
    return models.sequelize.sync(options);
    // force: true이면 기존 값을 다 날리고 다시 db 동기화를 한다.
    // models.sequelize는 내부적으로 promise를 리턴하게 되어 있다.
}