FROM engylemure/node-alpine

ADD src/ /src/

WORKDIR /src/

VOLUME ["/src/"]

RUN yarn global add nodemon

CMD ["bash","./start.sh"]