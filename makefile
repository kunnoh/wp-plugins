ENV=./local.env

.DEFAULT_GOAL := help
.PHONY: build start stop restart rebuild upgrade destroy

build:
	@echo ""
	@echo "[*] Building images..."
	@docker-compose --env-file=$(ENV) -f docker-compose.yml build
	@echo ""

start:
	@echo ""
	@echo "[*] STARTING: building containers..."
	@echo ""
	@docker-compose --env-file=$(ENV) -f docker-compose.yml up -d
	@echo ""
	@echo "[*] Containers started"
	@echo ""


stop:
	@echo ""
	@echo "[*] STOPPING: stopping containers"
	@docker-compose --env-file=$(ENV) -f docker-compose.yml down
	@echo ""

restart: stop start

rebuild:
	@echo ""
	@echo "[*] REBUILDING"
	@make stop
	@docker-compose --env-file=$(ENV) -f docker-compose.yml up --build -d
	@make start
	@echo ""

upgrade:
	@echo ""
	@echo "[*] UPGRADING CONTAINERS"
	@docker-compose --env-file=$(ENV) pull
	@$(MAKE) restart
	@echo ""

destroy:
	@echo ""
	@echo "[*] DESTROYING ALL CONTAINERS AND VOLUMES"
	@docker-compose --env-file=$(ENV) -f docker-compose.yml down -v
	@echo ""
	@echo "[+] removing images"
	@docker image rm php-fpm-web php-fpm-phpfpm php-fpm-pgdb php-fpm-pgadmin4
	@echo ""
	@echo "[+] complete!"
	@echo ""

.DEFAULT_GOAL := help

help:
	@echo ""
	@echo "[*] Usage: make [ start | stop | restart | rebuild | upgrade | destroy ]"
	@echo ""
	@echo "[+] example: make start"
	@echo ""
