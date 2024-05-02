#!/bin/bash

BRANCH=$1

if [ "$BRANCH" == "refs/heads/main" ]; then
    cd calpal-backend || exit 1
    git reset --hard HEAD || exit 1
    git pull origin main || exit 1
    npm install || exit 1
    pm2 restart all || exit 1
else
    echo "Not main branch. Not deploying."
fi


