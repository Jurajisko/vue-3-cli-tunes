module.exports = {
	runtimeCompiler: true,
	devServer: {
			headers: { 'Access-Control-Allow-Origin': '' },
			proxy: 'https://itunes.apple.com/',
			//proxy: 'http://localhost:8080/',
			//proxy: 'https://audio-ssl.itunes.apple.com/'
		  }
};
