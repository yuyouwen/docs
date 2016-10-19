webpackJsonp([115],{122:function(s,a,t){s.exports=t(271)},150:function(s,a){s.exports='<section><h1>Field</h1> <blockquote> <p>表单编辑器。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Field } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Field.name, Field);\n</code></pre> <h2>例子</h2> <p>基础用法</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"用户名"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"请输入用户名"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"邮箱"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"请输入邮箱"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"email"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"密码"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"请输入密码"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"password"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"手机号"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"请输入手机号"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"tel"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"网站"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"请输入网址"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"url"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"数字"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"请输入数字"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"number"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"生日"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"请输入生日"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"date"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"自我介绍"</span> <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"自我介绍"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"textarea"</span> <span class=hljs-attr>rows</span>=<span class=hljs-string>"4"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n</code></pre> <p>设置校验状态</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"邮箱"</span> <span class=hljs-attr>state</span>=<span class=hljs-string>"success"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"邮箱"</span> <span class=hljs-attr>state</span>=<span class=hljs-string>"error"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"邮箱"</span> <span class=hljs-attr>state</span>=<span class=hljs-string>"warning"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n</code></pre> <p>自定义内容（例如添加验证码）</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-field</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"验证码"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>img</span> <span class=hljs-attr>src</span>=<span class=hljs-string>"../assets/100x100.png"</span> <span class=hljs-attr>height</span>=<span class=hljs-string>"45px"</span> <span class=hljs-attr>width</span>=<span class=hljs-string>"100px"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-field</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>type</td> <td>输入框类型</td> <td>String</td> <td>text, number, email, url, tel, date, datetime, password, textarea</td> <td>text</td> </tr> <tr> <td>label</td> <td>标签</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>value</td> <td>绑定表单输入值</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>rows</td> <td>类型为 textarea 时可指定高度（显示行数）</td> <td>Number</td> <td></td> <td></td> </tr> <tr> <td>placeholder</td> <td>占位内容</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>readonly</td> <td>readonly</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>disabled</td> <td>disabled</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>state</td> <td>校验状态</td> <td>String</td> <td>error, success, warning</td> <td></td> </tr> <tr> <td>attr</td> <td>设置原生属性，例如 <code>:attr=&quot;{ maxlength: 10 }&quot;</code></td> <td>Object</td> <td></td> <td></td> </tr> </tbody> </table></div><h2>Slot</h2> <div class=table-container><table class=table><thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>显示的 HTML 内容</td> </tr> </tbody> </table></div></section>'},271:function(s,a,t){var l,n;n=t(150),s.exports=l||{},s.exports.__esModule&&(s.exports=s.exports["default"]),n&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=n)}});