# Package Manager

EasyP is a versatile tool designed for working with proto files. In this section, we will focus on its capabilities as a package manager, which significantly simplifies the management of proto dependencies in your projects.

Key features of the EasyP package manager:
- `Proto` Dependency Management: Quickly add, update, and delete proto file dependencies in your project.
- `YAML-Based` Configuration: Package settings are managed via convenient and understandable YAML files.
- Flexibility and Version Control: Support for using Git tags and full commit hashes to specify exact module versions.
- `go get` Principle: The EasyP mod download command operates on the same principle as `go get` in Go, allowing any Git repository to be used as a package.

## Usage

To use EasyP as a package manager, set up the configuration file and use the mod download command.

### Example Configuration File:

```yaml
# example.easyp.yaml
deps:
  - github.com/googleapis/googleapis@common-protos-1_3_1
```

The configuration file must contain a deps section, which is a list of repositories with proto files and their versions (optional). Version specification options:
- Git tag: `@v1.2.3` 
- Full commit hash: `abc123def4567890` 

::: info
Without specifying a version: If no version is specified, the latest tag will be automatically used.
:::

### Command for Downloading Modules:

The mod download command can use a configuration file specified with the `-cfg` flag. If the `-cfg` flag is not specified, the default configuration file `easyp.yaml` in the current directory will be used.

# Using a specific configuration file
```bash
easyp -cfg example.easyp.yaml mod download
```

# Without specifying a configuration file (uses easyp.yaml in the current directory)
```bash
easyp mod download
```

::: info
By default, EasyP uses the `$HOME/.easyp` directory to store the cache and downloaded modules. You can override this path by setting the `EASYPPATH` environment variable.
:::
