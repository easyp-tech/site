
# PACKAGE_DEFINED

Categories:
- **MINIMAL**
- **BASIC**
- **DEFAULT**

Это правило проверяет, что все файлы имеют объявление пакета.

## Examples

### Bad

```proto

syntax = "proto3";

message Foo {
    string bar = 1;
}

```

### Good

```proto
syntax = "proto3";

package foo;

message Foo {
    string bar = 1;
}
```

