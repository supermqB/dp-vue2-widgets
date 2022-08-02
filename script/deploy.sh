#!/bin/bash
DIR="$( cd "$( dirname "$0"  )" && pwd  )"
echo $DIR
cd $DIR/..
yarn build
rsync -av -e "ssh -p 29022" ./dist/ root@192.168.29.32:/usr/share/nginx/data-standard
