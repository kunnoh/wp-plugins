ENV=./local.env

.DEFAULT_GOAL := help
.PHONY: build start stop restart rebuild upgrade destroy

build:
	@echo "[*] Building images..."
	@docker-compose

start:
	@echo "[*] STARTING: building containers..."
	@docker-compose --env-file=$(ENV) -f docker-compose.yml up -d

stop:
	@echo "[*] STOPPING: stopping containers"
	@docker-compose --env-file=$(ENV) -f docker-compose.yml down

restart: stop start

rebuild:
	@echo "[*] REBUILDING"
	@make stop
	@docker-compose --env-file=$(ENV) -f docker-compose.yml up --build -d
	@make start
	
upgrade:
	@echo "[*] UPGRADING CONTAINERS"
	@docker-compose --env-file=$(ENV) pull
	@$(MAKE) restart

destroy:
	@echo "[*] DESTROYING ALL CONTAINERS AND VOLUMES"
	@echo "..."

.DEFAULT_GOAL := help

help:
	@echo ""
	@echo "[*] Usage: make [ start | stop | restart | rebuild | upgrade | destroy ]"
	@echo ""
	@echo "[-] example: make start"
	@echo ""
