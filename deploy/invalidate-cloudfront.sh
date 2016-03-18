#!/bin/bash

install_awscli(){
  pip install --user awscli
  export PATH=$PATH:$HOME/.local/bin
}

configure_awscli(){
  aws configure set aws_access_key_id "AKIAJH2D5IPIRHYJT5IA"
  aws configure set aws_secret_access_key "c4AAOq1v934Bxlihi46UaXCahPvMLBRZs6QliWxBl0uU3JWnlKgmu7H6uW5BrGXvmNV5rjXe72byutSzbF/LaSuE4B6MgrqdGsDBNWd/gnYFf7zFhCB30FAu8qmQb1JPO8ulteLydzTSupJmqRwhykQjsRdiIQRJDETBcyxD8jnkopy6Di/UmWzMG2v4pGAlelBc0AfEM3AcuoTxUrcG/GEPT8IMHDV4286CVGndaV5qda3phpOSZybvNaF8uT/okut7IS/J68iXytLHbE1IVGGvfp4gT4eEi5EtwWbyeCOObCJU13atN3g+w+T65hQCWpPFVFNYh+ICYayN0RVSii5Tjy7vwBaqgUadJtVgxy2sqcx7UwRCuwAYsIbUZQvRQCuAkfN0mNLopf7sHzRjzuyROOlCO8zDM+C3carNBO3GN4Hce1c3kA7pIzcGDS02iu4fRXjxdJnXIoluJQFrICbke4LAPWx7rEDWOdXuYZcfGM9CR4EUcI5BfSpvmYjPuBm5zzEPK3jO5x4cbfZJQrD3rhr81e0qRspZHwk0GkI0c4U+1DZKVK/Oa220ISrfoOjyJXJHMFnRaqk7WNyZglubBLGoy6n6g1lB99HvyGmfC6ANhgJuu/40bYJcLqX5jo5BUQB37/6ONX32VK1ytOC2CnlKsWoujDpTRGGEEr0="
  aws configure set preview.cloudfront true
}

create_invalidation(){
  local git_tag=$1
  aws cloudfront create-invalidation \
    --distribution-id E3EMCM58DB8XDT \
    --invalidation-batch "{\"Paths\": {\"Quantity\": 3, \"Items\": [\"/index.html\", \"/cwc/index.html\", \"/dist/bundle.js\", \"/dist/bundle.js.map\"]}, \"CallerReference\": \"travis-$git_tag\"}"
}

main(){
  local aws_access_key_id=$1
  local aws_secret_access_key=$2
  local git_tag=$3

  install_awscli
  configure_awscli "$aws_access_key_id" "$aws_secret_access_key"
  create_invalidation "$git_tag"
}
main $@
