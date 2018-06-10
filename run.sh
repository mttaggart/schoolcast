#!/bin/bash

if [ -e ./schoolcast.conf ]; then
    echo "Found config file; starting..."
    source ./schoolcast.conf
else
    echo "Config file not found. Exiting..."
    exit -1
fi

node ./index.js