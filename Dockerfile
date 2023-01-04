FROM rockylinux:9.1 as build
RUN dnf update && dnf install nodejs -y && npm i -g npm
RUN adduser node
USER node
WORKDIR ~
COPY . .
RUN npm ci && npm run build
ENTRYPOINT [ "node", "~/build/index.js" ]