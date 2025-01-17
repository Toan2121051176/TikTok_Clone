const path = require('path');

module.exports = {
    entry: './src/index.js', // Tệp đầu vào
    output: {
        path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
        filename: 'bundle.js', // Tên tệp đầu ra
    },
    mode: 'development', // Hoặc 'production'
};
