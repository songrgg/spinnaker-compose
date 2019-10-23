# Run Spinnaker on bare metal 
You can run spinnaker on CentOS by docker-compose.

## Quickstart
1. Provision a machine  
At least 16GB memory and 4 cores, it may need more than this since my macbook pro(4cores, 16GB) was stuck when I started spinnaker.

    ```bash
    sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    git clone https://github.com/songrgg/spinnaker-compose
    ```

1. Start MySQL for front50 service

    ```bash
    docker run -e MYSQL_ROOT_PASSWORD=spinnaker -p 3306:3306 -d mysql
    docker exec -i mysql sh -c 'exec mysql -uroot -p spinnaker' < sql/front50_mysql.sql
    ```

    **Replace the `<mysql-ip>` in config/front50.yml.**

1. Start all services

    ```bash
    cd spinnaker-compose
    docker-compose up -d
    ```

## To access the spinnaker
Visit `http://localhost:9000` in browser if you run spinnaker on local machine.

Otherwise you can use ssh to create tunnel on local machine. Spinnaker exposes two ports, 9000 for web, 8084 for api gateway.
```bash
ssh -L 8084:localhost:8084 <remote-host>
ssh -L 9000:localhost:9000 <remote-host>
```

## Add clouddriver
You need to edit `config/clouddriver.yml` to open multiple clouddrivers, it's not easy to integrate since we don't have the `halyard` to do this stuff, but if you already have the clouddriver.yml, it's easier to make it work.

Since clouddriver will need credentials, you need to modify the `docker-compose.yml` to mount the credential files on the docker containers.
