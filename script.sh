!#/bin/bash

sudo docker run --name postgres \
  --network pg-network \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=influencer \
  -p 5432:5432 \
  -d postgres:16

sudo docker container start postgres