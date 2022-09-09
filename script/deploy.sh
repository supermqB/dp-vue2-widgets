#!/bin/bash
DIR="$( cd "$( dirname "$0"  )" && pwd  )"
echo $DIR
cd $DIR/..

hostName=$1
if [ $hostName == "beta" ];
then
    hostIP="36.133.124.47"
else
    hostIP="192.168.29.32"
fi

yarn build
echo deploying to "root@${hostIP}:/usr/share/nginx/data-standard"
rsync -av -e "ssh -p 29022" ./dist/ root@${hostIP}:/usr/share/nginx/data-standard
