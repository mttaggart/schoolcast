# Schoolcast
Digital signage generator for schools

Schoolcast is an all-in-one server for easy digital signage. This system allows you to create custom display layouts, connect regions of the layout to specific sources of information.

<!-- TOC -->

- [Schoolcast](#schoolcast)
    - [Getting Started](#getting-started)
        - [Linux/macOS Installation](#linuxmacos-installation)
            - [Optional (Linux): Create a systemd service](#optional-linux-create-a-systemd-service)
        - [Docker Installation](#docker-installation)

<!-- /TOC -->

## Getting Started

This repository is ready for deployment either natively on a Linux/macOS server, or in a Docker container.

### Linux/macOS Installation

Before beginning, please ensure you have [Node](https://nodejs.org) and, by extension, `npm`. You might also consider installing the [Yarn](https://yarnpkg.com) package manager.

1. Clone this repo

```bash
$ git clone https://github.com/mttaggart/schoolcast
```

2. Enter the directory

```bash
$ cd schoolcast
```

3. **EDIT THE `schoolcast.conf` FILE WITH YOUR INFO.** The settings currently there are just examples and **MUST** be changed before deployment!

4. Run the installer. This will use Yarn or NPM to install all requisite dependencies. **NOTE: IF `NODE_ENV` is already set to `production`, the build will fail!**

```bash
$ chmod 755 install.sh
$ ./install.sh
```
This may take some time to install all the dependencies and build the app into the `build/` directory.

5. Run the app!

You now have a ready-to-go Node app.

```bash
$ chmod 755 ./run.sh
$ ./run.sh
```

#### Optional (Linux): Create a systemd service

You might want to consider running a `systemd` service for Node server to keep it running and start it on boot:

```bash
$ nano /etc/systemd/system/schoolcast/service
```

Use the following template to create the service file:

```bash
[Unit]
Description=SchoolCast: A Node-based signage solution
Documentation=https://github.com/mttaggart/schoolcast
After=network.target

[Service]
Type=simple
User=root
ExecStart=/path/to/repo/run.sh
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Then enable/start the service.

```bash
$ sudo systemctl enable schoolcast.service
$ sudo systemctl start schoolcast.service
```

### Docker Installation

This one's simple. 

1. Build the Docker image from the Dockerfile

```bash
$ cd schoolcast
$ sudo docker build -t "schoolcast" .
```

2. Run the container

```bash
$ sudo docker run -d -p --restart=always $PORT:$PORT schoolcast
```