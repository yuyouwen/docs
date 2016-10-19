webpackJsonp([25],{240:function(t,a){t.exports='<section><h1>tab-container</h1> <blockquote> <p>A switching panel.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { TabContainer, TabContainerItem } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(TabContainer.name, TabContainer);\nVue.component(TabContainerItem.name, TabContainerItem);\n</code></pre> <h2>Example</h2> <p>Only the <code>&lt;mt-tab-container-item&gt;</code> whose <code>id</code> equals the <code>active</code> attribute in <code>mt-tab-container</code> will be displayed.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container</span> <span class=hljs-attr>:active.sync</span>=<span class=hljs-string>"active"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab-container1"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 10"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'tab-container1 \' + $index"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab-container2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 5"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'tab-container2 \' + $index"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab-container3"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 7"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'tab-container3 \' + $index"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container</span>&gt;</span>\n</code></pre> <h2>API</h2> <h3>tab-container</h3> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>active</td> <td>the <code>id</code> of the active tab</td> <td>*</td> <td></td> <td></td> </tr> <tr> <td>swipeable</td> <td>swipe effect</td> <td>Boolean</td> <td></td> <td>false</td> </tr> </tbody> </table></div><h3>tab-container-item</h3> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>id</td> <td>id of each item</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <h3>tab-container</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>content of the container. Made up of several <code>tab-container-item</code>s</td> </tr> </tbody> </table></div><h3>tab-container-item</h3> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>content of each item</td> </tr> </tbody> </table></div></section>'},361:function(t,a,s){var n,e;e=s(240),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),e&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=e)},51:function(t,a,s){t.exports=s(361)}});