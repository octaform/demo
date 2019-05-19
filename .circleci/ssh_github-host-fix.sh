#!/bin/sh

# https://github.com/IntelAI/mlt/issues/466
mkdir -p ~/.ssh/
echo -e "Host github.com\n\tStrictHostKeyChecking no\n\tUserKnownHostsFile /dev/null\n" > ~/.ssh/config
chmod 600 ~/.ssh/config
ssh-keyscan -Ht rsa github.com >> ~/.ssh/known_hosts
