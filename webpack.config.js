// Webpack Configuration File
// Ref: https://webpack.js.org
// We need the webpack object for having access to some plugins and functions
const webpack = require('webpack');
// We read the console arguments
const args = process.argv;
// We want to know if we are in test, dev or build mode:
const mode = args.indexOf('start') >= 0 ? 'dev' : args.indexOf('test') >= 0 ? 'test' : 'build';
console.log(`Running Webpack in ${mode}.`);

const path = require('path');

// We calculate the entry value depending on our mode
const entry = () => {
    switch (mode) {
        case 'dev': return [
            'webpack-dev-server/client?http://localhost:8080',
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            // 'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates

            './src/main.tsx'
            // the entry point of our app
        ];
        case 'build': return './src/main.tsx';
        default: return './src/main.tsx';
    }
};

// We calculate the plugins value depending on our mode
const plugins = () => {
    switch (mode) {
        case 'dev': return [
            new webpack.HotModuleReplacementPlugin(),
            // enable HMR globally

            new webpack.NamedModulesPlugin(),
            // prints more readable module names in the browser console on HMR updates
        ];
        case 'build': return [];
        default: return [];
    }
};

const devtool = () => {
    switch (mode) {
        case 'dev': return 'inline-source-map';
        case 'build': return 'source-map';
        default: undefined;
    }
};

const tsLoaders = () => {
    switch (mode) {
        case 'dev': return [
            // { loader: 'react-hot-loader' },
            { loader: 'ts-loader' }
        ];
        case 'build': return [
            { loader: 'ts-loader' }
        ];
        default: return [
            { loader: 'ts-loader' }
        ];
    }
};

const output = () => {
    switch (mode) {
        case 'build': return path.resolve(__dirname, './build/public/assets/js');
        default: return path.resolve(__dirname, './build');
    }
};

// Configuration Object
const config = {
    entry: entry(),
    output: {
        filename: 'bundle.js',
        path: output(),
        publicPath: '/assets/js'
    },
    devtool: devtool(),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: tsLoaders(),
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    devServer: {
        // hot: true,
        // enable HMR on the server
        proxy: {
            "/": "http://localhost:8888"
        }
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: plugins()
};

// Exporting our configuration object
module.exports = config;