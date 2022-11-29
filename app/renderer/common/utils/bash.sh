#!/bin/bash
if [ $1 = '-add']
then
useradd $2
else
userdel -r $2
fi
