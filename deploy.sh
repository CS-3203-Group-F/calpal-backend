#!/bin/bash

cd calpal-backend
git pull origin main
npm install
pm2 restart all

