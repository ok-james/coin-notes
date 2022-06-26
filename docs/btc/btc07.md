H(block header) ≤ target

target 值越小，挖矿难度越大

使用的 Hash 算法是 SHA-256，可能的取值范围是 2^256 。

## 挖矿难度 difficulty

difficulty = difficulty_1_target / target

其中 difficulty_1_target 是指挖矿难度为 1 时的目标阈值，这是一个很大的常数值。所以 target 与 difficulty 成反比。

## 调整难度

每 2016 个区块调整一次难度，也就是大概 14 天。

调整的公式： target = target * (actual time / expected time)

其中： expected time = 2016 * 10

actual time = 产生 2016 区块实际花费的时间

实际代码当中，上调或者下调都是 4 倍的限制。

## 恶意节点

如果存在恶意节点，不调整挖矿难度，那么诚实的节点是不认可这个节点所产生的区块的。

## 需要注意的指标

注意比特币的挖矿难度的变化，如果挖矿难度大幅变低，这不是一个好的信号。

难度等指标，可以在大多数区块链浏览器的 **图表** 等类似菜单中找到。
