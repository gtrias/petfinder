#!/bin/bash

meteor build ../mobile-build --server https://petfinder.casa.genar.me
cd ../mobile-build/android/
jarsigner -digestalg SHA1 -storepass:env JARSIGNER_STOREPASS -keypass:env JARSIGNER_STOREPASS release-unsigned.apk petfinder

rm -rf release-signed.apk
~/Android/Sdk/build-tools/22.0.1/zipalign 4 release-unsigned.apk release-signed.apk

echo "" | mutt -a release-signed.apk -s "Here is the new petfinder version" -- gtrias@gmail.com
