import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.CRQqvidf.js";const k=JSON.parse('{"title":"PACKAGE_VERSION_SUFFIX","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cli/linter/rules/package-version-suffix.md","filePath":"guide/cli/linter/rules/package-version-suffix.md","lastUpdated":1716646706000}'),t={name:"guide/cli/linter/rules/package-version-suffix.md"};function l(r,s,p,o,h,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="package-version-suffix" tabindex="-1">PACKAGE_VERSION_SUFFIX <a class="header-anchor" href="#package-version-suffix" aria-label="Permalink to &quot;PACKAGE_VERSION_SUFFIX&quot;">​</a></h1><p>Categories:</p><ul><li><strong>MINIMAL</strong></li><li><strong>BASIC</strong></li><li><strong>DEFAULT</strong></li></ul><p>This rule checks that the package version suffix is <code>_vX</code> where <code>X</code> is a number of version.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="bad" tabindex="-1">Bad <a class="header-anchor" href="#bad" aria-label="Permalink to &quot;Bad&quot;">​</a></h3><div class="language-proto vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syntax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;proto3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="good" tabindex="-1">Good <a class="header-anchor" href="#good" aria-label="Permalink to &quot;Good&quot;">​</a></h3><div class="language-proto vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">proto</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">syntax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;proto3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.v1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9)]))}const u=a(t,[["render",l]]);export{k as __pageData,u as default};
