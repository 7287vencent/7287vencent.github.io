(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{669:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"题目-52-两个链表的第一个公共节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目-52-两个链表的第一个公共节点"}},[t._v("#")]),t._v(" 题目 52. 两个链表的第一个公共节点")]),t._v(" "),a("h3",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/leetbook/read/illustrate-lcof/",target:"_blank",rel:"noopener noreferrer"}},[t._v("来源：画解剑指offer"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"题目描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述-2"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("输入两个链表，找出它们的第一个公共节点。")]),t._v(" "),a("p",[t._v("如下面的两个链表：")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/leetcode/160_statement.png")}})]),t._v(" "),a("p",[t._v("在节点 c1 开始相交。")]),t._v(" "),a("p",[t._v("示例 1：\n"),a("img",{attrs:{src:t.$withBase("/leetcode/160_example_1.png")}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("输入：intersectVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" skipA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" skipB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\n输出：Reference "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" the node "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n输入解释：相交节点的值为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" （注意，如果两个列表相交则不能为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("）。从各自的表头开始算起，链表 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" 为 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("，链表 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" 为 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("。在 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" 中，相交节点前有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 个节点；在 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" 中，相交节点前有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" 个节点。\n")]),a("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[a("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1607010084127-81632"}},[t._v("success")]),a("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3\n\n输出：Reference of the node with value = 8\n\n输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1607010084127-81632","data-mdic-notify-delay":"200","data-mdic-copy-fail-text":"file",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;console.log('time->',d);e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])])])]),a("p",[t._v("示例 2：")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/leetcode/160_example_2.png")}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("输入：intersectVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" skipA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" skipB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n输出：Reference "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" the node "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n输入解释：相交节点的值为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" （注意，如果两个列表相交则不能为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("）。从各自的表头开始算起，链表 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" 为 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("，链表 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" 为 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("。在 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" 中，相交节点前有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" 个节点；在 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" 中，相交节点前有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 个节点。\n")]),a("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[a("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1607010084127-69567"}},[t._v("success")]),a("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n\n输出：Reference of the node with value = 2\n\n输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1607010084127-69567","data-mdic-notify-delay":"200","data-mdic-copy-fail-text":"file",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;console.log('time->',d);e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])])])]),a("p",[t._v("示例  3：")]),t._v(" "),a("p",[a("img",{attrs:{src:t.$withBase("/leetcode/160_example_3.png")}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("输入：intersectVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" skipA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" skipB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n输出："),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n输入解释：从各自的表头开始算起，链表 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" 为 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("，链表 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" 为 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("。由于这两个链表不相交，所以 intersectVal 必须为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("，而 skipA 和 skipB 可以是任意值。\n解释：这两个链表不相交，因此返回 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("。\n")]),a("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[a("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1607010084129-6281"}},[t._v("success")]),a("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n输出：null\n输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。\n解释：这两个链表不相交，因此返回 null。\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1607010084129-6281","data-mdic-notify-delay":"200","data-mdic-copy-fail-text":"file",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;console.log('time->',d);e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])])])]),a("p",[t._v("注意：")]),t._v(" "),a("ul",[a("li",[t._v("如果两个链表没有交点，返回 null。")]),t._v(" "),a("li",[t._v("在返回结果后，两个链表仍须保持原有的结构。")]),t._v(" "),a("li",[t._v("可假定整个链表结构中没有循环。")]),t._v(" "),a("li",[t._v("程序尽量满足 O(n)时间复杂度，且仅用 O(1) 内存。")]),t._v(" "),a("li",[t._v("本题与 主站 160 题 相同。")])]),t._v(" "),a("h3",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),a("h4",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[a("code",[t._v("标签：双指针链表遍历")])]),t._v(" "),a("ul",[a("li",[t._v("分别构造 2 个指针去遍历 2 个链表，无论哪个指针到尾部时，让其重新回到对方的头部，最终会在第一个公共节点相遇，如果没有，则会在 null 处相遇")]),t._v(" "),a("li",[t._v("时间复杂度：设 A 链表非公共长度为 m，B 链表非公共长度为 n，公共部分为 b，则复杂度为 O(m+n+b)O(m+n+b)，空间复杂度：O(1)O(1)")])]),t._v(" "),a("h4",{attrs:{id:"算法流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法流程"}},[t._v("#")]),t._v(" 算法流程")]),t._v(" "),a("ol",[a("li",[t._v("使用 "),a("code",[t._v("headA")]),t._v(" 和 "),a("code",[t._v("headB")]),t._v(" 初始化 2 个指针 "),a("code",[t._v("curA")]),t._v(" 和 "),a("code",[t._v("curB")]),t._v("，用来遍历使用")]),t._v(" "),a("li",[t._v("进行循环遍历，直到 "),a("code",[t._v("curA")]),t._v(" 和 "),a("code",[t._v("curB")]),t._v(" 相同时结束")]),t._v(" "),a("li",[t._v("遍历过程中如果 "),a("code",[t._v("curA")]),t._v(" 到尾部则将其重新放回头部 "),a("code",[t._v("headB")]),t._v("，如果 "),a("code",[t._v("curB")]),t._v(" 到尾部则将其重新放回头部 "),a("code",[t._v("headA")])]),t._v(" "),a("li",[t._v("循环结束时在第一个公共节点相遇，返回该节点 "),a("code",[t._v("curA")])])]),t._v(" "),a("h3",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} headA\n * @param {ListNode} headB\n * @return {ListNode}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getIntersectionNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("headA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" curA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headA\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" curB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" headB\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" curB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    curA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" curA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" headB\n    curB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" curB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" headA\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" curA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),a("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[a("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1607010084134-79420"}},[t._v("success")]),a("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} headA\n * @param {ListNode} headB\n * @return {ListNode}\n */\nvar getIntersectionNode = function (headA, headB) {\n  let curA = headA\n  let curB = headB\n\n  while (curA !== curB) {\n    curA = curA ? curA.next : headB\n    curB = curB ? curB.next : headA\n  }\n\n  return curA\n};\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1607010084134-79420","data-mdic-notify-delay":"200","data-mdic-copy-fail-text":"file",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;console.log('time->',d);e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("copy")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);