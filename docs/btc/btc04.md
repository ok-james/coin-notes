## 双花 double spending attack

对于数字货币来说，需要解决双花攻击。因为数字货币本身就是一串二进制流，是可以无限复制的，所以如果不解决双花问题，那么使用一个数字货币支付以后，可以使用同一串二进制流再进行其他的支付。

对于纸质货币来说，天然具有防止双花的功能，因为同一个纸币，花出去就没了，不可能再花一次。

## 单个区块的结构

### 块头  Block header

1. 版本 version
2. 前一个区块的指针
3. 梅克尔树的根哈希值
4. 难度目标值 target（在实际数据中，是通过 `bits` 字段存储的，且存储的不直接是 target ，需要经过转换， `bits` 字段的大小是 4 字节）
5. 随机数 nonce

H(block header) ≤ target

注意，取 hash 是取的块头，而不包含块身。

### 块身 Block body

1. 交易列表 transaction list

## 节点

### 全节点 full node

包含区块链中所有的信息。

### 轻节点 light node

只保存块头（block header）的信息。一般情况下，轻节点无法独立验证交易的合法性。

## 账本与共识

账本的内容要取得分布式的共识，也就是在各节点上，最终的账本的内容要达成共识。

### FLP 不可能结果 FLP impossibility result

FLP 是分布式系统方面的三个专家的姓的首字母，下面说的结论是他们研究得出的：在一个异步的系统里，也就是网络传输的时延没有上限，那么即使只有一个成员是有问题的（faulty），也不可能取得共识。

### CAP 定理 CAP theorem

C：Consistency（一致性）

A：Availability（可用性）

P：Partition tolerance（分区容错性）

任何一个分布式系统中，上面的三个特性最多满足两个，不可能三个性质都同时满足

### 比特币中的共识协议

最长合法链，在比特币中，最长的链作为共识链。

#### 区块奖励

铸币交易：作为矿工创建区块的奖励，铸币交易是比特币协议中产生新币的唯一方式。

## 交易

在比特币中，有两种类型的交易，铸币交易（coinbase）和普通转账交易。

### 普通交易

假设 A 要向 B 转账 10 个比特币，那么， A 必须知道 B 的地址，然后 A 使用自己的私钥对交易进行签名，从而可以完成转账，同时，A 在发布这个交易时，比特币网络中的全节点也必须知道 A 的公钥，从而验证 A 的签名是否有效。

A 想知道 B 的地址，只需要询问 B 即可，就像现实生活中，向某人的银行卡转账时，需要事先询问其银行卡号一样。

那如何将 A 的公钥通知给全节点呢？ A 需要自己将其公钥写入交易中。

## 真实的比特币区块数据

```json
{
  "hash": "00000000d1145790a8694403d4063f323d499e655c83426834d4ce2f8dd4a2ee",
  "ver": 1,
  "prev_block": "000000002a22cfee1f2c846adbd12b3e183d4f97683f85dad08a79780a84bd55",
  "mrkl_root": "7dac2c5666815c17a3b36427de37bb9d2e2c5ccec3f8633eb91a4205cb4c10ff",
  "time": 1231731025,
  "bits": 486604799,
  "next_block": [
    "00000000c9ec538cab7f38ef9c67a95742f56ab07b0a37c5be6b02808dbfb4e0"
  ],
  "fee": 0,
  "nonce": 1889418792,
  "n_tx": 2,
  "size": 490,
  "block_index": 170,
  "main_chain": true,
  "height": 170,
  "weight": 1960,
  "tx": [
    {
      "hash": "b1fea52486ce0c62bb442b530a3f0132b826c74e473d1f2c220bfa78111c5082",
      "ver": 1,
      "vin_sz": 1,
      "vout_sz": 1,
      "size": 134,
      "weight": 536,
      "fee": 0,
      "relayed_by": "0.0.0.0",
      "lock_time": 0,
      "tx_index": 4584978556854081,
      "double_spend": false,
      "time": 1231731025,
      "block_index": 170,
      "block_height": 170,
      "inputs": [
        {
          "sequence": 4294967295,
          "witness": "",
          "script": "04ffff001d0102",
          "index": 0,
          "prev_out": {
            "tx_index": 0,
            "value": 0,
            "n": 4294967295,
            "type": 0,
            "spent": true,
            "script": "",
            "spending_outpoints": [{ "tx_index": 4584978556854081, "n": 0 }]
          }
        }
      ],
      "out": [
        {
          "type": 0,
          "spent": false,
          "value": 5000000000,
          "spending_outpoints": [],
          "n": 0,
          "tx_index": 4584978556854081,
          "script": "4104d46c4968bde02899d2aa0963367c7a6ce34eec332b32e42e5f3407e052d64ac625da6f0718e7b302140434bd725706957c092db53805b821a85b23a7ac61725bac",
          "addr": "1PSSGeFHDnKNxiEyFrD1wcEaHr9hrQDDWc"
        }
      ]
    },
    {
      "hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
      "ver": 1,
      "vin_sz": 1,
      "vout_sz": 2,
      "size": 275,
      "weight": 1100,
      "fee": 0,
      "relayed_by": "0.0.0.0",
      "lock_time": 0,
      "tx_index": 795787923367440,
      "double_spend": false,
      "time": 1231731025,
      "block_index": 170,
      "block_height": 170,
      "inputs": [
        {
          "sequence": 4294967295,
          "witness": "",
          "script": "47304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901",
          "index": 0,
          "prev_out": {
            "tx_index": 7092901136679432,
            "value": 5000000000,
            "n": 0,
            "type": 0,
            "spent": true,
            "script": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac",
            "spending_outpoints": [{ "tx_index": 795787923367440, "n": 0 }],
            "addr": "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S"
          }
        }
      ],
      "out": [
        {
          "type": 0,
          "spent": true,
          "value": 1000000000,
          "spending_outpoints": [{ "tx_index": 5011701965475923, "n": 0 }],
          "n": 0,
          "tx_index": 795787923367440,
          "script": "4104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac",
          "addr": "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3"
        },
        {
          "type": 0,
          "spent": true,
          "value": 4000000000,
          "spending_outpoints": [{ "tx_index": 6687795960110968, "n": 0 }],
          "n": 1,
          "tx_index": 795787923367440,
          "script": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac",
          "addr": "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S"
        }
      ]
    }
  ]
}
```

该数据是通过 [https://blockchain.info/rawblock/00000000d1145790a8694403d4063f323d499e655c83426834d4ce2f8dd4a2ee](https://blockchain.info/rawblock/00000000d1145790a8694403d4063f323d499e655c83426834d4ce2f8dd4a2ee) 这个链接得到的，而这个链接本质上是 blockchain.info 提供的 API ：[https://www.blockchain.com/api/blockchain_api](https://www.blockchain.com/api/blockchain_api) 。

### 注意点

1. 在上面的数据结构中，有一个 `next_block` 的字段，这个字段应该是不会参加到 `hash` 字段的计算的，因为在计算最新的区块时，还没有下一个区块，所以是在产生下一个区块时，回过来头来对这个区块进行了修改。看一下最新的区块的数据便可以知道，其 `next_block` 的值是空数组。

### 疑问点

1. 难度值是如何计算出来的？在 [blockchain.com](http://blockchain.com) 上有 `Difficulty` 这个字段，但是在原始数据中找不到这个字段，是如何计算出来的
2. `bits` 字段是什么意思？
3. `block_index` 和 `height` 有什么区别与联系？
4. `weight` 字段是什么意思？
5. 视频中提到， A 转给 B 时，A 会将自己的公钥一起提供出来，但是从上面的数据中没有 A 的公钥，只有 A 的地址，而从地址是无法反推出公钥的，那么全节点是如何得到 A 的公钥，从而验证 A 的签名呢？
6. 继续上面的例子， A 转账给 B 时，A 需要通过自己的私钥对交易进行签名，但是在 `inputs` 中，好像是没有这个签名的字段。那么这个签名是 A 将交易发送给全节点时是存在，但是在往区块链中存储的时候，被删除了吗？如果真是这样的， A 发送给全节点的数据是什么样子的？

### 猜测与解答

#### 问题1和问题2

问题 1 和 问题 2 实际上是同一个问题，因为 `difficulty` 就是通过 `bits` 计算出来的。

`bits` 可能是目标难度值编码后的结果，在本节视频的 59:44 有提到一个 `nBits` 的概念。

另外，可以参考《**[What are the equations to convert between bits and difficulty?](https://bitcoin.stackexchange.com/a/30470)**》这个答案，这个答案里说明了 `difficuly` 和 `bits` 如何相互转换。

根据上面中的文章，可以从 `bits` 计算出 `difficuly` 的值，但是有两点需要注意：

1. 在区块的原始数据中， `bits` 字段的值是 10 进制，需要先转换为 16 进制再进行计算
2. 使用 `echo 'ibase=16;xxx / xxx'` 这个公式时要注意，16 进制数字中的字母必须是全大写，否则计算会报错。

#### 问题5和问题6

分别在输入和输出的 `script` 字段中存储
