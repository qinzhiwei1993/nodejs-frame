//路由

// var goodsRouter = require('./goodsRouter');
var looger = require('../Logger');


exports.runApp = function(app) {
    // app.use('/goods', goodsRouter);
    app.get('/', function(req, res){
        looger.info('访问/ 地址。。。。');
        res.render('index', {
            title: '哈哈'
        })
    })
}