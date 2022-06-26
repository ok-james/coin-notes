## 交易结构

#### meta 元数据结构

| 字段名 | 含义 |
| --- | --- |
| txid | 交易的id |
| hash | 交易的hash |
| version | 使用的比特币协议的版本号 |
| size | 当前交易的大小 |
| locktime | 用于指定交易的生效时间，0 表示立即生效，如果是非 0 值，那么这个交易需要过一段时间才能生效 |
| vin | 交易的输入 |
| vout | 交易的输出 |
| blockhash | 这个交易所在区块的 hash  |
| confirmations | 这个交易已经有多少个确认信息 |
| time | 这个交易产生的时间 |
| blocktime | 这个区块产生的时间 |

个人声明：这些字段肯定不全是真实存储在链上的交易所拥有的字段，比如上面提到的 *confirmations* 字段就不可能存储在真实的交易中。这些字段中，有些字段是直接存储在链上的，有些需要经过链下的二次加工得到。

#### inputs 输入结构

| 字段名 | 含义 |
| --- | --- |
| txid | 币的来源交易的 hash 值 |
| vout | 表示交易的第几个输出 |
| scriptSig | 输入脚本 |

#### outputs 输出结构

| 字段名 | 含义 |
| --- | --- |
| value | 转账的输出金额 |
| n | 序号，表示这是交易里的第几个输出 |
| scriptPubKey | 输出脚本 |

## 获取链上的真实交易

在区块链上，交易是通过 `hex` 的形式保存的，要获取原始的 `hex` ，有多种方式，很多区块链浏览器都有查询原始交易 `hex` 的 API ，比如 [blockStream API](https://github.com/Blockstream/esplora/blob/master/API.md) ：

![Merkle proof](~@/images/09/tx_api.png)

不过，最方便的方式还是通过 **[Get Raw Transaction in Hex Format](https://bitcoindata.science/bitcoin-raw-transaction-hex.html)** 这个工具直接查询，只需输入交易 hash 即可：

![Merkle proof](~@/images/09/get_tx_raw.png)

得到 `hex` 后，需要将其转换为 JSON 格式，可以通过 BLOCKCYPHER 的 [decodetx](https://live.blockcypher.com/btc/decodetx/) 这个工具完成：

![Merkle proof](~@/images/09/decode_tx_raw.png)

#### 实例：921af728159e3019c18bbe0de9c70aa563ad27f3f562294d993a208d4fcfdd24 这个交易的原始 JSON

```json
{
    "addresses": [
        "1MaBFqBEfcQyXPv3fm5WAW9aQuJuKHaA3A",
        "19z8LJkNXLrTv2QK5jgTncJCGUEEfpQvSr",
        "1LvGTpdyeVLcLCDK2m9f7Pbh7zwhs7NYhX"
    ],
    "block_height": -1,
    "block_index": -1,
    "confirmations": 0,
    "double_spend": false,
    "fees": 29040,
    "hash": "921af728159e3019c18bbe0de9c70aa563ad27f3f562294d993a208d4fcfdd24",
    "inputs": [
        {
            "addresses": [
                "1MaBFqBEfcQyXPv3fm5WAW9aQuJuKHaA3A"
            ],
            "age": 530654,
            "output_index": 0,
            "output_value": 76469684,
            "prev_hash": "c0cb92ca8e41070233bf965d808b0fc4bac144dab05690b17823fac3e184c57b",
            "script": "483045022100928496fb0d2a25e4e7c99b9c60d4d0d12fcf8974a0faffcb30119b0d385872a30220253d3d0c507e5e44e123bc28b795ab4a38bf3b205455403e77aa72d58d9e17110121022ef8d3a6dd8a7039e513acc8ecf9b094ed7e85439824a1d11920f85927cd0018",
            "script_type": "pay-to-pubkey-hash",
            "sequence": 4294967295
        }
    ],
    "outputs": [
        {
            "addresses": [
                "19z8LJkNXLrTv2QK5jgTncJCGUEEfpQvSr"
            ],
            "script": "76a914628ed6567c0b9056067309f07bbea2992ecad74388ac",
            "script_type": "pay-to-pubkey-hash",
            "value": 22684000
        },
        {
            "addresses": [
                "1LvGTpdyeVLcLCDK2m9f7Pbh7zwhs7NYhX"
            ],
            "script": "76a914da7d57dfd02c6f5a9c649e891b5ac199ad012cd288ac",
            "script_type": "pay-to-pubkey-hash",
            "value": 53756644
        }
    ],
    "preference": "high",
    "received": "2022-06-25T08:50:09.602679417Z",
    "relayed_by": "35.172.182.94",
    "size": 226,
    "total": 76440644,
    "ver": 1,
    "vin_sz": 1,
    "vout_sz": 2,
    "vsize": 226
}
```

## 交易脚本入门

交易脚本的作用就是验证当前交易的合法性，该脚本是一个特别简单的堆栈脚本，没有复杂的条件语句的判断，比如 if 、 for 等。

通过脚本验证交易时，是先取当前交易的输入脚本（input script），之后拼接上币的来源交易的输出脚本（output script），然后执行拼接后的脚本，如果最终的执行结果没有问题，验证成功，否则，验证失败，交易无效，拼接的示意图如下：

![Merkle proof](~@/images/09/script_basic.png)

> 这里再重点强调一下，输出脚本来自于币的来源（UTXO）所属的交易，而不是当前交易，一定要记住这一点。对于理解后面的内容，这一点非常重要。
>

## 输入输出脚本的几种形式

### P2PK（Pay to Public Key）

#### 算法表示形式

**input script:**

PUSHDATA(Sig)

**output script:**

PUSHDATA(PubKey)

CHECKSI

#### 解释

算法表示形式中的 `PUSHDATA` 是将数据放到栈顶。

`Sig` 表示私钥的签名

`PubKey` 表示上面提到的私钥所对应的公钥

`CHECKSI` 方法弹出栈顶数据作为公钥，然后再弹出栈顶数据作为签名，最后用公钥来验证签名

#### 实例

![Merkle proof](~@/images/09/ins_one.png)

input的交易哈希是ea44e97271691990157559d0bdd9959e02790c34db6c006d779e82fa5aee708e

另外，可以通过在 [Blockstream Explorer](https://blockstream.info) 上更直观的查看结果，如下：

![Merkle proof](~@/images/09/ins_result_one.png)

### P2PKH ( Pay to Public Key Hash )

#### 算法表示形式

**input script:**

PUSHDATA(Sig)

PUSHDATA(PubKey)

**output script:**

DUP

HASH160

PUSHDATA(PubKeyHash)

EQUALVERIFY

CHECKSIG

这是最常用的指令形式。

#### 解释

这个算法与上一个算法最大的不同是，这里的 `output script` 中给出的是公钥的 hash （ `PubKeyHash` ）而不是直接给出公钥，公钥是在输入脚本中给出的。

另外，这里的主要解释上面的算法中没有提到的指令以及参数，下同。

`DUP` ：把栈顶的元素复制一次，并放到栈顶

`HASH160` ：把栈顶的元素取 hash ，然后把结果再压入栈

`PubKeyHash` ：输出脚本中提供的公钥的 hash 值

`EQUALVERIFY` ：比较栈顶的两个值是否相等

#### 实例

![Merkle proof](~@/images/09/ins_two.png)

同样可以通过在 [Blockstream Explorer](https://blockstream.info) 上更直观的查看结果。

### P2SH ( Pay to Script Hash )

#### 算法表示形式

采用 BIP16 的方案：

**input script:**

…

PUSHDATA(Sig)

…

PUSHDATA(serialized redeemScript)

**output script:**

HASH160

PUSHDATA(redeemScriptHash)

EQUAL

#### 解释

这里， `output script` 提供的不是收款人公钥的 hash ，而是一段脚本的 hash （ `redeemScriptHash` ）

将来花费这个 UTXO 时，需要在 `input script` 中指定这段 `redeemScript` 的内容，同时还需要给出让这个脚本正常执行所需要的签名（ `Sig` ）。

`serialized redeemScript` ：序列化后的执行脚本，在执行之前，需要先反序列化

`redeemScriptHash` ：序列化后的执行脚本的 hash 值

#### 进一步说明

`input script` 要给出一些签名（数目不定）及一段 *序列化* 的 **redeemScript** 。验证分如下两步:

① 验证序列化的 **redeemScript** 是否与 `output script` 中的哈希值匹配?

② 反序列化并执行 **redeemScript** ,验证 `input script` 中给出的签名是否正确?

**redeemScript** 的形式

① `P2PK` 形式

② `P2PKH` 形式

③ 多重签名形式

#### 实例

![Merkle proof](~@/images/09/ins_three.png)

上面的脚本所对应的流程如下：

PUSHDATA(Sig)

PUSHDATA(serialized redeemScript)

HASH160

PUSHDATA(redeemScriptHash)

EQUAL

PUSHDATA(PubKey)

CHECKSIG

需要注意一点，上面也提到了，这里再强调一下，在执行 `serialized redeemScript` 之前，需要先反序列化之后再执行，这需要每个节点自动完成。

#### 多重签名

在原视频的 19:50 左右，提到 `P2SH` 在多重签名中的应用。这里对视频中老师提到的例子做一下解释。注意，这段解释需要结合原视频内容。

老师先举了一个不再推荐使用的多重签名的方式，这种方式没有使用到 `P2SH` ，如下图所示，那这种方式的问题是什么呢？

![Merkle proof](~@/images/09/mul_sig_old.png)

最主要的问题是 `output script` 中需要提供多个 `pubkey` 以及 `M` 和 `N` 的值，这就给支付者增加了负担。

假设有一个购物网站有五个合伙人，他们使用多重签名的方式进行收款，并且规定，需要 3 个签名才能生效。

当一个用户 A 在这个网站购物时，A 作为支付者，需要拿到所有这五个合伙人的 `pubkey` 以及 M（3）和 N （5）的值，因为支付交易是由 A 构造的。上面截图中的交易是 A 完成支付以后，五个合伙人花费 A 支付的比特币的交易， 上图中的 `output script` 是之前 A 所创造的支付交易的输出。

总结来说，这么复杂的 `output script` 需要支付者来构造，很不方便，所以就改成了 `P2SH` 。

而使用 `P2SH` 后的多重签名如下：

![Merkle proof](~@/images/09/mul_sig_new.png)

仍然以上面的购物网站为例，此时，支付者 A 不再需要提供 `pubkey` 、 `M` 和 `N` 等信息，而只需要提供一个脚本的 hash 值即可，所有的验证操作都在 `redeemScript` 脚本中。

如果还是不能理解，那就说明，对于 `input script` 以及 `output script` 分别属于哪个交易没有理解清楚， `input script` 属于当前交易， `output script` 属于币的来源的交易，也就是 `UTXO` 。

#### 使用 P2SH 实现多重签名的实际例子

![Merkle proof](~@/images/09/ins_four.png)

交易的哈希：bc26380619a36e0ecbb5bae4eebf78d8fdef24ba5ed5fd040e7bff37311e180d

### Proof of Burn

![Merkle proof](~@/images/09/proof_of_burn.png)

在输出脚本中有 `RETURN` 命令时，脚本执行永远会返回 FALSE ， `RETURN` 命令是证明销毁比特币的方法。

实际中的主要应用场景有两个：

1. 一些小币种要求必须销毁一定的比特币才能得到相应的虚拟币
2. 向区块链中写入一些不可篡改的内容

### 吐槽

个人觉得这些脚本名字都是 `Pay to xxx` 这种形式不太好，而改成 `从...收款` 更好一点，因为这些脚本的含义就是验证从 `output script` 到 `input script` 的交易，而不是在做支付操作，使用 `Pay to xxx` 怪怪的。
