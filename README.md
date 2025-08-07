## Simple setup on Linux

### client

**1)** Run this command to bring in dependencies, then run the project
```
// assuming you already have npm installed
npm i
npm run dev
```
### server
**1)** Make sure to have java 24 installed and maven 3.9.9
```
// on Debian
sudo apt install java-24-openjdk-devel

// on Fedora
sudo dnf install java-24-openjdk-devel
```
**2) Install Maven (the package manager for Java applications)**
```
// on Debian
sudo apt install maven

// on Fedora
sudo dnf install maven
```
**3)** Move into the root directory of the server and run this command to bring in dependencies and run the spring boot project
```
mvn spring-boot:run
```
This will give you an error because you don't have your database set up. So let's do that on the next step

### Easiest DB setup Docker

**1)** Make sure you have Docker installed  
**2)** Create a docker network called `pg-network`  
```
sudo docker network create pg-network
```
**3)** Run this command to bring in the pgAdmin docker image (GUI where you can see your database)
```
sudo docker run --name pgadmin-container --network pg-network -p 8000:80 -e PGADMIN_DEFAULT_EMAIL=your_email@example.com -e PGADMIN_DEFAULT_PASSWORD=your_password -d dpage/pgadmin4
```
**4)** Run this command in the root directory of this project to bring in a postgres db docker image (your postgres server) and start the container
```
chmod +x ./script.sh && ./script.sh
```
**5) Don't forget to rerun the server to test your connection**
```
mvn spring-boot:run
```

### Happy Hacking! :D