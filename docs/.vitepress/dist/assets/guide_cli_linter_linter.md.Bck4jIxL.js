import{_ as i,c as o,a2 as l,o as a}from"./chunks/framework.CRQqvidf.js";const A=JSON.parse('{"title":"Linter","description":"","frontmatter":{},"headers":[],"relativePath":"guide/cli/linter/linter.md","filePath":"guide/cli/linter/linter.md","lastUpdated":1715515330000}'),t={name:"guide/cli/linter/linter.md"};function r(n,e,c,d,s,E){return a(),o("div",null,e[0]||(e[0]=[l('<h1 id="linter" tabindex="-1">Linter <a class="header-anchor" href="#linter" aria-label="Permalink to &quot;Linter&quot;">​</a></h1><h2 id="why-use-a-linter-for-proto-files" tabindex="-1">Why Use a Linter for Proto Files? <a class="header-anchor" href="#why-use-a-linter-for-proto-files" aria-label="Permalink to &quot;Why Use a Linter for Proto Files?&quot;">​</a></h2><p>Linters play a crucial role in modern software development, particularly for proto files. By enforcing style and formatting rules, linters help maintain code quality, reduce potential bugs, and ensure that the codebase is clean and readable. This leads to several benefits:</p><ul><li><strong>Reduced Development Costs:</strong> Linters catch errors early in the development cycle, saving time and resources that would be spent on debugging and fixing issues later.</li><li><strong>Improved Team Collaboration:</strong> A standardized codebase makes it easier for team members to understand and work with each other&#39;s code, facilitating a smoother collaborative environment.</li><li><strong>Business Efficiency:</strong> Teams using linters often produce higher quality code, which translates to fewer production issues and maintenance costs. This makes businesses that adopt linting practices more competitive and cost-effective.</li></ul><h2 id="linter-categories" tabindex="-1">Linter Categories <a class="header-anchor" href="#linter-categories" aria-label="Permalink to &quot;Linter Categories&quot;">​</a></h2><p>To accommodate different project needs and preferences, EasyP linter provides predefined rule categories. These categories group together various rules, allowing teams to quickly select the level of strictness or areas they want to focus on during linting.</p><p>The available categories are:</p><ul><li><strong>MINIMAL:</strong> Basic checks to ensure package consistency.</li><li><strong>BASIC:</strong> Additional checks for naming conventions and usage patterns.</li><li><strong>DEFAULT:</strong> A set of default rules that most projects should use.</li><li><strong>COMMENTS:</strong> Ensures that comments are present and properly formatted.</li><li><strong>UNARY_RPC:</strong> Specific rules for unary RPC services.</li></ul><h3 id="rule-groupings" tabindex="-1">Rule Groupings <a class="header-anchor" href="#rule-groupings" aria-label="Permalink to &quot;Rule Groupings&quot;">​</a></h3><p>Below are the rule groupings under each category:</p><h4 id="minimal" tabindex="-1">MINIMAL <a class="header-anchor" href="#minimal" aria-label="Permalink to &quot;MINIMAL&quot;">​</a></h4><ul><li><code>DIRECTORY_SAME_PACKAGE</code></li><li><code>PACKAGE_DEFINED</code></li><li><code>PACKAGE_DIRECTORY_MATCH</code></li><li><code>PACKAGE_SAME_DIRECTORY</code></li></ul><h4 id="basic" tabindex="-1">BASIC <a class="header-anchor" href="#basic" aria-label="Permalink to &quot;BASIC&quot;">​</a></h4><ul><li><code>ENUM_FIRST_VALUE_ZERO</code></li><li><code>ENUM_NO_ALLOW_ALIAS</code></li><li><code>ENUM_PASCAL_CASE</code></li><li><code>ENUM_VALUE_UPPER_SNAKE_CASE</code></li><li><code>FIELD_LOWER_SNAKE_CASE</code></li><li><code>IMPORT_NO_PUBLIC</code></li><li><code>IMPORT_NO_WEAK</code></li><li><code>IMPORT_USED</code></li><li><code>MESSAGE_PASCAL_CASE</code></li><li><code>ONEOF_LOWER_SNAKE_CASE</code></li><li><code>PACKAGE_LOWER_SNAKE_CASE</code></li><li><code>PACKAGE_SAME_CSHARP_NAMESPACE</code></li><li><code>PACKAGE_SAME_GO_PACKAGE</code></li><li><code>PACKAGE_SAME_JAVA_MULTIPLE_FILES</code></li><li><code>PACKAGE_SAME_JAVA_PACKAGE</code></li><li><code>PACKAGE_SAME_PHP_NAMESPACE</code></li><li><code>PACKAGE_SAME_RUBY_PACKAGE</code></li><li><code>PACKAGE_SAME_SWIFT_PREFIX</code></li><li><code>RPC_PASCAL_CASE</code></li><li><code>SERVICE_PASCAL_CASE</code></li></ul><h4 id="default" tabindex="-1">DEFAULT <a class="header-anchor" href="#default" aria-label="Permalink to &quot;DEFAULT&quot;">​</a></h4><ul><li><code>ENUM_VALUE_PREFIX</code></li><li><code>ENUM_ZERO_VALUE_SUFFIX</code></li><li><code>FILE_LOWER_SNAKE_CASE</code></li><li><code>RPC_REQUEST_RESPONSE_UNIQUE</code></li><li><code>RPC_REQUEST_STANDARD_NAME</code></li><li><code>RPC_RESPONSE_STANDARD_NAME</code></li><li><code>PACKAGE_VERSION_SUFFIX</code></li><li><code>SERVICE_SUFFIX</code></li></ul><h4 id="comments" tabindex="-1">COMMENTS <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;COMMENTS&quot;">​</a></h4><ul><li><code>COMMENT_ENUM</code></li><li><code>COMMENT_ENUM_VALUE</code></li><li><code>COMMENT_FIELD</code></li><li><code>COMMENT_MESSAGE</code></li><li><code>COMMENT_ONEOF</code></li><li><code>COMMENT_RPC</code></li><li><code>COMMENT_SERVICE</code></li></ul><h4 id="unary-rpc" tabindex="-1">UNARY_RPC <a class="header-anchor" href="#unary-rpc" aria-label="Permalink to &quot;UNARY_RPC&quot;">​</a></h4><ul><li><code>RPC_NO_CLIENT_STREAMING</code></li><li><code>RPC_NO_SERVER_STREAMING</code></li></ul><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Adopting the EasyP linter for your proto files can significantly enhance your development workflow, code quality, and overall project maintainability. With full compatibility with the Buf linter, teams can easily migrate and start benefiting from our tool&#39;s robust features and flexible configuration options.</p>',22)]))}const _=i(t,[["render",r]]);export{A as __pageData,_ as default};