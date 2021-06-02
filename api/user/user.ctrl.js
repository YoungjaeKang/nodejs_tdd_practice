// api 로직. 콜백 함수를 넣어준다.

var users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'bek'},
    {id: 3, name: 'chris'}
];

const index = function (req, res) {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    if (Number.isNaN(limit)) {
        return res.status(400).end();
    } 
    res.json(users.slice(0, limit));
};

const show = function(req, res) {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();

    const user = users.filter((user) => user.id === id)[0];
    if (!user) return res.status(404).end();
    res.json(user);
};

const destroy = function(req, res) {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();

    users.filter(user => user.id !== id); // id랑 같은걸 삭제하는게 아니라 id를 뺀 배열로 대체
    res.status(204).end();
};

const create = (req, res) => {
    const name = req.body.name;

    if (!name) return res.status(400).end();

    const isConflict = users.filter(user => user.name === name).length
    if (isConflict) return res.status(409).end()

    const id = Date.now();
    const user = {id, name};
    users.push(user);
    res.status(201).json(user);
};

const update = (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).end();
    
    const name = req.body.name;
    if (!name) return res.status(400).end();
    const isConflict = users.filter(user => user.name === name).length
    if (isConflict) return res.status(409).end();

    const user = users.filter(user => user.id === id)[0];
    if (!user) return res.status(404).end();

    user.name = name;

    res.json(user);
};



// ES6 문법
module.exports = { index, show, destroy, create, update }

// module.exports = {
//     index: index,
//     show: show,
//     destroy: destroy,
//     create: create,
//     update: update,
// }
