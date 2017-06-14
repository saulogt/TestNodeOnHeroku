

function test(req, res, next) {
    
    res.status(200).send({ msg: "ok"}).end();

}

exports.test = test;