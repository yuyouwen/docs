webpackJsonp([8],{258:function(t,s){t.exports="<section><h1>Toast</h1> <blockquote> <p>A brief toast box. Custom location, duration and style supported.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Toast } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n</code></pre> <h2>Example</h2> <p>Basic Usage</p> <pre><code class=language-javascript>Toast(<span class=hljs-string>'Upload Complete'</span>);\n</code></pre> <p>To configure more options, invoke <code>Toast</code> with an object</p> <pre><code class=language-javascript>Toast({\n  message: <span class=hljs-string>'Upload Complete'</span>,\n  position: <span class=hljs-string>'bottom'</span>,\n  duration: <span class=hljs-number>5000</span>\n});\n</code></pre> <p>If you need to put an icon font above the text, just add another key named <code>iconClass</code> and set it to whatever icon class you wish to use(please prepare icon fonts your self)</p> <pre><code class=language-javascript>Toast({\n  message: <span class=hljs-string>'operation success'</span>,\n  iconClass: <span class=hljs-string>'icon icon-success'</span>\n});\n</code></pre> <p>The <code>Toast</code> function returns a <code>Toast</code> instance, which has a <code>close</code> method to close the <code>Toast</code> manually.</p> <pre><code class=language-javascript><span class=hljs-keyword>let</span> instance = Toast(<span class=hljs-string>'Upload Complete'</span>);\nsetTimeout(() =&gt; {\n  instance.close();\n}, <span class=hljs-number>2000</span>);\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>message</td> <td>toast text content</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>position</td> <td>location of the toast</td> <td>String</td> <td>'top'<br>'bottom'<br>'middle'</td> <td>'middle'</td> </tr> <tr> <td>duration</td> <td>time duration(in millisecond)</td> <td>Number</td> <td></td> <td>3000</td> </tr> <tr> <td>className</td> <td>class name of the toast</td> <td>String</td> <td></td> <td></td> </tr> <tr> <td>iconClass</td> <td>class name of the icon font</td> <td>String</td> <td></td> <td></td> </tr> </tbody> </table></div></section>"},379:function(t,s,e){var o,a;a=e(258),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},83:function(t,s,e){t.exports=e(379)}});