## Minimal React JS app with Webpack2 with HMR :

#### Prerequisite : 
	
>  ##### Install NodeJS v7.x.x and run following
> `npm install -g yarn webpack webpack-dev-server`


### Setup

1. `yarn init`
2. `yarn add babel-core babel-loader babel-preset-react react react-dom`
3. `yarn add babel-cli react-hot-loader webpack webpack-dev-server`
4. Create folders structure as :

	```
	<Root Directorty>
	|
	|___ build
	|	|___ index.html
	|
	|___ src
	|	|___ components
	|	|	|__  App
	|	|	      |__ index.js
	|	|
	|	|___ index.js
	|
	|___ webpack.config.js
	|
	|
	|___ .babelrc
	```

5. Add following to `.babelrc` :
	
	```json
	{
    	"presets": [
                ["env", {"modules": false}],
        	    "react"
    	],
    	"plugins": [
               "react-hot-loader/babel"
    	]
	}
	```
6. Add following to `webpack.config.js` :

	```javascript
	const { resolve } = require('path');
	const webpack = require('webpack');

	module.exports = {
    	context: resolve(__dirname, 'src'),
    	entry: [
                'react-hot-loader/patch',
        	    'webpack-dev-server/client?http://localhost:3000',
        	    'webpack/hot/only-dev-server',
        	    './index.js'
    	],
    	output: {
        	    path: resolve(__dirname, 'build'),
        	    filename: '[name].bundle.js'
    	},

    	module: {
        	    rules: [{
            	    test: /\.js$/,
            	    exclude: /node_modules/,
            	    use: {
                	        loader: 'babel-loader'
            	    }
        	    }]
    	},

    	/**
     	* Watch mode with Chrome DevTools
     	*/
    	devtool: "inline-source-map",

    	/**
     	* Webpack Dev Server
     	*/
    	devServer: {
        	    contentBase: resolve(__dirname, "build"),
        	    compress: true,
        	    port: 3000,
        	    clientLogLevel: "info",
        	    historyApiFallback: true,
        	    hot: true,
        	    overlay: true
    	},

    	plugins : [
        	    new webpack.HotModuleReplacementPlugin(),
        	    new webpack.NamedModulesPlugin()
    	]
	};

	```

7.  Add following to `src/index.js` :

	```javascript
	import React from 'react';
	import ReactDOM from 'react-dom';

	import { AppContainer } from 'react-hot-loader';

	import App from './components/App';

	const render = (Component) => {
    	const contentRoot = document.getElementById('root');
    	ReactDOM.render(
        		<AppContainer>
            		<Component/>
        		</AppContainer>
    	, contentRoot);
	}

	render(App);

	//HMR API - enabled by devServer: { hot: true } in webpack-dev-server config
	if(module.hot){
    	module.hot.accept('./components/App', () => {
			render(App);
    	});
	}
	```

8. Add following to `src/components/App/index.js` :

	```javascript
	import React, { Component } from 'react';

	class App extends Component {
	    render() {
		return (
		    <div>
		        <h1> HMR With React/WebPack2 Enabled! </h1>
		        <h2><small> First Container Page </small></h2>
		    </div>
		);
	    }
	}

	export default App;
	```

9. Add following to your `package.json` 's `scripts` section :

	```json
	"scripts": {
        "start": "webpack-dev-server"
     },
	```
10. Run `npm start` in terminal
11. You are Set!
