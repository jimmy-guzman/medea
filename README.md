# medea

> A very simple store and view notes application but also an excuse to play with some new technologies.

# Table of Contents

- [Pre-Requisites](#pre-requisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies](#technologies)

## Pre-Requisites

- This project leverages [pnpm](https://pnpm.io/motivation) as it's package manager so make sure you [install](https://pnpm.io/installation) it
- To run the db locally please install [docker](https://www.docker.com/get-started)

## Getting Started

- `pnpm install` will install everything
- `pnpm db:up` will start the postgres docker container
  - `pnpm db:down` to shut it down
- `pnpm dev` will start both client and server in dev mode
  - You can view api docs at http://127.0.0.1:7000/api/docs
  - App will launch at http://localhost:3000/
- `pnpm db:studio` will launch prisma's studio to visually interact with the ddb
  - You view db at http://localhost:5555
- `pnpm test` will run unit tests
  - `pnpm test --watch` to run in watch mode
- `formatting` and `linting` will happen before committing

## Usage

> medea exposes it's api if you wish to use outside of the UI as you wish

1. Create a `medea`

```bash
curl --request POST \
  --url http://127.0.0.1:7000/notes \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Usage",
	"description": "An example of a new note",
	"text": "# This Is Your New Note\n\n> Thank you using Medea! ❤️\n\n## Tips\n* You can click the 👁 to preview\n* You can click the 📝 to edit\n\n",
	"tags": [
	]
}'
```

2. Click the link from response

```jsonc
{
  // cSpell:ignore cku05wn4t00211rslpcjzcrxw
  "id": "cku05wn4t00211rslpcjzcrxw",
  "links": {
    "note": "http://localhost:3000/notes/cku05wn4t00211rslpcjzcrxw",
    "json": "http://localhost:3000/json/cku05wn4t00211rslpcjzcrxw"
  },
  "createdAt": "2021-09-25T19:04:33.053Z",
  "updatedAt": "2021-09-25T19:04:33.053Z"
}
```

3. Rinse and Repeat

## Technologies

> ⚡️ The theme was speed from development to production so the technologies we're chosen with that in mind.

### Workspace

- `jest` ✅
- `eslint` 🚨
- `prettier` 🎨
- `husky` 🎨
- `typescript` 🚨
- `docker` 👷
- `pnpm` for it's workspaces and the boost in installation speed ⚡️
- `nx`(only the cli) for it's computational caching ⚡️, affected commands ⚡️ and workspace visualization 🔨

### Client

- `react` ✨
- `react-router` ✨
- `@testing-library/react` ✅
- `vite` for the fast server start and updates ⚡️
  - You can read more [here](https://vitejs.dev/guide/why.html)
- `tailwindcss` for it's focus on rapid UI development ⚡️
- `react-query` for making fetching, caching, synchronizing and updating server state easy 🍻
  - You can read more [here](https://react-query.tanstack.com/overview)

### Server

- `nodemon` 🔨
- `esbuild` for it's fast builds and transpiling ⚡️
- `Fastify` for it's lower cost of the infrastructure 🍻 and better responsiveness under load ⚡️
- `prisma` for it's many features that improve developer productivity 🍻
  - You can read more [here](https://www.prisma.io/docs/concepts/overview/why-prisma)
- `postgres` for it's performance and it works great with `prisma` ⚡️
