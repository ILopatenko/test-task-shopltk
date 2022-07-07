#!/bin/bash
# Color variables
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
blue='\033[0;34m'
magenta='\033[0;35m'
cyan='\033[0;36m'
# Clear the color after that
clear='\033[0m'
clear -x

echo -e "${magenta}Hi! This is a BASH script that heps to create a new UI testautomation framework (based on Cypress) with only 1 command!\n${yellow}"
PS3="Have you already created a new gitHub repo for this project?: "

select opt in YES NO; do

  case $opt in
    YES)
    clear -x
      read -p "Enter the link: " link
      clear -x
      echo -e "${cyan}You entered:${green} '$link'"
      echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
      cutted=${link##*/}
      length=${#cutted}
      projectName=${cutted:0:length-4}
      echo -e "${cyan}Your project is :${green} '$projectName'"
      echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
      echo -e "${cyan}Checking that folder ${green}'${projectName}' ${cyan}doesn't exist in current directory :${green}'$(pwd)'"
      echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
      
      if [ -d $(pwd)"/"$projectName ]
        then
            echo -e "  ${cyan}Folder ${green}$projectName${cyan} exists in ${green}$(pwd) - ${red}I am going to delete it!"
            echo -n "$(tput hpa $(tput cols))$(tput cub 7)[DANGER]"
            echo $(rm -r $projectName)
      
      if [ -d $(pwd)"/$projectName" ]
        then
            echo "  CAN'T DELETE $projectName in $(pwd)!" && exit
        else
            echo -e "  ${cyan}Folder ${green}$projectName ${cyan}was deleted from ${green}$(pwd)!"
            echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
      fi
        else
            echo -e "  ${cyan}Folder ${cyan}$projectName ${cyan}doesn't exist in ${green}$(pwd)!"
            echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
    fi
    echo -e "${yellow}Everything is ready to start clonning your empty repository!\n${clear}"
    echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
    echo -e $(git clone $link)
    sleep 2
    clear -x
    if [ -d $(pwd)"/"$projectName ]
    then
    echo -e "  ${cyan}Your progect was clonned!${green}"
    echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
    
    else
    echo -e "  ${red}ERROR!"
    echo -n "$(tput hpa $(tput cols))$(tput cub 7)[DANGER]"
    fi
    
    echo -e "${yellow}Everything is ready to initialize a new npm project!\n${clear}"
    cd $projectName
    npm init -y
    if [ -f 'package.json' ] 
then
    echo -e    "   ${green}Progect was created!${clear}"
else
    echo -e "  ${red}ERROR!${clear}"
fi
     echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
     sleep 2
clear -x
   echo -e "${yellow}Everything is ready to install Cypress v.9.6.0!\n${clear}"
    npm i cypress@9.6.0
    echo -e "${green}"
     echo -n "$(tput hpa $(tput cols))$(tput cub 3)[OK]"
sleep 2
clear -x
      break
      ;;
    NO)
    clear -x
      echo -e "${red}Create the repo, copy link to buffer and start script one more time!"
       break
      ;;
    *) 
    clear -x
      echo -e "${red}Invalid option! Create the repo, copy link to buffer and start script one more time!"
      break
      ;;
  esac
  done