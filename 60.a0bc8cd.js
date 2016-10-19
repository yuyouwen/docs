webpackJsonp([60],{108:function(s,a,n){s.exports=n(326)},205:function(s,a){s.exports='<section><h1>Spinner</h1> <blockquote> <p>加载动画，可指定显示类型、尺寸和颜色。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Spinner } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Spinner.name, Spinner);\n</code></pre> <h2>例子</h2> <p>指定类型</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"snake"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"double-bounce"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"triple-bounce"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"fading-circle"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- 或者接受传入类型的序号 --&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"0"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"1"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n</code></pre> <p>指定颜色</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>color</span>=<span class=hljs-string>"#26a2ff"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>color</span>=<span class=hljs-string>"rgb(100, 100, 100)"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>color</span>=<span class=hljs-string>"yellow"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n</code></pre> <p>指定尺寸</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-spinner</span> <span class=hljs-attr>:size</span>=<span class=hljs-string>"60"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-spinner</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>type</td> <td>显示类型，提供四种风格，可以指定名称或者序号</td> <td>String、Number</td> <td>snake <br> double-bounce <br> triple-bounce <br> fading-circle</td> <td>snake</td> </tr> <tr> <td>color</td> <td>颜色，接受 hex、rgb 等颜色值</td> <td>String</td> <td></td> <td>#ccc</td> </tr> <tr> <td>size</td> <td>尺寸，单位 px</td> <td>Number</td> <td></td> <td>28</td> </tr> </tbody> </table></div></section>'},326:function(s,a,n){var t,p;p=n(205),s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]),p&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=p)}});