import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.B_JYZVMa.js";const E=JSON.parse('{"title":"COMMENT_ENUM_VALUE","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cli/linter/rules/comment-enum-value.md","filePath":"guide/cli/linter/rules/comment-enum-value.md","lastUpdated":null}'),e={name:"guide/cli/linter/rules/comment-enum-value.md"},l=n(`<h1 id="comment-enum-value" tabindex="-1">COMMENT_ENUM_VALUE <a class="header-anchor" href="#comment-enum-value" aria-label="Permalink to &quot;COMMENT_ENUM_VALUE&quot;">​</a></h1><p>Categories:</p><ul><li><strong>COMMENT</strong></li></ul><p>This rule checks that enum values have a comment.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="bad" tabindex="-1">Bad <a class="header-anchor" href="#bad" aria-label="Permalink to &quot;Bad&quot;">​</a></h3><div class="language-proto vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syntax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;proto3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BAR </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BAZ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="good" tabindex="-1">Good <a class="header-anchor" href="#good" aria-label="Permalink to &quot;Good&quot;">​</a></h3><div class="language-proto vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syntax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;proto3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // BAR value for bar logic</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BAR </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // BAZ value for baz logic</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    BAZ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,9),p=[l];function t(h,r,k,o,d,c){return i(),a("div",null,p)}const m=s(e,[["render",t]]);export{E as __pageData,m as default};
