#!/bin/bash

if (test -f "/tmp/localhost.key" && test -f "/tmp/localhost.crt")
then exit 0;
fi

# Below got from: https://letsencrypt.org/docs/certificates-for-localhost/#making-and-trusting-your-own-certificates

exec openssl req -x509 -out /tmp/localhost.crt -keyout /tmp/localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")