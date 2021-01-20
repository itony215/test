#!/bin/bash
for i in $(seq 1 100)
do
       #wget -O test.$(date +%Y%m%d_%H%M%S.%N) "http://bld.2tvnow.com/public/anno_jl-du/TW00100007.json" &
       wget -O test "http://bld.2tvnow.com/public/anno_jl-du/TW00100007.json" &
done