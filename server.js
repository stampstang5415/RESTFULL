var express = require('express');
var app = express();
var db = require('./database');
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());//สำคํญต้องใช้
app.use(bodyParser.urlencoded({
    extended: true
}));
// index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

//add routing
// index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

var output = {
    status: 'succes',
    message: 'rest api is working'
}
app.get('/api/json', function (req, res) {
    res.status(200).json(output);

});

app.get('/api/products', db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);
//Purchase_item
app.get('/api/purchase_item', db.getPurchase_item);
app.get('/api/purchase_item/:id', db.getPurchase_itemByID);
app.post('/api/purchase_item', db.insertPurchase_item);
app.put('/api/purchase_item/:id', db.updatePurchase_item);
app.delete('/api/purchase_item/:id', db.DeletePurchase_item);
//purchase
app.get('/api/purchase', db.getPurchase);
app.get('/api/purchase/:id', db.getPurchaseByID);
app.post('/api/purchase', db.insertPurchase);
app.put('/api/purchase/:id', db.updatePurchase);
app.delete('/api/purchase/:id', db.DeletePurchase);
//user
app.get('/api/User', db.getUser);
app.get('/api/User/:id', db.getUserByID);
app.post('/api/User', db.insertUser);
app.put('/api/User/:id', db.updateUser);
app.delete('/api/User/:id', db.DeleteUser);



var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});