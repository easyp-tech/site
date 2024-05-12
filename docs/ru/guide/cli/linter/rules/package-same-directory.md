# PACKAGE_SAME_DIRECTORY

Categories:
- **MINIMAL**
- **BASIC**
- **DEFAULT**

Это правило проверяет, что все файлы данного пакета находятся в одном каталоге.

## Examples

### Bad

```proto
// File: bar/foo.proto

syntax = "proto3";

package foo;

message Foo {
    string bar = 1;
}

```

### Good

```proto
// File: bar/foo.proto

syntax = "proto3";

package bar;

message Foo {
    string bar = 1;
}

```
