import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.36bc40e2.js";const h=JSON.parse('{"title":"JS","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/js.md","filePath":"javascript/js.md","lastUpdated":1700831527000}'),o={name:"javascript/js.md"},p=l(`<h1 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h1><h2 id="_1-javascript-有哪些数据类型-它们的区别" tabindex="-1">1. JavaScript 有哪些数据类型，它们的区别? <a class="header-anchor" href="#_1-javascript-有哪些数据类型-它们的区别" aria-label="Permalink to &quot;1. JavaScript 有哪些数据类型，它们的区别?&quot;">​</a></h2><p>JavaScript 共有八种数据类型，分别是 Undefined、Null、Boolean、 Number、String、Object、Symbol、BigInt。</p><h2 id="_2-数据类型检测的方式有哪些" tabindex="-1">2. 数据类型检测的方式有哪些? <a class="header-anchor" href="#_2-数据类型检测的方式有哪些" aria-label="Permalink to &quot;2. 数据类型检测的方式有哪些?&quot;">​</a></h2><ul><li>typeof</li><li>instanceof 用于测试构造函数的 prototype 属性是否出现在对象的原型链中的任何位置</li><li>constructor 对象实例通过 constrcutor 访问它的构造函数</li><li>Object.prototype.toString.call()</li></ul><h2 id="_3-apply-call-bind-的区别" tabindex="-1">3. apply, call, bind 的区别？ <a class="header-anchor" href="#_3-apply-call-bind-的区别" aria-label="Permalink to &quot;3. apply, call, bind 的区别？&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 非严格模式下，thisArg为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装 Object(thisArg)</span></span>
<span class="line"><span style="color:#E1E4E8;">fun.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(thisArg, [argsArray])</span></span>
<span class="line"><span style="color:#E1E4E8;">fun.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(thisArg[, arg1[, arg2[, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]]])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果使用new运算符构造绑定函数，则忽略绑定的 thisArg</span></span>
<span class="line"><span style="color:#E1E4E8;">fun.</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">(thisArg[, arg1[, arg2[, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]]])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 非严格模式下，thisArg为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装 Object(thisArg)</span></span>
<span class="line"><span style="color:#24292E;">fun.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(thisArg, [argsArray])</span></span>
<span class="line"><span style="color:#24292E;">fun.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(thisArg[, arg1[, arg2[, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]]])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果使用new运算符构造绑定函数，则忽略绑定的 thisArg</span></span>
<span class="line"><span style="color:#24292E;">fun.</span><span style="color:#6F42C1;">bind</span><span style="color:#24292E;">(thisArg[, arg1[, arg2[, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]]])</span></span></code></pre></div><h2 id="_4-new-关键字究竟做了什么" tabindex="-1">4. new 关键字究竟做了什么？ <a class="header-anchor" href="#_4-new-关键字究竟做了什么" aria-label="Permalink to &quot;4. new 关键字究竟做了什么？&quot;">​</a></h2><ol><li>创建一个空的简单 JavaScript 对象（即 <code>{}</code> ）暂且叫它<code>instance</code>；</li><li><strong>如果构造函数的 <code>prototype</code> 是一个对象的话</strong> , 将<code>instance</code>的 <strong><code>[[Prototype]]</code></strong> 属性 (即 <code>__proto__</code> 属性) 指向构造函数的 <code>prototype</code> 属性。否则，<code>instance</code>保持为一个普通对象，它的 <strong><code>[[Prototype]]</code></strong> 指向 <code>Object.prototype</code> ；</li><li>将<code>instance</code>作为 <code>this</code> 的上下文；</li><li>如果构造函数返回了一个 <strong>非原始值</strong> , 那么这个返回值就会成为整个 new 表达式的结果，否则返回<code>instance</code>。</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">__new</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">constructorFn</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 创建一个空对象，且 __proto__ 指向 constructorFn.prototype</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">constructorFn</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 执行构造函数并绑定 this 到新对象上</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> constructorFn.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(obj, args);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果构造函数返回了一个非原始值，则返回该值</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (result </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 否则返回新对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">__new</span><span style="color:#24292E;">(</span><span style="color:#E36209;">constructorFn</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 创建一个空对象，且 __proto__ 指向 constructorFn.prototype</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">constructorFn</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 执行构造函数并绑定 this 到新对象上</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> constructorFn.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(obj, args);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果构造函数返回了一个非原始值，则返回该值</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (result </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 否则返回新对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> obj;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,10),e=[p];function t(c,r,y,i,E,d){return n(),a("div",null,e)}const g=s(o,[["render",t]]);export{h as __pageData,g as default};