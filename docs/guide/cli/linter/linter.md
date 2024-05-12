# Linter

## Why Use a Linter for Proto Files?

Linters play a crucial role in modern software development, particularly for proto files. By enforcing style and formatting rules, linters help maintain code quality, reduce potential bugs, and ensure that the codebase is clean and readable. This leads to several benefits:

- **Reduced Development Costs:** Linters catch errors early in the development cycle, saving time and resources that would be spent on debugging and fixing issues later.
- **Improved Team Collaboration:** A standardized codebase makes it easier for team members to understand and work with each other's code, facilitating a smoother collaborative environment.
- **Business Efficiency:** Teams using linters often produce higher quality code, which translates to fewer production issues and maintenance costs. This makes businesses that adopt linting practices more competitive and cost-effective.

## Linter Categories

To accommodate different project needs and preferences, 
EasyP linter provides predefined rule categories. 
These categories group together various rules, allowing teams to quickly select the level of strictness or areas they want to focus on during linting. 

The available categories are:
- **MINIMAL:** Basic checks to ensure package consistency.
- **BASIC:** Additional checks for naming conventions and usage patterns.
- **DEFAULT:** A set of default rules that most projects should use.
- **COMMENTS:** Ensures that comments are present and properly formatted.
- **UNARY_RPC:** Specific rules for unary RPC services.

### Rule Groupings

Below are the rule groupings under each category:

#### MINIMAL

- `DIRECTORY_SAME_PACKAGE`
- `PACKAGE_DEFINED`
- `PACKAGE_DIRECTORY_MATCH`
- `PACKAGE_SAME_DIRECTORY`

#### BASIC

- `ENUM_FIRST_VALUE_ZERO`
- `ENUM_NO_ALLOW_ALIAS`
- `ENUM_PASCAL_CASE`
- `ENUM_VALUE_UPPER_SNAKE_CASE`
- `FIELD_LOWER_SNAKE_CASE`
- `IMPORT_NO_PUBLIC`
- `IMPORT_NO_WEAK`
- `IMPORT_USED`
- `MESSAGE_PASCAL_CASE`
- `ONEOF_LOWER_SNAKE_CASE`
- `PACKAGE_LOWER_SNAKE_CASE`
- `PACKAGE_SAME_CSHARP_NAMESPACE`
- `PACKAGE_SAME_GO_PACKAGE`
- `PACKAGE_SAME_JAVA_MULTIPLE_FILES`
- `PACKAGE_SAME_JAVA_PACKAGE`
- `PACKAGE_SAME_PHP_NAMESPACE`
- `PACKAGE_SAME_RUBY_PACKAGE`
- `PACKAGE_SAME_SWIFT_PREFIX`
- `RPC_PASCAL_CASE`
- `SERVICE_PASCAL_CASE`

#### DEFAULT

- `ENUM_VALUE_PREFIX`
- `ENUM_ZERO_VALUE_SUFFIX`
- `FILE_LOWER_SNAKE_CASE`
- `RPC_REQUEST_RESPONSE_UNIQUE`
- `RPC_REQUEST_STANDARD_NAME`
- `RPC_RESPONSE_STANDARD_NAME`
- `PACKAGE_VERSION_SUFFIX`
- `SERVICE_SUFFIX`

#### COMMENTS

- `COMMENT_ENUM`
- `COMMENT_ENUM_VALUE`
- `COMMENT_FIELD`
- `COMMENT_MESSAGE`
- `COMMENT_ONEOF`
- `COMMENT_RPC`
- `COMMENT_SERVICE`

#### UNARY_RPC

- `RPC_NO_CLIENT_STREAMING`
- `RPC_NO_SERVER_STREAMING`

## Conclusion

Adopting the EasyP linter for your proto files can significantly enhance your development workflow, code quality, 
and overall project maintainability. With full compatibility with the Buf linter, teams can easily migrate and start benefiting
from our tool's robust features and flexible configuration options.