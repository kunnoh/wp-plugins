# php-fpm, nginx, postgres

### container names
- nginx - nginx-phpfpm
- php-fpm - phpfpm-nginx
- postgresdb - postgres
- pgad4 - pgadmin4

## Install and run

clone
```sh
git clone 
```

start containers in docker-compose

```sh
cd php-fpm
```

Run all containers in docker-compose
```sh
make start
```

restart all containers in docker-compose
```sh
make restart
```


Stop all containers in docker-compose
```sh
make stop
```


Rebuild and restart all containers in docker-compose
```sh
make rebuild
```

## Logs

Logs will be saved on logs folder.
Realtime viewing of logs on running containers

example
```sh
docker-compose ps
```

```sh
docker-compose logs <image name or id>
``` 

nginx logs
```sh
docker-compose logs nginx-phpfpm
```


