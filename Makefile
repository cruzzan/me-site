SHELL := /bin/bash
IMAGE_NAME := sebastianhultstrand/me-site:latest
TAG ?= untagged

.PHONY: build
build:
	@echo "Building image"
	docker buildx build \
	--platform linux/arm/v7,linux/amd64 \
	-t sebastianhultstrand/me-site:$(TAG) \
	--push \
	.

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
