import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.B_JYZVMa.js";const E=JSON.parse('{"title":"MESSAGE_PASCAL_CASE","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cli/linter/rules/message-pascal-case.md","filePath":"guide/cli/linter/rules/message-pascal-case.md","lastUpdated":null}'),e={name:"guide/cli/linter/rules/message-pascal-case.md"},l=n(`<h1 id="message-pascal-case" tabindex="-1">MESSAGE_PASCAL_CASE <a class="header-anchor" href="#message-pascal-case" aria-label="Permalink to &quot;MESSAGE_PASCAL_CASE&quot;">​</a></h1><p>Categories:</p><ul><li><strong>MINIMAL</strong></li><li><strong>BASIC</strong></li><li><strong>DEFAULT</strong></li></ul><p>This rule checks that message names are in PascalCase.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="bad" tabindex="-1">Bad <a class="header-anchor" href="#bad" aria-label="Permalink to &quot;Bad&quot;">​</a></h3><div class="language-proto vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syntax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;proto3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo_bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="good" tabindex="-1">Good <a class="header-anchor" href="#good" aria-label="Permalink to &quot;Good&quot;">​</a></h3><div class="language-proto vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syntax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;proto3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FooBar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar_name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,9),p=[l];function t(r,h,k,d,o,c){return i(),a("div",null,p)}const u=s(e,[["render",t]]);export{E as __pageData,u as default};
