### 问题一：转账交易的时候，如果接收者不在线，会怎么样？

这个时候不需要接收者在线，在区块链上的转账，就是支付者创建一个转账交易即可。

### 问题二：假设一个全节点收到一个转账交易，有没有可能这个交易的收款地址是这个全节点所不知道的？

可能的。比特币账户在创建的时候，不需要通知其他人，只需要创建一个公私钥对即可，只有在所对应的收款地址第一次收到钱之后，节点才知道这个收款地址的存在。

### 问题三：如果账户的私钥丢失了，该怎么办？

没有办法。账户上的钱就变成了死钱，永远都取不出来了。所以，

私钥一定要保管好！

私钥一定要保管好！

私钥一定要保管好！

另外，在线的中心化交易所和某些钱包，会帮我们保管私钥，如果忘记私钥，可以通过身份认证重新获得私钥，但是，这不一定是安全的，历史上有很多交易所泄露私钥的事情发生。

### 问题四：如果私钥泄露该怎么办？

应该马上把泄露私钥的账户上的虚拟币转移到另一个账户上。

### 问题五：如果转账的时候，写错了地址该怎么办？

没有办法。没有办法取消已经发布的交易。

### 问题六：如果 OP_RETURN 这个命令无条件的返回错误，那为什么其所述的交易可以验证通过？

需要特别注意， `OP_RETURN` 这个命令是写在当前交易的 `output script` 中，在验证当前交易的合法性时，不会验证当前交易的 `output script` ，而是将当前交易的 `input script` 与前一次交易的 `output script` 拼接到一起执行。

### 问题七：一个矿工 A 发布了一个区块后，另一个矿工 B 可以偷拿这个区块作为自己产生的区块发布吗？

这样做是无意义的。因为在一个区块中，有一个特殊的交易 `coinbase` ，其指向的收款地址是矿工 A 的地址，如果矿工 B 要把这个收到地址改成其自己的地址，那么就要修改 `coinbase` 交易，从而要重新计算 `nonce` 。

### 问题八：事先如何确定交易费会给到哪个矿工？

这个不需要事先确定，而是在挖出一个新的区块后确定的， total inputs 的金额减去 total outputs 的金额的差值就是矿工收到的交易费。