#!/bin/bash
for i in $(seq 1 100)
do
       wget -O test.$(date +%Y%m%d_%H%M%S.%N) -i 'cases.txt' &
done