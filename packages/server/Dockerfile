ARG DATABASE_URL

# setup npnpm
FROM node:14 as pnpm
ENV PNPM_VERSION 6.15.1
RUN curl -sL https://unpkg.com/@pnpm/self-installer | node

# install dependencies
FROM pnpm as install
WORKDIR /repo

COPY packages/ packages/

COPY .npmrc .npmrc
COPY package.json package.json
COPY pnpm-workspace.yaml pnpm-workspace.yaml
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY nx.json nx.json
COPY workspace.json workspace.json
COPY tsconfig.json tsconfig.json

RUN pnpm install -r --frozen-lockfile
RUN	rm -rf ~/.pnpm-store;

# build asssets
FROM install as build
WORKDIR /repo

COPY /packages/ /repo/packages/
RUN pnpm run build

# build node server
FROM build

EXPOSE 80

CMD ["pnpm", "nx", "run", "@medea/server:serve"]
