# Package Manager

## Usage

To usage `easyp` as a package manager use `mod download` command:

```bash
easyp -cfg example.easyp.yaml mod download
```

Your config file has to contains `deps` section which is list of repositories with proto files and its version (optional).

For example:

```yaml
deps:
  - github.com/googleapis/googleapis@common-protos-1_3_1
```

**NOTE:** Use only git tag or full hash of commit version.

By default, `easyp` use `$HOME/.easyp` dir to storage cache and downloaded modules, you could override it with `EASYPPATH` env var.
