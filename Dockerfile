FROM node:latest

COPY . .

RUN yarn

EXPOSE 3000

ENTRYPOINT [ "yarn", "dev" ]