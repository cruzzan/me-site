SHELL := /bin/bash
IMAGE_NAME := me-site

.PHONY: build
build:
	@echo "Building image"
	docker build --no-cache -t me-site .

.PHONY: compose-dev
compose-dev:
	@echo "Starting container..."
	@IMAGE_NAME=$(IMAGE_NAME) \
	docker-compose \
	-f compose/docker-compose.yml \
	-f compose/docker-compose-dev.yml \
	up \
	--force-recreate \
	-d
	@echo "Done!"

.PHONY: compose
compose:
	@echo "Starting container..."
	@IMAGE_NAME=$(IMAGE_NAME) \
	docker-compose \
	-f compose/docker-compose.yml \
	-f compose/docker-compose-prod.yml \
	up \
	--force-recreate \
	-d
	@echo "Done!"
