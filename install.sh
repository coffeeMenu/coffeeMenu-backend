#!/usr/bin/env bash

# this script will install PocketBase for linux

version='0.10.4'

dl="https://github.com/pocketbase/pocketbase/releases/download/v${version}/pocketbase_${version}_linux_amd64.zip"
wget "${dl}"

unzip pocketbase_*_linux_amd64.zip*

rm pocketbase_*_linux_amd64.zip*
