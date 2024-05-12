# PACKAGE_DIRECTORY_MATCH

Categories:
- **MINIMAL**
- **BASIC**
- **DEFAULT**

This rule checks that all files are in a directory that matches their package name.

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
