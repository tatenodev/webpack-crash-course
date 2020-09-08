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
    devServer: {
        contentBase: outputPath
    }
}
