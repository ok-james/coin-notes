主要用到哈希（Cryptographic hash function）和签名

## 哈希

### 特性

1. 哈希碰撞

   x ≠ y ，但是 Hash(x) = Hash(y)

   抗碰撞（collision resistance），不是不会发生碰撞，而是难以发生碰撞。

2. 单向的（hiding），不可逆的，也就是无法从输出的哈希值反推出输入，hiding 这个特性的前提是输入的取值范围要足够大，也要足够均匀，比如假设，只有三个输入，那么即使使用 hiding 的特性，但是只要知道这三个输入，以及哈希函数，就可以算出输出，然后一对比就可以知道结果了。
   如果原始输入的取值范围不够大的话，可以在原始输入的后面拼接一个随机数，从而加大取值范围。
3. 难题友好（puzzle friendly），挖矿的过程，没有捷径，只能通过大量的工作（工作量证明 proof of work），计算很难，验证很容易（difficult to solve, but easy to verify）。

### 比特币使用的哈希函数

SHA-256

Secure Hash Algorithm

## 签名

在比特币中，一个公私钥对，就代表一个账户。

公钥 / 私钥对，非对称加密算法（asymmetric encryption algorithm）。

加密用的是接收人的公钥，然后将消息发送给接收人，接收人再用私钥进行解密。

签名用的是私钥，验证签名用的是同一个公私钥对中的公钥。

生成公私钥的过程需要有一个好的随机源（a good source of randomness）。
