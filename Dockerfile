FROM ubuntu:latest

EXPOSE $PORT

RUN apt update
RUN apt install nodejs npm git curl

COPY ./ /schoolcast

WORKDIR /schoolcast

RUN chmod 755 ./install.sh 
RUN chmod 755 run.sh 

RUN ./install.sh


CMD ./run.sh 