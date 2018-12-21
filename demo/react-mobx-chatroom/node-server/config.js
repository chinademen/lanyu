const protocol = 'http';
// const domain = '207.148.73.3';
const domain = '127.0.0.1';
const port = '8080';
const baseUrl = protocol + '://' + domain + ':' + + port;

module.exports = {
    baseUrl,
    protocol,
    port,
    domain
};