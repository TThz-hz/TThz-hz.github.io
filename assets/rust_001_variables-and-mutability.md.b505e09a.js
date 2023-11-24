import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.36bc40e2.js";const h=JSON.parse('{"title":"变量和可变性","description":"","frontmatter":{},"headers":[],"relativePath":"rust/001_variables-and-mutability.md","filePath":"rust/001_variables-and-mutability.md","lastUpdated":1700831527000}'),p={name:"rust/001_variables-and-mutability.md"},o=n(`<h1 id="变量和可变性" tabindex="-1">变量和可变性 <a class="header-anchor" href="#变量和可变性" aria-label="Permalink to &quot;变量和可变性&quot;">​</a></h1><h2 id="变量默认是不可改变的-immutable" tabindex="-1">变量默认是不可改变的（immutable） <a class="header-anchor" href="#变量默认是不可改变的-immutable" aria-label="Permalink to &quot;变量默认是不可改变的（immutable）&quot;">​</a></h2><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // error[E0384]: cannot assign twice to immutable variable \`x\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // error[E0384]: cannot assign twice to immutable variable \`x\`</span></span></code></pre></div><h2 id="在变量名前添加-mut-来使其可变" tabindex="-1">在变量名前添加 <code>mut</code> 来使其可变 <a class="header-anchor" href="#在变量名前添加-mut-来使其可变" aria-label="Permalink to &quot;在变量名前添加 \`mut\` 来使其可变&quot;">​</a></h2><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">mut</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="隐藏-shadowing" tabindex="-1">隐藏（Shadowing） <a class="header-anchor" href="#隐藏-shadowing" aria-label="Permalink to &quot;隐藏（Shadowing）&quot;">​</a></h2><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 可以用相同变量名称来隐藏一个变量，以及重复使用 let 关键字来多次隐藏</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 可以用相同变量名称来隐藏一个变量，以及重复使用 let 关键字来多次隐藏</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="隐藏与将变量标记为-mut-是有区别的" tabindex="-1">隐藏与将变量标记为 mut 是有区别的 <a class="header-anchor" href="#隐藏与将变量标记为-mut-是有区别的" aria-label="Permalink to &quot;隐藏与将变量标记为 mut 是有区别的&quot;">​</a></h3><ul><li><p>当不小心尝试对变量重新赋值时，如果没有使用 let 关键字，就会导致编译时错误。通过使用 let，我们可以用这个值进行一些计算，不过计算完之后变量仍然是不可变的。</p></li><li><p>mut 与隐藏的另一个区别是，当再次使用 let 时，实际上创建了一个新变量，我们可以改变值的类型，并且复用这个名字。例如，假设程序请求用户输入空格字符来说明希望在文本之间显示多少个空格，接下来我们想将输入存储成数字（多少个空格）：</p><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> spaces </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;   &quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> spaces </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> spaces</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">len</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> spaces </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;   &quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> spaces </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> spaces</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">len</span><span style="color:#24292E;">();</span></span></code></pre></div><p>第一个 spaces 变量是字符串类型，第二个 spaces 变量是数字类型。隐藏使我们不必使用不同的名字，如 spaces_str 和 spaces_num；相反，我们可以复用 spaces 这个更简单的名字。然而，如果尝试使用 mut，将会得到一个编译时错误，如下所示：</p><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> spaces </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;   &quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  spaces </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> spaces</span><span style="color:#F97583;">.</span><span style="color:#B392F0;">len</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">  // error[E0308]: mismatched types</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">mut</span><span style="color:#24292E;"> spaces </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;   &quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  spaces </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> spaces</span><span style="color:#D73A49;">.</span><span style="color:#6F42C1;">len</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">  // error[E0308]: mismatched types</span></span></code></pre></div><p>这个错误说明，我们不能改变变量的类型</p></li></ul><h2 id="常量-constants" tabindex="-1">常量 (constants) <a class="header-anchor" href="#常量-constants" aria-label="Permalink to &quot;常量 (constants)&quot;">​</a></h2><p>类似于不可变变量，常量 (constants) 是绑定到一个名称的不允许改变的值，不过常量与变量还是有一些区别。</p><ul><li><p>首先，不允许对常量使用 mut。常量不光默认不可变，它总是不可变。声明常量使用 const 关键字而不是 let，并且 必须 注明值的类型。</p></li><li><p>常量可以在任何作用域中声明，包括全局作用域，这在一个值需要被很多部分的代码用到时很有用。</p></li><li><p>最后一个区别是，常量只能被设置为常量表达式，而不可以是其他任何只能在运行时计算出的值。</p></li></ul><div class="language-rs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE_HOURS_IN_SECONDS</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">u32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE_HOURS_IN_SECONDS</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">u32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span></code></pre></div>`,13),e=[o];function t(c,r,E,y,i,d){return a(),l("div",null,e)}const F=s(p,[["render",t]]);export{h as __pageData,F as default};