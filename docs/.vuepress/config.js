const path = require('path')
const defaultPath = '/overview01'

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
        title: '01 - 课程简介',
        path: defaultPath
      },
      {
        title: 'BTC',
        path: '/btc/btc02',
        children: [{
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
        path: '/eth/eth14',
        children: [{
          title: '14 - ETH-以太坊概述',
          path: '/eth/eth14'
        }, {
          title: '15 - ETH-账户',
          path: '/eth/eth15'
        }, {
          title: '16 - ETH-状态树',
          path: '/eth/eth16'
        }, {
          title: '17 - ETH-交易树和收据树',
          path: '/eth/eth17'
        }, {
          title: '18 - ETH-GHOST',
          path: '/eth/eth18'
        }, {
          title: '19 - ETH-挖矿算法 ethash',
          path: '/eth/eth19'
        }, {
          title: '20 - ETH-难度调整',
          path: '/eth/eth20'
        }, {
          title: '21 - ETH-权益证明',
          path: '/eth/eth21'
        }, {
          title: '22 - ETH-智能合约',
          path: '/eth/eth22'
        }, {
          title: '23 - ETH-TheDAO',
          path: '/eth/eth23'
        }, {
          title: '24 - ETH-反思',
          path: '/eth/eth24'
        }, {
          title: '25 - ETH-美链',
          path: '/eth/eth25'
        }]
      },
      {
        title: '26 - 总结',
        path: '/summary26'
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
