const files = require.context('.', false, /\.js$/);
const stores = {};

files.keys().forEach(key => {
    if (key === './index.js') return;
    stores[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default stores;