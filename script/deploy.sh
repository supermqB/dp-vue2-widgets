#!/bin/bash
DIR="$( cd "$( dirname "$0"  )" && pwd  )"
echo $DIR
cd $DIR/..

hosts=([dev]="192.168.29.32" [beta]="36.133.124.47")
hostName=$1
echo ${hosts[$hostName]}

yarn build
rsync -av -e "ssh -p 29022" ./dist/ root@${hosts[$hostName]}:/usr/share/nginx/data-standard
