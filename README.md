# ecommerce-sw-testing
[![Coverage Status](https://coveralls.io/repos/github/hothithanhthao/ecommerce-sw-testing/badge.svg?branch=main)](https://coveralls.io/github/hothithanhthao/ecommerce-sw-testing?branch=main)


## Requirements
1. Docker installed in host computer


## How to run
1. Navigate to the root folder
`cd ecommerce-sw-testing/`
2. Run Docker build command
`docker build -t swtesting .`
3. Run Docker run command to run the container
`docker run -d -p 2022:22 --name swtesting swtesting`
4. SSH to Docker container with user & pwd from Dockerfile (ssluser/swtesting)
`ssh ssluser@127.0.0.1 -p 2022`
5. Run test coveralls command
`sudo npm run coveralls`
6. Stop and remove Docker container & image. 
Before stop and remove, you need to exit from SSH session. After that run following commands:
    - `docker stop swtesting`
    - `docker container rm swtesting`
    - `docker image rm swtesting`
