import{_ as a,c as s,o as e,a3 as i}from"./chunks/framework.B_JYZVMa.js";const k=JSON.parse('{"title":"Установка easyp cli","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/introduction/install.md","filePath":"ru/guide/introduction/install.md","lastUpdated":1716554988000}'),t={name:"ru/guide/introduction/install.md"},l=i('<h1 id="установка-easyp-cli" tabindex="-1">Установка easyp cli <a class="header-anchor" href="#установка-easyp-cli" aria-label="Permalink to &quot;Установка easyp cli&quot;">​</a></h1><h2 id="локальная-установка" tabindex="-1">Локальная установка <a class="header-anchor" href="#локальная-установка" aria-label="Permalink to &quot;Локальная установка&quot;">​</a></h2><h2 id="установка-из-пакетного-менеджера-системы" tabindex="-1">Установка из пакетного менеджера системы <a class="header-anchor" href="#установка-из-пакетного-менеджера-системы" aria-label="Permalink to &quot;Установка из пакетного менеджера системы&quot;">​</a></h2><p><code>В процессе разработки</code></p><h2 id="go-install" tabindex="-1">Go install <a class="header-anchor" href="#go-install" aria-label="Permalink to &quot;Go install&quot;">​</a></h2><h3 id="текущии-рекомендуемыи-метод-установки" tabindex="-1">Текущий рекомендуемый метод установки <a class="header-anchor" href="#текущии-рекомендуемыи-метод-установки" aria-label="Permalink to &quot;Текущий рекомендуемый метод установки&quot;">​</a></h3><p>Данный вариант установит последнюю стабильную версию easyp.</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/easyp-tech/easyp/cmd/easyp@{{version}}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="сборка-из-исходников" tabindex="-1">Сборка из исходников <a class="header-anchor" href="#сборка-из-исходников" aria-label="Permalink to &quot;Сборка из исходников&quot;">​</a></h2><h3 id="не-рекомендуется-для-продакшена" tabindex="-1">Не рекомендуется для продакшена <a class="header-anchor" href="#не-рекомендуется-для-продакшена" aria-label="Permalink to &quot;Не рекомендуется для продакшена&quot;">​</a></h3><h3 id="требуется-go-1-22-или-новее" tabindex="-1">Требуется Go 1.22 или новее <a class="header-anchor" href="#требуется-go-1-22-или-новее" aria-label="Permalink to &quot;Требуется Go 1.22 или новее&quot;">​</a></h3><ol><li>Установить репозиторий</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/easyp-tech/easyp.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>Запустить сборку</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./cmd/easyp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',15),n=[l];function r(h,o,d,p,c,u){return e(),s("div",null,n)}const g=a(t,[["render",r]]);export{k as __pageData,g as default};
