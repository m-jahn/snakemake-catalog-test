---
sidebar_position: 2
---

# Using workflows

## Basic usage

To get started with a workflow from the catalog:

1. Clone the repository or download the specific workflow directory.

```bash
git clone https://github.com/<user>/<workflow>
```

2. Review the documentation provided with the workflow to understand its requirements and usage.

3. Configure the workflow by editing the `config.yml` files as needed.

4. Create an environment with access to Snakemake. It is recommended to use `mamba`.

```bash
mamba create -n <env-name> -c <channels> snakemake
mamba activate <env-name>
```

5. Execute the workflow using Snakemake.

```bash
cd <workflow-dir>
snakemake --cores 2
```

:::tip Dry-run

Use the `--dry-run` option first to check if all inputs are found.

:::

For more detailed instructions, please refer to the individual documentation for each [workflow](workflows/top_wf_by_stars.mdx).

## Deployment options

To be added.