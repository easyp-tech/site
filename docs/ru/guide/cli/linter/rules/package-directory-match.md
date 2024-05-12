# PACKAGE_DIRECTORY_MATCH

Categories:
- **MINIMAL**
- **BASIC**
- **DEFAULT**

Это правило проверяет, что все файлы находятся в каталоге, соответствующем имени их пакета.

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
