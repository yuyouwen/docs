webpackJsonp([70],{135:function(s,t,a){s.exports=a(316)},195:function(s,t){s.exports='<section><h1>Range</h1> <blockquote> <p>滑块，支持自定义步长、区间等。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Range } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Range.name, Range);\n</code></pre> <h2>例子</h2> <p>将一个本地变量与 <code>range</code> 的 <code>value</code> 属性同步即可实现双向绑定</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-range</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"rangeValue"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-range</span>&gt;</span>\n</code></pre> <p>更多的配置项</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-range</span>\n  <span class=hljs-attr>v-model</span>=<span class=hljs-string>"rangeValue"</span>\n  <span class=hljs-attr>:min</span>=<span class=hljs-string>"10"</span>\n  <span class=hljs-attr>:max</span>=<span class=hljs-string>"90"</span>\n  <span class=hljs-attr>:step</span>=<span class=hljs-string>"10"</span>\n  <span class=hljs-attr>:bar-height</span>=<span class=hljs-string>"5"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-range</span>&gt;</span>\n</code></pre> <p>可在滑块两侧显示文字</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-range</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"rangeValue"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"start"</span>&gt;</span>0<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"end"</span>&gt;</span>100<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-range</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>value</td> <td>滑块的值</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>min</td> <td>最小值</td> <td>Number</td> <td></td> <td>0</td> </tr> <tr> <td>max</td> <td>最大值</td> <td>Number</td> <td></td> <td>100</td> </tr> <tr> <td>step</td> <td>步长</td> <td>Number</td> <td></td> <td>1</td> </tr> <tr> <td>disabled</td> <td>是否禁用</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>barHeight</td> <td>滑槽的线宽（像素）</td> <td>Number</td> <td></td> <td>1</td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>start</td> <td>滑块左侧 DOM</td> </tr> <tr> <td>end</td> <td>滑块右侧 DOM</td> </tr> </tbody> </table></div></section>'},316:function(s,t,a){var n,l;l=a(195),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),l&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=l)}});