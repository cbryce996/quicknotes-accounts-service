# Quick Notes accounts microservice

## Description
Provides user accounts services for Quick Notes

## Setup

### Docker

Project intended to be run in a Docker container, you will need to install docker to do this.

````
sudo apt-get install docker.io
````

Note: Conflicts can arise with Snap versions of Docker, if you have this issue then uninstall the Snap version and install docker with the above command.

### Node

Project utilizes Node.js and npm, to install these use the following command.

````
sudo apt-get install nodejs
````

## Usage

### Docker
The docker container can be run in either a production environment or a development environment. The development environment will run nodemon to update the node server when files are changed and uses a bind mount to mount the source files into the development environment.

### Development:
````
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
````
### Production
````
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
````