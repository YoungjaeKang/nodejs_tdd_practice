const app = require('../index');
const syncDb = require('./sync-db');

// 원래 index.js에 있는 코드인데 테스트 돌릴 때 서버가 구동되므로 중복이다.
// 그래서 index.js에서는 삭제해도 테스트는 도는데 그러면 npm start에서 서버가 돌지 않는다.
// 그래서 여기 따로 빼서 package.json의 scripts에 넣어주는 것.

// db sync
syncDb().then(() => {
    console.log('Sync Database');
    
    app.listen(3000, function () {
        console.log(`Example app listening on port 3000!`);
    });
    
});