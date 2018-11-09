const siteUrl = 'https://kilimosafi2018.herokuapp.com/';
const dbUrl = "mongodb://agriuser:agri123@ds121321.mlab.com:21321/m_agriculture";
// const dbUrl = "mongodb://agriuser:agri123@ds121321.mlab.com:21321/m_agriculture";
const mail = {
    host: 'smtp.strato.de',
    port: 465,
    secure: true,
    user: 'support@kilimosafi.com',
    pass: 'Support2018$'
    };

module.exports = {
    siteUrl,
    dbUrl,
    mail
};
