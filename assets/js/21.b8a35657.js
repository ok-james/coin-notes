(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{474:function(v,_,t){"use strict";t.r(_);var e=t(65),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[v._v("#")]),v._v(" 定义")]),v._v(" "),t("p",[v._v("区块链最初是一条链，但是由于分叉，变成了两条或多条链。")]),v._v(" "),t("h2",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[v._v("#")]),v._v(" 原因")]),v._v(" "),t("p",[v._v("造成分叉的原因主要有：")]),v._v(" "),t("ol",[t("li",[v._v("state fork：挖矿时，由于两个或多个节点同时发布区块而造成的临时性分叉，也就是，不同节点对当前区块链的状态产生了意见分歧\n"),t("ol",[t("li",[v._v("forking attack：分叉攻击，是 state fork 的一种，只不过是人为恶意造成的")])])]),v._v(" "),t("li",[v._v("protocol fork：比特币协议修改所造成的意见分歧，可能会导致区块链上不同节点之间运行着不同的协议，从而造成分叉\n"),t("ol",[t("li",[v._v("硬分叉（hard fork）")]),v._v(" "),t("li",[v._v("软分叉（soft fork）")])])])]),v._v(" "),t("h2",{attrs:{id:"硬分叉和软分叉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬分叉和软分叉"}},[v._v("#")]),v._v(" 硬分叉和软分叉")]),v._v(" "),t("h3",{attrs:{id:"硬分叉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬分叉"}},[v._v("#")]),v._v(" 硬分叉")]),v._v(" "),t("p",[v._v("造成一条区块链永久性分叉成两条或多条链。在每条链上，都各自具有其对应的加密货币。")]),v._v(" "),t("p",[v._v("在硬分叉之后，需要通过一个标识将多条链区分开来，才能保证硬分叉之后的链可以正常运行，否则会为某些攻击提供便利，比如回放攻击等。ETH 和 ETC 硬分叉后，就是使用了 chain ID 这个标识来区分不同的两条链。")]),v._v(" "),t("h3",{attrs:{id:"软分叉"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软分叉"}},[v._v("#")]),v._v(" 软分叉")]),v._v(" "),t("p",[v._v("软分叉不会造成系统永久性的分叉。")]),v._v(" "),t("h3",{attrs:{id:"个人总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#个人总结"}},[v._v("#")]),v._v(" 个人总结")]),v._v(" "),t("p",[v._v("不知道大家在看视频的时候，有没有注意到，老师在举硬分叉和软分叉的例子时，都有一个前提条件，就是发布新协议后， "),t("strong",[v._v("接受新协议的节点的算力 "),t("code",[v._v("大于")]),v._v(" 不接受新协议的节点的算力")]),v._v(" 。")]),v._v(" "),t("p",[v._v("这里，先约定两个术语，方便下面的讨论：接受新协议的节点称为 "),t("code",[v._v("new nodes")]),v._v(" ，不接受新协议的节点称为 "),t("code",[v._v("old nodes")]),v._v(" 。")]),v._v(" "),t("p",[v._v("对于硬分叉和软分叉，给出一个 "),t("strong",[v._v("通用")]),v._v(" 的总结：发布一个新特性后，先要确定算力集中在 "),t("code",[v._v("new nodes")]),v._v(" 和 "),t("code",[v._v("old nodes")]),v._v(" 的哪一侧，然后，判断另一侧的协议是否兼容（也就是是否认可）算力强的那一侧的协议，如果兼容，就是 "),t("code",[v._v("软分叉")]),v._v(" ，否则，就是 "),t("code",[v._v("硬分叉")]),v._v(" 。")]),v._v(" "),t("h4",{attrs:{id:"举个例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[v._v("#")]),v._v(" 举个例子")]),v._v(" "),t("p",[v._v("按照视频 09:10 的内容来继续接下来的讨论。在视频中，老师举的例子是把 block size limit 从 1M 增加到 4M ，并且有一个前提假设，就是 "),t("code",[v._v("new nodes")]),v._v(" 的算力大于 "),t("code",[v._v("old nodes")]),v._v(" ，最终，得出的结论是会造成 "),t("code",[v._v("硬分叉")]),v._v(" 。")]),v._v(" "),t("p",[v._v("那如果修改协议以后， "),t("code",[v._v("old nodes")]),v._v(" 的算力大于 "),t("code",[v._v("new nodes")]),v._v(" 的话，结果会怎样呢？结果是，会造成 "),t("code",[v._v("软分叉")]),v._v(" ，并且会回退到协议修改之前的状态。")]),v._v(" "),t("h4",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("协议修改后，最终会造成 "),t("code",[v._v("硬分叉")]),v._v(" 还是 "),t("code",[v._v("软分叉")]),v._v(" ，是没有绝对的答案的，重点是算力的归属。一般是假设协议修改后，愿意升级协议的 "),t("code",[v._v("new nodes")]),v._v(" 的算力更强，在这一前提下，来确定是 "),t("code",[v._v("硬分叉")]),v._v(" 还是 "),t("code",[v._v("软分叉")]),v._v(" 。")])])}),[],!1,null,null,null);_.default=a.exports}}]);