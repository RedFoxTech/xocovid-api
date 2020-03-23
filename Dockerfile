FROM node:10

WORKDIR /app

COPY . /app:delegated

ENV NODE_ENV=development

EXPOSE 3000

CMD ['npm', 'run', 'start']
