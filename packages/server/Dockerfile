# setup npnpm
FROM node:14 as pnpm
ENV PNPM_VERSION 6.15.1
RUN curl -sL https://unpkg.com/@pnpm/self-installer | node

# install dependencies
FROM pnpm as install
WORKDIR /repo

COPY packages/ packages/

COPY package.json package.json
COPY pnpm-workspace.yaml pnpm-workspace.yaml
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY nx.json nx.json
COPY workspace.json workspace.json
COPY tsconfig.json tsconfig.json

RUN pnpm install -r --frozen-lockfile --unsafe-perm
RUN	rm -rf ~/.pnpm-store;

# build asssets
FROM install as build
WORKDIR /repo

COPY /packages/ /repo/packages/
RUN pnpm run build

# build nginx image
FROM node:14
COPY --from=build /repo/packages/client/dist /var/www

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
