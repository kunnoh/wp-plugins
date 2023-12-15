ENV=.env

.PHONY: build start stop restart rebuild upgrade destroy
default: start

build:
	@echo "[*] Building images..."

start:
	@echo "[*] STARTING"
	@docker-compose --env-file=$(ENV) -f docker-compose.yml up -d

stop:
	@echo "[*] STOPPING"
	@docker-compose --env-file=$(ENV) -f docker-compose.yml down

restart: stop start

rebuild:
	@echo "[*] REBUILDING"
	@docker-compose --env-file=$(ENV) -f docker-compose.yml up --build -d

upgrade:
	@echo "[*] UPGRADING CONTAINERS"
	@docker-compose --env-file=$(ENV) pull
	@$(MAKE) restart

destroy:
	@echo "[*] DESTROYING ALL CONTAINERS AND VOLUMES"
	@echo "..."

.DEFAULT_GOAL := help

help:
	@echo "Usage: make [start|stop|restart|rebuild|upgrade|destroy]"
