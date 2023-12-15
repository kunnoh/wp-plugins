# php-fpm, nginx, postgres

## Install and run

clone
```sh
git clone 
```

start

```sh
cd nginx-phpfpm
```


Build all images in docker-compose
```sh
make build
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


