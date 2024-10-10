#!/bin/bash

# Ensure Solana CLI is installed
if ! command -v solana-keygen &> /dev/null
then
    echo "Solana CLI could not be found. Please install it first."
    exit 1
fi

# Generate a new keypair and save it to a file
KEYPAIR_FILE="./my-project-keypair.json"
solana-keygen new --outfile $KEYPAIR_FILE --no-passphrase

echo "Keypair generated and saved to $KEYPAIR_FILE"
