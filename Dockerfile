FROM node:10

WORKDIR /app

COPY . /app:delegated

EXPOSE 3000

CMD ['npm', 'run', 'start']
