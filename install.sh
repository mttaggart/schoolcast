#!/bin/bash

# Use yarn if available
if [ -e /usr/bin/yarn ]; then
    echo "Installing dependencies with Yarn"
    yarn install;
# Otherwise use NPM
elif [ -e /usr/bin/npm ]; then
    echo "Installing dependencies with NPM"
    npm install;
# Install these things before running this script!
else
    echo "Cannot install dependencies."
    echo "Please install yarn (https://yarnpkg.com) or node and use npm."
    exit -1
fi

SQ_PATH=./node_modules/.bin/sequelize

# Set Environment
if [ "$NODE_ENV" == "production" ]; then
    ENVIRONMENT="production";
else
    ENVIRONMENT="development"
fi

echo "Using $ENVIRONMENT environment for deployment."

# Run Migrations
echo "Running migrations"
$SQ_PATH db:migrate --env=$ENVIRONMENT

# Run Seeds
echo "Seeding Database"
$SQ_PATH db:seed:all --env=$ENVIRONMENT

exit 0