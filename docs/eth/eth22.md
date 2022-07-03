# 定义

- 智能合约是运行在区块链上的一段代码，代码的逻辑定义了合约的内容
- 智能合约的帐户保存了合约当前的运行状态
    - balance：当前余额
    - nonce：交易次数
    - code：合约代码
    - storage：存储，数据结构是一棵MPT
- Solidity 是智能合约最常用的语言，语法上与 JavaScnpt 很接近

# 外部账户调用智能合约

![invoke contract](~@/images/eth/eth22/invoke_contract.png)

`SENDER ADDRESS` ：发送调用的外部账户的地址

`TO CONTRACT ADDRESS` ：被调用的合约的地址

`VALUE` ：发起调用时，转账到合约的以太币的数量

`GAS USED` ：该调用花费的汽油费

`GAS PRICE` ：单位汽油的价格

`GAS LIMIT` ：对于该交易，外部账户最多愿意支付多少汽油

`TX DATA` ：被调用的函数以及函数的参数都是在该字段中给出

# 一个合约调用另一个合约

## 1. 直接调用

![invoke directly](~@/images/eth/eth22/invoke_direct.png)

## 2. 使用 address 类型的 call() 函数

![address call](~@/images/eth/eth22/address_call.png)

## 3. 代理调用 delegatecall()

![delegate call](~@/images/eth/eth22/delegate_call.png)

# 特殊函数

## fallback函数

![fallback fn](~@/images/eth/eth22/fallback_fn.png)

# 智能合约的创建和运行

- 智能合约的代码写完后，要编译成 bytecode
- 创建合约：外部帐户发起一个转账交易到 0x0 的地址
    - 转账的金额是 0 ，但是要支付汽油费
    - 合约的代码放在 data 域里
- 智能合约运行在EVM (Ethereum Virtual Machine) 上
- 以太坊是一个交易驱动的状态机
    - 调用智能合约的交易发布到区块链上后，每个矿工都会执行这个交易，从当前状态确定性地转移到下一个状态

# 汽油费（gas fee）

- 智能合约是个图灵完备的编程模型（Turing-complete Programming Model）
    - 出现死循环怎么办？
- 执行合约中的指令要收取汽油费，由发起交易的人来支付

  ![txdata struct](~@/images/eth/eth22/txdata_struct.png)

    - AccountNonce：交易的序号，防止重放攻击
    - Price：单位汽油的价格
    - GasLimit：愿意支付的最大汽油量
    - Recipient：收款人的地址
    - Amount：转账金额，把 Amount 数量的钱转给 Recipient
    - Payload：前面提到的 data 域，表示调用的函数以及函数参数
- EVM 中不同指令消耗的汽油费是不一样的
    - 简单的指令很便宜，复杂的或者需要存储状态的指令就很贵

# 错误处理

- 智能合约中不存在自定义的 try-catch 结构
- 一旦遇到异常，除特殊情况外，本次执行操作全部回滚
- 可以抛出错误的语句
  - assert（bool condition）：如果条件不满足就抛出——用于内部错误
  - require（bool condition）：如果条件不满足就抛出——用于输入或者外部组件引起的错误。

      ```js
      function bid() public payable {
          // 对于能接受以太币的函数，关键字 payable 是必须的。
      
          // 拍卖尚未结束
          require(now <= auctionEnd)
      ```

  - revert()：终止运行并回滚状态变动。

# 嵌套调用

- 智能合约的执行具有原子性：执行过程中出现错误，会导致回滚
- 嵌套调用是指一个合约调用另一个合约中的函数
- 嵌套调用是否会触发连锁式的回滚?
    - 如果被调用的合约执行过程中发生异常,会不会导致发起调用的。这个合约也跟着一起回滚?
    - 有些调用方法会引起连锁式的回滚,有些则不会
- 一个合约直接向一个合约帐户里转账,没有指明调用哪个函数,仍然会引起嵌套调用

# Block Header

块头中有两个字段与汽油费相关：

`GasUsed` ：当前区块中所有交易花费的汽油费的总和

`GasLimit` ：当前区块中能够消耗的所有汽油费的上限，用于限制单个区块中交易的数量。这个值不是固定的，而是可以在上一个区块的 `GasLimit` 的基础上上调或者下调 1/1024 。

# 问题与解答

### 1. 应该是先挖矿还是先执行交易与智能合约？

应该先执行交易与智能合约，因为在块头中有 `状态树` 、 `交易树` 和 `收据树` 的三个根哈希值，所以必须先通过执行交易和智能合约，才能确定这三棵树的最终状态，从而计算出三个根哈希值，最后，再计算 nonce ，开始挖矿。

### 2. 由于全节点在验证区块合法性时无法得到汽油费，是否会促使全节点不对区块进行验证？

首先，这会危机区块链的安全，因为协议要求全节点必须独立验证区块的合法性，如果全节点不验证的话，就可能会有非法的交易存在，从而有恶意的节点才无法篡改区块链上内容。

全节点必须验证发布的区块，因为如果不执行的话，全节点本地保存的三棵树的内容与其他节点就不一致了，从而就无法继续挖矿了，或者就算继续挖矿，得到的区块也是非法的。

### 3. 执行失败的交易与智能合约需要发布到区块链上吗？

需要，因为执行失败的交易与智能合约也需要扣除汽油费，如果不将其发布到区块链上，就无法达成扣除该账户对应汽油费的共识了，所以失败的也要发布。这样看来，发布到区块链上的交易不一定是成功执行的。

# Receipt 数据结构

![receipt struct](~@/images/eth/eth22/receipt_struct.png)

`Status` ：收据对应的交易的执行结果是怎样的。

# 智能合约可以获得的区块信息

- `block.blockhash(uint blockNumber) returns (bytes32)` ：给定区块的哈希——仅对最近的256个区块有效而不包括当前区块
- `block.coinbase (address)` ：挖出当前区块的矿工地址
- `block.difficulty (uint)` ：当前区块难度
- `block.gaslimit (uint)` ：当前区块 gas 限额
- `block.number (uint)` ：当前区块号
- `block.timestamp (uint)` ：自 unix epoch 起始当前区块以秒计的时间截

# 智能合约可以获得的调用信息

- `msg.data (bytes )` ：完整的 calldata
- `msg.gas (uint)` ：剩余 gas
- `msg.sender (address)` ：消息发送者(当前调用)
- `msg.sig (bytes4)` ：calldata 的前 4 字节(也就是函数标识符)
- `msg.value (uint)` ：随消息发送的 wei 的数量
- `now (uint)` ：目前区块时间戳( `block.timestamp` )
- `tx.gasprice (uint)` ：交易的 gas 价格
- `tx.origin (address)` ：交易发起者(完全的调用链)

消息发送者与交易发起者的区别是：通过一个例子来说明一下，假设 A 是外部账户，调用了合约 C1 的 f1 函数， f1 函数又调用了合约 C2 的 f2 函数，那么对于 f2 来说，消息发送者是 C1 ，而交易发起者是 A 。

# 地址类型 address

![address type](~@/images/eth/eth22/address_type.png)

所有智能合约均可显式地转换成地址类型。

## 解释

### &lt;address>.transfer(uint256 amount)

这个函数的含义是从调用该方法的智能合约中向 `<address>` 这个地址转入 `amount` 数量的虚拟币。

# 三种发送 ETH 的方式

- &lt;address>.transfer(uint256 amount)
- &lt;address>.send(uint256 amount) returns (bool)
- &lt;address>.call.value(uint256 amount)()

`transfer` 和 `send` 是专门用于转账的方法， `transfer` 会导致连锁式回滚，而调用 `send` 时一旦抛出异常，不会引起连锁式回滚，而是返回 `false` 。

`call` 本身不是用于转账的，但是可以用于调用其他函数，从而可以引起转账。

另外， `transfer` 和 `send` 在调用时，是发送固定金额的汽油费，而 `call` 在调用时，是发送剩余的所有汽油费。
