#!/bin/bash

meteor build ../petfinder-build --server https://petfinder.casa.genar.me
cd ../petfinder-build/android/
jarsigner -digestalg SHA1 release-unsigned.apk petfinder
~/Android/Sdk/build-tools/22.0.1/zipalign 4 release-unsigned.apk release-signed.apk
