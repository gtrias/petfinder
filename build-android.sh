#!/bin/bash

cd ../petfinder-build/android/

jarsigner -digestalg SHA1 -storepass:env JARSIGNER_STOREPASS -keypass:env JARSIGNER_STOREPASS release-unsigned.apk petfinder

rm -rf release-signed.apk
~/Android/Sdk/build-tools/22.0.1/zipalign 4 release-unsigned.apk release-signed.apk

echo "" | mutt -a release-signed.apk -s "Here is the new petfinder version" -- gtrias@gmail.com
echo "" | mutt -a petfinder-signed.apk -s "Here is the new petfinder version" -- gtrias@gmail.com

docker rm -f petfinder

docker run --restart=always --name petfinder -d -e VIRTUAL_HOST=petfinder.casa.genar.me -e ROOT_URL=http://petfinder.casa.genar.me  --link mongodb  -e MONGO_URL=mongodb://mongodb:27017/petfinder     -v /home/genar/src/meteorjs/petfinder-build:/bundle   -P     meteorhacks/meteord:base
