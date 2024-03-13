#!/bin/bash

TITLE=$@
TITLEF=$(echo $TITLE | tr " " "-")
YEAR=$(date +"%Y")
MONTH=$(date +"%m")

mkdir -p "src/posts/$YEAR/$MONTH"
FILENAME="src/posts/$YEAR/$MONTH/${TITLEF,,}.md"

cat <<EOF > $FILENAME
---
title: "$TITLE"
description: "$TITLE"
date: "$(date '+%Y-%m-%d')"
ogImage: 
tags:
-
---

EOF

echo "Created new post at $FILENAME"
