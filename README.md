# Multi Tenancy with Nest.js Example

## Run

### Requisites

- Docker
- Node.js 20

### Commands

- docker compose up
- npm install
- npx prisma migrate dev
- npm run start:dev

## Nest Js

- npm install -g @nestjs/cli
- nest new project-name
- nest g module module-name
- nest g controller controller-name
- nest g service service-name
- npm install @nestjs/jwt
- nest g resource resource-name
- nest g guard guard-name
- nest g interceptor interceptor-name
- nest g decorator decorator-name

## Prisma Js

- npx prisma init
- npm install @prisma/client
- npx prisma migrate dev
- npx prisma studio

## MultiTenancy with multiples databases (Infos in Portuguese Brazil)

Para tenancy com múltiplos banco de dados ao invés de compartilhar o banco e atrelar os dados ao partner com relations:

- criar outro prisma service por tenant com injectable scope request (manter este para outros usos)
- criar um interceptor para pegar o tenant do partner user da requisição
- consulta de dados de conexão ao banco do partner/tenant
- criar um construtor no novo prisma service que recebe a string de conexão do banco de dados e chama o super()
