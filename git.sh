#!/bin/bash  
set -u  # 开启未设置变量检测  
  
echo "提交代码中请稍等..."  
pink_bg='\033[48;5;69m'  # 这是一个近似的 256 色代码，用于匹配 #4F74FF  
reset='\033[0m'         # 重置颜色到默认  
  
git pull  
  
git add .  
  
read -p "请输入提交内容: " commit_context  
  
if [ -z "$commit_context" ]; then  
    echo "请输入commit内容"  
    exit 1  
fi  
  
git commit -m "$commit_context"  
  
git push  
  
echo "代码提交完成。"  
echo -e "${pink_bg}*********************************************************${reset}"  
echo -e "${pink_bg}*********************🚀非一般的感觉，恭喜你提交成功🚀**********************${reset}"  
echo -e "${pink_bg}*********************************************************${reset}"
