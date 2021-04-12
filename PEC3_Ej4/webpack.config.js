const path = require('path');

module.exports = {
    mode: 'development',
    entry: './ts/todo.app.ts',
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}