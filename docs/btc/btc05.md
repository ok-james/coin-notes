# UTXO

Unspent Transaction Output，未花费交易输出。

是当前整个区块链中所有未花费的交易的输出，未花费的 BTC 的数量肯定就是当前已挖出的所有比特币的数量。这个数据结构主要是为了确定当前拥有 BTC 的地址信息，用于快速判断交易的合法性。一般情况下，全节点会在内存中缓存完整的 UTXO ，用于快速验证交易。

一个交易输入的 BTC 数量要等于该交易输出的 BTC 数量。

# 激励机制

第一个激励机制是出块奖励，也就是铸币交易，第二个是交易费的奖励。

# 出块奖励减半

每产生 21 万个区块，就把出块奖励减半一次，每个区块大约 10 分钟产生一个，由此可知，大约每 4 年减半一次。

# 挖矿难度

每隔 2016 个区块，就要调整一下难度，从而保持出块时间在 10 分钟左右。

# 挖矿

正常情况下，挖矿就是不断调整 block header 中的 `nonce` 字段，但是由于现在挖矿难度的增加，单纯修改 `nonce` 字段的值可能已经无法完成工作量证明，此时，可以修改交易列表中的 `铸币交易` 的 `script` 字段。

![Merkle proof](~@/images/05/input.png)

而在原始的交易数据中，就可以看到对应的就是 `script` 字段：

![Merkle proof](~@/images/05/script.png)

由于这是一个铸币交易，所以 `inputs` 中的 `script` 脚本不会执行，可以是非法的，由下图可以证明：

![Merkle proof](~@/images/05/script_invalid.png)

切换到 *ASM* 以后，显示的是无效的 *ASM* 。

# 输入和输出脚本

在比特币中，输入和输出都是由脚本来指定的，比特币中验证交易的合法性，就是通过 `Input Scripts` 和 `Output Scripts` 配对执行的，注意这里的 `Output Scripts` 指的是为本次交易提供币的那个交易中的 `Output Scripts` ，而不是指本次交易的 `Output Scripts` 。 `Input Scripts` 是指本次交易的 `Input Scripts` 。

# 计算 nonce

## Bernoulli trial

一个有二元结果的随机实验（a random experiment with binary outcome）

## Bernoulli process

一系列独立的伯努利试验（a sequence of independent Bernoulli trials）

性质是无记忆性，也就是前后两次 nonce 的计算没有相关性，是相互独立的。

## exponential distribution 指数分布

比特币的出块时间服从指数分布。视频 38:00 左右。

# 比特币总量

2100 万

比特币是通过挖矿保证安全性的

# 区块

每个区块的大小不能超过 1M 。

# zero confirmation 零确认

这个是指无需等待交易打包进某个区块，只需确认交易的合法性，就可以认为交易成功。这里举一个电商的例子，假设 A 在一个购物网站用比特币买了一件实物商品，那么商家只需要验证这个交易的合法性后，即可认为交易完成，因为实物商品天然具有延迟的特性，一般在下单以后，过几个小时甚至几天，才会发货，等发货的时候再确认一下这个交易即可。
