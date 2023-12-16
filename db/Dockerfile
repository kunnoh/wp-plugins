FROM postgres:16

COPY postgres.env /usr/src/app/local.env
ENTRYPOINT ["sh", "-c", "export $(xargs < /usr/src/app/local.env) && exec \"$@\"", "--"]
ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD
ENV POSTGRES_DB=$POSTGRES_DB
EXPOSE $POSTGRES_PORT

CMD [ "postgres" ]