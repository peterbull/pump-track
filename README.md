## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## nbdev & precommit hooks

Notebooks are used from time to time for EDA and as general conceptual scratchpads. To keep conflicts and diffs to a minimum, the `nbdev_clean` command is run with precommit hooks to strip unnecessary metadata like run count.

First install `nbdev`:

```bash
pip install nbdev
```

Then install pre-commit hooks in the repository directory:

```bash
pre-commit install
```
