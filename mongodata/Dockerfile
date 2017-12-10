FROM mongo

RUN mkdir /db

WORKDIR /db

ADD . /db

COPY myEng/* /db/
CMD  mongorestore -h mongo:27017 --db=myEng /db