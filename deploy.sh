#!/bin/bash
BRANCH=$1
if [ "$BRANCH" == "refs/heads/main" ]; then
    cd calpal-backend
    git pull origin main
    npm install
    pm2 restart all
else
    echo "Not main branch. Not deploying."
fi
