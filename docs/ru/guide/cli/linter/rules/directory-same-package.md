# DIRECTORY_SAME_PACKAGE

Categories:
- **MINIMAL**
- **BASIC**
- **DEFAULT**

Это правило проверяет, что все файлы в данном каталоге находятся в одном пакете.

## Examples

### Bad

```proto
// File: dir/foo.proto

syntax = "proto3";
   
package foo;

message Foo {
    string bar = 1;
}
```

### Good

```proto
// File: dir/foo/foo.proto

syntax = "proto3";

package dir.foo;

message Foo {
    string bar = 1;
}
```
