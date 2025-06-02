#!/bin/bash

set -e

refhash="ada4f37e72a76c12cc36efdbf7384929"

./acme/src/acme src/muts.a

hash=$(md5 m-uts.rom | awk '{ print $4 }')

if [[ $hash != $refhash ]]; then
  echo "Bad hash: $hash != $refhash" >&2
  exit 1;
fi
