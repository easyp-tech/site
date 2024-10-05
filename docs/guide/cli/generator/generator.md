# Generator

[[toc]]

EasyP includes a powerful generator that simplifies the process of generating code from proto files. By using YAML configurations, EasyP makes this process more user-friendly and intuitive compared to using the protoc command directly.

## Key Features of the Generator

1. Simplified Code Generation:
    - Generate code from proto files using a `YAML` configuration.
    - Avoid the need to write long and complex protoc commands.

2. Wrapper around protoc:
    - EasyP functions as a wrapper around protoc, providing a more convenient API through configuration files.
    - Supports all options and plugins available in protoc.

3. Flexibility and Customization:
    - Use the same parameters as protoc plugins, directly in the configuration file.
    - Support for multiple plugins and their parameters in a single configuration.

## Example Configuration File

The `YAML` configuration file allows you to specify all parameters for code generation, including the use of various plugins and their options:

```yaml
generate:
  plugins:
    - name: go
      out: .
      opts:
        paths: source_relative
    - name: go-grpc
      out: .
      opts:
        paths: source_relative
        require_unimplemented_servers: false
```

### Explanation of Parameters:

- `name`: The name of the plugin to be used for code generation (e.g., go or go-grpc).
- `out`: The directory where the generated files will be output.
- `opts`: Options to be passed to the plugin. These options correspond to the parameters used in the protoc command.

### Command for Running the Generator

To use the EasyP generator, ensure you have configured your `YAML` configuration file. Then, simply run the command:

```shell
easyp -cfg your-config-file.yaml generate
```

Where `your-config-file.yaml` is the path to your YAML configuration file.

### Without Specifying a Configuration File

If the -cfg flag is not specified, the default configuration file `easyp.yaml` in the current directory will be used:

```shell
easyp generate
```

## Additional Capabilities

- Support for Various Output Formats: Ability to specify different directories for generated files when using multiple plugins.
- Integration with Build Systems: Easy integration into `CI/CD` systems to automate code generation.
- Flexibility in Configuration: Add and modify plugins and their parameters in the configuration file without the need to change commands in scripts.

## Conclusion

The EasyP generator provides a flexible and convenient alternative to directly using `protoc`,
offering powerful configuration capabilities through `YAML` files. 
This simplifies the integration and automation of code generation in your projects.
