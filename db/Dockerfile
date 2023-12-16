FROM postgres:16

RUN groupadd -r postgres_user && useradd -r -g postgres_user postgres_user

WORKDIR /usr/src/app
COPY postgres.env /usr/src/app/postgres.env

RUN chown postgres_user:postgres_user /usr/src/app/postgres.env && \
    chmod 600 /usr/src/app/postgres.env

USER postgres_user
ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD
ENV POSTGRES_DB=$POSTGRES_DB
ENV POSTGRES_PORT=$POSTGRES_PORT

EXPOSE $POSTGRES_PORT

CMD ["postgres"]
