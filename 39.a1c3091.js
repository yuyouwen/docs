webpackJsonp([39],{226:function(t,e){t.exports="<section><h1>Datetime picker</h1> <blockquote> <p>A datetime picker.</p> </blockquote> <hr> <h2>Import</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { DatetimePicker } <span class=hljs-keyword>from</span> <span class=hljs-string>'mint-ui'</span>;\n\nVue.component(DatetimePicker.name, DatetimePicker);\n</code></pre> <h2>Example</h2> <p>The <code>value</code> attribute is the picked date / time.</p> <p>The <code>type</code> attribute configures the type of the component, and it has three options:</p> <ul> <li><code>datetime</code>: datetime picker with 5 slots: year, month, date, hour and minute. In this case, <code>value</code> is a <code>Date</code> object</li> <li><code>date</code>: date picker with 3 slots: year, month and date. In this case, <code>value</code> is a <code>Date</code> object</li> <li><code>time</code>: time picker with 2 slots: hour and minute. In this case, <code>value</code> is a string formatted as <code>HH:mm</code></li> </ul> <p>Sync <code>visible</code> with one of your vue instance variables. Toggle it to switch on/off the picker.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-datetime-picker</span>\n  <span class=hljs-attr>:visible.sync</span>=<span class=hljs-string>\"pickerVisible\"</span>\n  <span class=hljs-attr>type</span>=<span class=hljs-string>\"time\"</span>\n  <span class=hljs-attr>:value.sync</span>=<span class=hljs-string>\"pickerValue\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-datetime-picker</span>&gt;</span>\n</code></pre> <p>You can configure a custom template for slot options. The template should be a string containing <code>{value}</code>, and <code>{value}</code> will be parsed to the corresponding value of the option.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-datetime-picker</span>\n  <span class=hljs-attr>:visible.sync</span>=<span class=hljs-string>\"pickerVisible\"</span>\n  <span class=hljs-attr>type</span>=<span class=hljs-string>\"date\"</span>\n  <span class=hljs-attr>year-format</span>=<span class=hljs-string>\"{value} 年\"</span>\n  <span class=hljs-attr>month-format</span>=<span class=hljs-string>\"{value} 月\"</span>\n  <span class=hljs-attr>date-format</span>=<span class=hljs-string>\"{value} 日\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-datetime-picker</span>&gt;</span>\n</code></pre> <p>When the confirm button is tapped, the <code>confirm</code> event triggers with <code>value</code> as its parameter.</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-datetime-picker</span>\n  <span class=hljs-attr>:visible.sync</span>=<span class=hljs-string>\"pickerVisible\"</span>\n  <span class=hljs-attr>type</span>=<span class=hljs-string>\"time\"</span>\n  <span class=hljs-attr>@confirm</span>=<span class=hljs-string>\"handleConfirm\"</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-datetime-picker</span>&gt;</span>\n</code></pre> <h2>API</h2> <div class=table-container><table class=table><thead> <tr> <th>option</th> <th>description</th> <th>type</th> <th>acceptable values</th> <th>default</th> </tr> </thead> <tbody> <tr> <td>value</td> <td>value of the picker</td> <td>Date / String</td> <td></td> <td></td> </tr> <tr> <td>visible</td> <td>visibility of the picker</td> <td>Boolean</td> <td></td> <td>false</td> </tr> <tr> <td>type</td> <td>type of the picker</td> <td>String</td> <td>'datetime', 'date', 'time'</td> <td>'datetime'</td> </tr> <tr> <td>cancelText</td> <td>text of the cancel button</td> <td>String</td> <td></td> <td>'取消'</td> </tr> <tr> <td>confirmText</td> <td>text of the confirm button</td> <td>String</td> <td></td> <td>'确定'</td> </tr> <tr> <td>startDate</td> <td>minimum possible date</td> <td>Date</td> <td></td> <td>Jan. 1st a decade ago</td> </tr> <tr> <td>endDate</td> <td>maximal possible date</td> <td>Date</td> <td></td> <td>Dec. 31st a decade after</td> </tr> <tr> <td>startHour</td> <td>minimum possible value for hour</td> <td>Number</td> <td></td> <td>0</td> </tr> <tr> <td>endHour</td> <td>maximal possible value for hour</td> <td>Number</td> <td></td> <td>23</td> </tr> <tr> <td>yearFormat</td> <td>custom template for year</td> <td>String</td> <td></td> <td>'{value}'</td> </tr> <tr> <td>monthFormat</td> <td>custom template for month</td> <td>String</td> <td></td> <td>'{value}'</td> </tr> <tr> <td>dateFormat</td> <td>custom template for date</td> <td>String</td> <td></td> <td>'{value}'</td> </tr> <tr> <td>hourFormat</td> <td>custom template for hour</td> <td>String</td> <td></td> <td>'{value}'</td> </tr> <tr> <td>minuteFormat</td> <td>custom template for minute</td> <td>String</td> <td></td> <td>'{value}'</td> </tr> </tbody> </table></div></section>"},31:function(t,e,s){t.exports=s(347)},347:function(t,e,s){var a,d;d=s(226),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),d&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=d)}});