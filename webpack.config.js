const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: './public/admin.js', // Entry point for your static JS
    output: {
        filename: 'bundle.js', // Output bundle file
        path: path.resolve(__dirname, 'public'), // Output directory
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.RAPID_KEY': JSON.stringify(process.env.RAPID_KEY),
            'process.env.RAPID_HOST' : JSON.stringify(process.env.RAPID_HOST),

        }),

    ],
};
