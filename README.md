# The Termina Book

Sources of the Termina book, built with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). The book is
published at <https://termina-lang.github.io/termina-book/>.

## Building locally

The book uses the Termina syntax highlighter, so `termina` code blocks require
the `termina-lexer` package installed alongside MkDocs (the same set of
dependencies the deploy workflow installs):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install mkdocs-material
pip install git+https://github.com/termina-lang/termina-lexer.git
```

Then serve the book with live reload:

```bash
mkdocs serve
```

and open <http://127.0.0.1:8000/termina-book/>. To produce the static site under
`site/`, run `mkdocs build` (add `--strict` to fail on broken links).

## Publishing

Publishing is automatic. Every push to `main` triggers the
[`deploy.yml`](.github/workflows/deploy.yml) workflow, which builds the book and
publishes it to the `gh-pages` branch with `mkdocs gh-deploy --force`. There is
no manual deploy step: merging to `main` updates the live site.

## Diagrams

Structural diagrams are described logically under `diagrams/src/` and laid out
by the Eclipse Layout Kernel (`elkjs`), which renders them to **committed SVGs**
under `docs/diagrams/` that the pages embed. The CI build runs no Node or ELK,
so the published site has no extra dependency. After editing a diagram, re-render
and commit both the source and the SVG:

```bash
cd diagrams
npm install   # once
node render.js
```

The diagram format and conventions (kinds, ports, edges) are documented in
[`diagrams/README.md`](diagrams/README.md).

## Layout

- `docs/` — Markdown sources; navigation is defined in `mkdocs.yml`.
- `docs/stylesheets/termina.css` — the brand theme.
- `diagrams/` — PlantUML diagram sources; `docs/diagrams/` — the rendered SVGs.
