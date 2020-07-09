module.exports = {
	devServer: {
		host: 'localhost',
		port: 9080,
		proxy: {
			'/api': {
				target: 'http://localhost:8080/ccs',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '', //重写,
				}
			}
		}
	}
}
