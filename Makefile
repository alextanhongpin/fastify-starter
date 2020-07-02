ENV ?= development
-include .env
-include .env.${ENV}
export

migrate:
	@npm run db-migrate up

sql-%:
	@npm run db-migrate create $*

up:
	@docker-compose up -d

down:
	@docker-compose down

start:
	@npm run dev

build-policy:
	opa build -t wasm -e 'example/hello' ./example.rego
