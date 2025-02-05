


  
import Highlight from '@site/src/components/extras/Highlight';  

# epigen/mixscape_seurat
  
![](https://img.shields.io/github/license/epigen/mixscape_seurat?style=for-the-badge&label=license&logo=github)
![](https://img.shields.io/github/issues/epigen/mixscape_seurat?style=for-the-badge&label=issues&logo=github)
![](https://img.shields.io/github/stars/epigen/mixscape_seurat?style=for-the-badge&label=stars&logo=github)
![](https://img.shields.io/github/watchers/epigen/mixscape_seurat?style=for-the-badge&label=watchers&logo=github)  
  
A Snakemake workflow and MrBiomics module for performing perturbation analyses of pooled (multimodal) CRISPR screens with sc/snRNA-seq read-out (scCRISPR-seq) powered by the R package Seurat's method Mixscape.  

## Overview
  
**Topics:** <Highlight color='#b045a4'>bioinformatics</Highlight> <Highlight color='#b045a4'>biomedical-data-science</Highlight> <Highlight color='#b045a4'>perturbation-analysis</Highlight> <Highlight color='#b045a4'>sccrispr-seq</Highlight> <Highlight color='#b045a4'>scrna-seq</Highlight> <Highlight color='#b045a4'>single-cell</Highlight> <Highlight color='#b045a4'>snakemake</Highlight> <Highlight color='#b045a4'>snrna-seq</Highlight> <Highlight color='#b045a4'>visualization</Highlight> <Highlight color='#b045a4'>workflow</Highlight>  
  
**Latest release:** <Highlight color='#adadad'>v2.0.1</Highlight>, **last update:** <Highlight color='#adadad'>2025-01-17</Highlight>
  
**Linting:** <Highlight color='#da1b1b'>failed</Highlight>
  
**Formatting:** <Highlight color='#10b981'>passed</Highlight>

## Configuration
  
# Configuration

You need one configuration file and one annotation file to run the complete workflow. If in doubt read the comments in the config and/or try the default values.

- project configuration (`config/config.yaml`): different for every project/dataset and configures the analyses to be performed.
- sample annotation (sample_annotation): CSV file consisting of two columns
    -  name: name of the dataset (tip: keep it short).
    -  data: absolute path to the Seurat object as .rds.

Set workflow-specific `resources` or command line arguments (CLI) in the workflow profile `workflow/profiles/default.config.yaml`, which supersedes global Snakemake profiles.