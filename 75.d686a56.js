webpackJsonp([75],{103:function(s,t,a){s.exports=a(311)},190:function(s,t){s.exports='<section><h1>Progress</h1> <blockquote> <p>进度条。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Progress } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Progress.name, Progress);\n</code></pre> <h2>例子</h2> <p>传入 <code>value</code> 作为进度条的值。可自定义它的线宽</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"20"</span> <span class=hljs-attr>:bar-height</span>=<span class=hljs-string>"5"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-progress</span>&gt;</span>\n</code></pre> <p>可在进度条两侧显示文字</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"60"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"start"</span>&gt;</span>0%<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"end"</span>&gt;</span>100%<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-progress</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>value</td> <td>进度条的值（%）</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>barHeight</td> <td>进度条的线宽（像素）</td> <td>Number</td> <td></td> <td>1</td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>start</td> <td>进度条左侧 DOM</td> </tr> <tr> <td>end</td> <td>进度条右侧 DOM</td> </tr> </tbody> </table></div></section>'},311:function(s,t,a){var n,l;l=a(190),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),l&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=l)}});