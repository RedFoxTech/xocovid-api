FROM node:10

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD ['npm', 'run', 'start']
