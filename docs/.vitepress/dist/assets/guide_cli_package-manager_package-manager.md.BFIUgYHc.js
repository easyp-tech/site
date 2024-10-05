import{_ as e,c as i,a2 as s,o as n}from"./chunks/framework.CRQqvidf.js";const g=JSON.parse('{"title":"Package Manager","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cli/package-manager/package-manager.md","filePath":"guide/cli/package-manager/package-manager.md","lastUpdated":1728141472000}'),o={name:"guide/cli/package-manager/package-manager.md"};function t(l,a,c,r,d,p){return n(),i("div",null,a[0]||(a[0]=[s(`<h1 id="package-manager" tabindex="-1">Package Manager <a class="header-anchor" href="#package-manager" aria-label="Permalink to &quot;Package Manager&quot;">​</a></h1><p>EasyP is a versatile tool designed for working with proto files. In this section, we will focus on its capabilities as a package manager, which significantly simplifies the management of proto dependencies in your projects.</p><p>Key features of the EasyP package manager:</p><ul><li><code>Proto</code> Dependency Management: Quickly add, update, and delete proto file dependencies in your project.</li><li><code>YAML-Based</code> Configuration: Package settings are managed via convenient and understandable YAML files.</li><li>Flexibility and Version Control: Support for using Git tags and full commit hashes to specify exact module versions.</li><li><code>go get</code> Principle: The EasyP mod download command operates on the same principle as <code>go get</code> in Go, allowing any Git repository to be used as a package.</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>To use EasyP as a package manager, set up the configuration file and use the mod download command.</p><h3 id="example-configuration-file" tabindex="-1">Example Configuration File: <a class="header-anchor" href="#example-configuration-file" aria-label="Permalink to &quot;Example Configuration File:&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># example.easyp.yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">deps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github.com/googleapis/googleapis@common-protos-1_3_1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The configuration file must contain a deps section, which is a list of repositories with proto files and their versions (optional). Version specification options:</p><ul><li>Git tag: <code>@v1.2.3</code></li><li>Full commit hash: <code>abc123def4567890</code></li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Without specifying a version: If no version is specified, the latest tag will be automatically used.</p></div><h3 id="command-for-downloading-modules" tabindex="-1">Command for Downloading Modules: <a class="header-anchor" href="#command-for-downloading-modules" aria-label="Permalink to &quot;Command for Downloading Modules:&quot;">​</a></h3><p>The mod download command can use a configuration file specified with the <code>-cfg</code> flag. If the <code>-cfg</code> flag is not specified, the default configuration file <code>easyp.yaml</code> in the current directory will be used.</p><h1 id="using-a-specific-configuration-file" tabindex="-1">Using a specific configuration file <a class="header-anchor" href="#using-a-specific-configuration-file" aria-label="Permalink to &quot;Using a specific configuration file&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">easyp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -cfg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.easyp.yaml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> download</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="without-specifying-a-configuration-file-uses-easyp-yaml-in-the-current-directory" tabindex="-1">Without specifying a configuration file (uses easyp.yaml in the current directory) <a class="header-anchor" href="#without-specifying-a-configuration-file-uses-easyp-yaml-in-the-current-directory" aria-label="Permalink to &quot;Without specifying a configuration file (uses easyp.yaml in the current directory)&quot;">​</a></h1><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">easyp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> download</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>By default, EasyP uses the <code>$HOME/.easyp</code> directory to store the cache and downloaded modules. You can override this path by setting the <code>EASYPPATH</code> environment variable.</p></div>`,18)]))}const u=e(o,[["render",t]]);export{g as __pageData,u as default};