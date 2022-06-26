const path = require('path')
const defaultPath = '/btc/btc01'

module.exports = {
  title: '区块链学习笔记',
  description: '哔哩哔哩 —— 肖臻公开课《区块链技术与应用》学习笔记',
  base: '/coin-notes/',
  themeConfig: {
    nav: [
      {text: '👉 学习笔记', link: defaultPath},
      {text: 'GitHub', link: 'https://github.com/ok-james/coin-notes'}
    ],
    sidebar: [
      {
        title: 'BTC',
        path: defaultPath,
        children: [{
          title: '01 - 课程简介',
          path: defaultPath
        }, {
          title: '02 - BTC-密码学原理',
          path: '/btc/btc02'
        }, {
          title: '03 - BTC-数据结构',
          path: '/btc/btc03'
        }, {
          title: '04 - BTC-协议',
          path: '/btc/btc04'
        }, {
          title: '05 - BTC-实现',
          path: '/btc/btc05'
        }, {
          title: '06 - BTC-网络',
          path: '/btc/btc06'
        }, {
          title: '07 - BTC-挖矿难度',
          path: '/btc/btc07'
        }, {
          title: '08 - BTC-挖矿',
          path: '/btc/btc08'
        }, {
          title: '09 - BTC-比特币脚本',
          path: '/btc/btc09'
        }, {
          title: '10 - BTC-分叉',
          path: '/btc/btc10'
        }, {
          title: '11 - BTC-问答',
          path: '/btc/btc11'
        }, {
          title: '12 - BTC-匿名性',
          path: '/btc/btc12'
        }, {
          title: '13 - BTC-思考',
          path: '/btc/btc13'
        }]
      },
      {
        title: 'ETH',
        path: '/eth/eth404',
        children: []
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './public')
      }
    }
  }
}
