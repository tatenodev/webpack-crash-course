const path = require('path')

// 絶対パスを生成するメソッド【path】
// __dirname はこのファイルがある現在のディレクトリ名
// "現在のディレクトリ名" + "dist" を連結して絶対パスに変換している。
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // ※逆順に読み込まれる
                    // css-loaderでcssを読み込んだあとにstyle-loaderでhtmlにstyleを適用させる
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: './images/[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: outputPath
    }
}
