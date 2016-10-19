webpackJsonp([74],{100:function(s,a,t){s.exports=t(312)},191:function(s,a){s.exports='<section><h1>Navbar</h1> <blockquote> <p>顶部选项卡，与 <a v-link="{path:\'/tabbar\'}">Tabbar</a> 类似，依赖 tab-item 组件。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Navbar, TabItem } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Navbar.name, Navbar);\nVue.component(TabItem.name, TabItem);\n</code></pre> <h2>例子</h2> <p>搭配 <a v-link="{path:\'/tab-container\'}">tab-container</a> 组件使用</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-navbar</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"page-part"</span> <span class=hljs-attr>:selected.sync</span>=<span class=hljs-string>"selected"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"1"</span>&gt;</span>选项一<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"2"</span>&gt;</span>选项二<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"3"</span>&gt;</span>选项三<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-navbar</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- tab-container --&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container</span> <span class=hljs-attr>:active.sync</span>=<span class=hljs-string>"selected"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"1"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 10"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'内容 \' + n"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 4"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'测试 \' + n"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"3"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 6"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'选项 \' + n"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container</span>&gt;</span>\n</code></pre> <h2>API</h2> <h3>navbar</h3> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>fixed</td> <td>固定在页面顶部</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>selected</td> <td>返回当前选中的 tab-item 的 id</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h3>tab-item</h3> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>id</td> <td>选中后的返回值</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <h3>navbar</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>内容</td> </tr> </tbody> </table></div><h3>tab-item</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>显示文字</td> </tr> <tr> <td>icon</td> <td>icon 图标</td> </tr> </tbody> </table></div></section>'},312:function(s,a,t){var n,l;l=t(191),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),l&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=l)}});