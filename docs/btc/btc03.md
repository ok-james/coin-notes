区块链是一个使用 `哈希指针`（hash pointers） 所连接的链表。这样可以做到防篡改。只需要知道最新一个区块的哈希值，就可以反向验证整个区块链是否有被篡改过。

创世区块，最近产生的区块。

## 区块结构

一个区块分成 `区块头（block header）` 和 `区块体（block body）` 两部分，对于 `全节点` 来说，会存储所有这两部分，而对于 `轻节点` 来说，比如手机端的应用，就只会存储 `区块头` ，而 `轻节点` 对某个交易的验证，需要依赖于 `全节点` ，以及 `区块头` 中的 `梅克尔树` 的根哈希值来进行证明，称为 Merkle proof。

## 梅克尔树 Merkle tree

![Merkle tree](~@/images/btc/merkle_tree.png)

最下面一层是交易的数据块，上面的都是哈希指针（hash pointer），这个用于判断交易的数据块是否被修改过，由于这是树结构，计算的效率更高。

这个示意图是单个区块中的所有交易计算出的结果。

### 用途

提供梅克尔证明（Merkle proof）。

![Merkle proof](~@/images/btc/merkle_proof.png)

这个过程一般用于 `轻节点` 证明某个交易是否在一个区块中。

以上图为例，来简单说明一下，假设 `轻节点` 需要证明上图中黄色背景的交易确实在一个区块中，那么，

1. `轻节点` 首先需要拿到这个交易的信息，也就是黄色标记的交易。
2. 同时，需要向 `全节点` 请求图中红色标记的哈希值。
3. 图中绿色标记的哈希值是 `轻节点` 自己计算出来的。
4. 一直向上计算，最终计算出该梅克尔树的根哈希值，与轻节点中存储的节点的根哈希值进行比较，如果值相同，则说明黄色的交易确实在该区块中。
