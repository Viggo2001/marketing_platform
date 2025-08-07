## How to run DB (on Linux)

### 1. With Docker

a) Make sure you have Docker installed
b) Create a docker network called 'pg-network'
```
sudo docker network create pg-network
```
c) Run this command to bring in the pgAdmin docker image (GUI where you can see your database)
```
sudo docker run --name pgadmin-container --network pg-network -p 8000:80 -e PGADMIN_DEFAULT_EMAIL=your_email@example.com -e PGADMIN_DEFAULT_PASSWORD=your_password -d dpage/pgadmin4
```
d) Run this command in the root directory of this project to bring in a postgres db docker image (your postgres server) and start the container
```
chmod +x ./script.sh && ./script.sh
```

