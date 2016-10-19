webpackJsonp([38],{101:function(s,t,a){s.exports=a(348)},227:function(s,t){s.exports="<section><h1>Picker</h1> <blockquote> <p>选择器，支持多 slot 联动。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Picker } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(Picker.name, Picker);\n</code></pre> <h2>例子</h2> <p>传入 <code>slots</code>，当被选中的值发生变化时触发 <code>change</code> 事件。<code>change</code> 事件有两个参数，分别为当前 <code>picker</code> 的 vue 实例和各 slot 被选中的值组成的数组</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-picker</span> <span class=hljs-attr>:slots</span>=<span class=hljs-string>\"slots\"</span> <span class=hljs-attr>@change</span>=<span class=hljs-string>\"onValuesChange\"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-picker</span>&gt;</span>\n</code></pre> <pre><code class=language-javascript><span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  methods: {\n    onValuesChange(picker, values) {\n      <span class=hljs-keyword>if</span> (values[<span class=hljs-number>0</span>] &gt; values[<span class=hljs-number>1</span>]) {\n        picker.setSlotValue(<span class=hljs-number>1</span>, values[<span class=hljs-number>0</span>]);\n      }\n    }\n  },\n  data() {\n    <span class=hljs-keyword>return</span> {\n      slots: [\n        {\n          flex: <span class=hljs-number>1</span>,\n          values: [<span class=hljs-string>'2015-01'</span>, <span class=hljs-string>'2015-02'</span>, <span class=hljs-string>'2015-03'</span>, <span class=hljs-string>'2015-04'</span>, <span class=hljs-string>'2015-05'</span>, <span class=hljs-string>'2015-06'</span>],\n          className: <span class=hljs-string>'slot1'</span>,\n          textAlign: <span class=hljs-string>'right'</span>\n        }, {\n          divider: <span class=hljs-literal>true</span>,\n          content: <span class=hljs-string>'-'</span>,\n          className: <span class=hljs-string>'slot2'</span>\n        }, {\n          flex: <span class=hljs-number>1</span>,\n          values: [<span class=hljs-string>'2015-01'</span>, <span class=hljs-string>'2015-02'</span>, <span class=hljs-string>'2015-03'</span>, <span class=hljs-string>'2015-04'</span>, <span class=hljs-string>'2015-05'</span>, <span class=hljs-string>'2015-06'</span>],\n          className: <span class=hljs-string>'slot3'</span>,\n          textAlign: <span class=hljs-string>'left'</span>\n        }\n      ]\n    };\n  }\n};\n</code></pre> <h2><code>change</code> 事件</h2> <p>在 <code>change</code> 事件中，可以使用注册到 <code>picker</code> 实例上的一些方法：</p> <ul> <li>getSlotValue(index)：获取给定 slot 目前被选中的值</li> <li>setSlotValue(index, value)：设定给定 slot 被选中的值，该值必须存在于该 slot 的备选值数组中</li> <li>getSlotValues(index)：获取给定 slot 的备选值数组</li> <li>setSlotValues(index, values)：设定给定 slot 的备选值数组</li> <li>getValues()：获取所有 slot 目前被选中的值（分隔符 slot 除外）</li> <li>setValues(values)：设定所有 slot 被选中的值（分隔符 slot 除外），该值必须存在于对应 slot 的备选值数组中</li> </ul> <h2><code>slots</code></h2> <p>绑定到 <code>slots</code> 属性的数组由对象组成，每个对象都对应一个 slot，它们有如下键名</p> <div class=table-container><table class=table><thead> <tr> <th>key</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>divider</td> <td>对应 slot 是否为分隔符</td> </tr> <tr> <td>content</td> <td>分隔符 slot 的显示文本</td> </tr> <tr> <td>values</td> <td>对应 slot 的备选值数组</td> </tr> <tr> <td>defaultIndex</td> <td>对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0</td> </tr> <tr> <td>textAlign</td> <td>对应 slot 的对齐方式</td> </tr> <tr> <td>flex</td> <td>对应 slot CSS 的 flex 值</td> </tr> <tr> <td>className</td> <td>对应 slot 的类名</td> </tr> </tbody> </table></div><h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>slots</td> <td>slot 对象数组</td> <td>Array</td> <td></td> <td>[]</td> </tr> <tr> <td>showToolbar</td> <td>是否在组件顶部显示一个 toolbar，内容自定义</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>visibleItemCount</td> <td>slot 中可见备选值的个数</td> <td>Number</td> <td></td> <td>5</td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>当 showToolbar 为 true 时，toolbar 中的内容</td> </tr> </tbody> </table></div></section>"},348:function(s,t,a){var l,n;n=a(227),s.exports=l||{},s.exports.__esModule&&(s.exports=s.exports["default"]),n&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=n)}});