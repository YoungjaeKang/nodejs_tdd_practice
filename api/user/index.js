// 라우팅 설정 로직

const express = require('express');
const router = express.Router();

const ctrl = require('./user.ctrl.js') // user.ctrl.js에서 api 로직 가져오기

var users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'bek'},
    {id: 3, name: 'chris'}
];

router.get('/', ctrl.index); // api 로직 가져와서 콜백 함수로 넣어주기

router.get('/:id', ctrl.show);

router.delete('/:id', ctrl.destroy);

router.post('/', ctrl.create);

router.put('/:id', ctrl.update);

module.exports = router;