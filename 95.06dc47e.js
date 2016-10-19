webpackJsonp([95],{170:function(s,t){s.exports='<section><h1>Infinite scroll</h1> <blockquote> <p>An infinite scroll directive.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { InfiniteScroll } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.use(InfiniteScroll);\n</code></pre> <h2>Example</h2> <p>To use infinite scroll, simply add <code>v-infinite-scroll</code> to the HTML element. Scroll this element until the distance between its bottom and the bottom of the scrollable container is within the <code>infinite-scroll-distance</code> threshold, the method appointed as <code>v-infinite-scroll</code> will run.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>ul</span>\n  <span class=hljs-attr>v-infinite-scroll</span>=<span class=hljs-string>"loadMore"</span>\n  <span class=hljs-attr>infinite-scroll-disabled</span>=<span class=hljs-string>"loading"</span>\n  <span class=hljs-attr>infinite-scroll-distance</span>=<span class=hljs-string>"10"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>li</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"item in list"</span>&gt;</span><span>{{</span> item <span>}}</span><span class=hljs-tag>&lt;/<span class=hljs-name>li</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>ul</span>&gt;</span>\n</code></pre> <pre><code class=language-javascript>loadMore() {\n  <span class=hljs-keyword>this</span>.loading = <span class=hljs-literal>true</span>;\n  setTimeout(() =&gt; {\n    <span class=hljs-keyword>let</span> last = <span class=hljs-keyword>this</span>.list[<span class=hljs-keyword>this</span>.list.length - <span class=hljs-number>1</span>];\n    <span class=hljs-keyword>for</span> (<span class=hljs-keyword>let</span> i = <span class=hljs-number>1</span>; i &lt;= <span class=hljs-number>10</span>; i++) {\n      <span class=hljs-keyword>this</span>.list.push(last + i);\n    }\n    <span class=hljs-keyword>this</span>.loading = <span class=hljs-literal>false</span>;\n  }, <span class=hljs-number>2500</span>);\n}\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>infinite-scroll-disabled</td> <td>if <code>true</code>, infinite scroll will not be triggered</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>infinite-scroll-distance</td> <td>distance threshold to trigger the load-method</td> <td>Number</td> <td></td> <td>0</td> </tr> <tr> <td>infinite-scroll-immediate-check</td> <td>if <code>true</code>, the directive will check immediately after binding. Useful if it\'s possible that the content is not tall enough to fill up the scrollable container.</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>infinite-scroll-listen-for-event</td> <td>infinite scroll will check again when the event is emitted in a Vue instance</td> <td>Function</td> <td></td> <td></td> </tr> </tbody> </table></div></section>'},291:function(s,t,n){var l,a;a=n(170),s.exports=l||{},s.exports.__esModule&&(s.exports=s.exports["default"]),a&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=a)},36:function(s,t,n){s.exports=n(291)}});