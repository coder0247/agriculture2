const cors = require('cors');
const express = require('express')
var cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
var session = require('express-session');
const config = require('./config');
const headerRoute = require('./routes/header');
const footerRoute = require('./routes/footer');
const userRoute = require('./routes/user');
const homeRoute = require('./routes/home');
const accountRoute = require('./routes/account');
const categoryRoute = require('./routes/category');
const contactRoute = require('./routes/contact');
const searchRoute = require('./routes/search');
const singleProductRoute = require('./routes/singleproduct');
const uploadImage = require('./routes/upload.js');
const adminCategory = require('./routes/adCategory');
const adminFeaturedProduct = require('./routes/adFeaturedProduct.js');
const adminUser = require('./routes/adUser');
const reportedAds = require('./routes/adReportedAds');
const pageEdit = require('./routes/adPageEdit');
const siteSettings = require('./routes/adSiteSettings');
const adBestSellerProduct = require('./routes/adBestSellerProduct');
const adMostViewedProduct = require('./routes/adMostViewedProduct');
const adNewArrivalsProduct = require('./routes/adNewArrivalsProduct');
const adOnSaleProduct = require('./routes/adOnSaleProduct');
const adHomeProductCatwiseStatus = require('./routes/homeproduct');
const country = require('./routes/countrycity');
const MongoStore = require('connect-mongo')(session);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//connect to MongoDB
var options = { keepAlive: 300000, connectTimeoutMS: 30000};
mongoose.connect(config.dbUrl, options);
var db = mongoose.connection;

app.use(session({
    key: 'user_sid',
    secret: 'TQnN$d#fsurwer87234897#@$$',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

app.get(/^(?!\/api).+/, function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
  //frontend
app.use(headerRoute);
app.use(footerRoute);
app.use(homeRoute);
app.use(userRoute);
app.use(accountRoute);
app.use(categoryRoute);
app.use(contactRoute);
app.use(searchRoute);
app.use(singleProductRoute);
app.use(uploadImage);
app.use(country);

//admin

app.use(adminCategory);
app.use(adminFeaturedProduct);
app.use(adminUser);
app.use(reportedAds);
app.use(pageEdit);
app.use(siteSettings);
app.use(adBestSellerProduct);
app.use(adMostViewedProduct);
app.use(adNewArrivalsProduct);
app.use(adOnSaleProduct);
app.use(adHomeProductCatwiseStatus);

app.listen(process.env.PORT || 4001)
