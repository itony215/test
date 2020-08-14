#!/bin/bash
for i in $(seq 1 10000)
do
       wget -O test.$(date +%Y%m%d_%H%M%S.%N) "https://bld-annotation-img.s3-ap-northeast-1.amazonaws.com/TW00100014/TW00100014_M.JPG" &
done