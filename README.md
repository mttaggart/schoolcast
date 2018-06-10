# Schoolcast
Digital signage generator for schools

Schoolcast is an all-in-one server for easy digital signage. This system allows you to create custom display layouts, connect regions of the layout to specific sources of information.

<!-- TOC -->

- [Schoolcast](#schoolcast)
    - [Getting Started](#getting-started)
        - [Linux/macOS Installation](#linuxmacos-installation)
            - [Optional (Linux): Create a systemd service](#optional-linux-create-a-systemd-service)
        - [Docker Installation](#docker-installation)
        - [Using the app](#using-the-app)
        - [Displays](#displays)
        - [Portals](#portals)
        - [Feeds](#feeds)
        - [Items](#items)

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
$ sudo docker run -d -p $PORT:$PORT --restart=always --name=schoolcast schoolcast
```

### Using the app

The default admin account is `admin@testdomain.com`, with a password of `adminpassword`. Please delete this account on login and after creating new Admin credentials.

Upon logging in, you'll be able to create Displays, Portals, Feeds, and Items.

### Displays

Displays are composites of multiple Portals. These are what actually comprise your signage. When editing displays, you'll see a preview of the Portal layout below the form.

### Portals

Portals are sections of a Display. Each Portal has a Portal Type, defining what type of media (Image, Video, Text, Embed) the Portal will display. Each Portal is also associated to a single Feed, from which it pulls its content.

### Feeds

Feeds are simply groups for content. They can contain any media types; the Portals will sort through those later. Feeds contain Items.

### Items

Your content. Items have a type, which matches a given Portal's Type. Items are connected to Feeds. 

Depending on the Item Type, different types of information are expected in the `content` field. It goes:

* Image/Video: URL to image (we don't host media)
* Text: Plain text or HTML
* Embed: URL to website. SchoolCast makes the `<iframe>` for you.

Items have a start/end date, which is the only window during which they'll be visible on Displays.