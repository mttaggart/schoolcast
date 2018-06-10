#!/bin/bash

# Use yarn if available
if [ -e /usr/bin/yarn ]; then
    echo "Installing dependencies with Yarn"
    PM=yarn
# Otherwise use NPM
elif [ -e /usr/bin/npm ]; then
    echo "Installing dependencies with NPM"
    PM=npm
# Install these things before running this script!
else
    echo "Cannot install dependencies."
    echo "Please install yarn (https://yarnpkg.com) or node and use npm."
    exit -1
fi

# Actually install deps
$PM install 

# Build the app
$PM build

if [ -e ./schoolcast.conf ]; then
    echo "Found config file; starting..."
    source ./schoolcast.conf
else
    echo "Config file not found. Exiting..."
    exit -1
fi

SQ_PATH=./node_modules/.bin/sequelize

echo "Using $ENVIRONMENT environment for deployment."

# Run Migrations
echo "Running migrations"
$SQ_PATH db:migrate --env=$NODE_ENV

# Run Seeds
echo "Seeding Database"
$SQ_PATH db:seed:all --env=$NODE_ENV

exit 0