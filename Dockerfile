FROM ubuntu:latest

LABEL maintainer="michael.t.taggart@gmail.com"

EXPOSE $PORT

RUN apt update
RUN apt install -y nodejs npm git curl sqlite3

COPY ./ /schoolcast

WORKDIR /schoolcast

RUN chmod 755 ./install.sh 
RUN chmod 755 ./run.sh 
RUN rm -rf node_modules

RUN ./install.sh

CMD ./run.sh 