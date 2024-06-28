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
# 画机器人的头  
echo -e "  ▄▄▄▄▄"  
echo -e " ▌▒█░░█▒▌"  
echo -e " ▌▒▒█▀▀▀█▒▌"  
echo -e "▐▄▀▒▒▀▀▀▀▒▒▀▄▌"  
echo -e "█▀▄▒▒    ▒▒▄▀█"  
echo -e "█▀ ░░   ░░ ▀█"  
echo -e "▀▄▒▒▒▄▄▒▒▄▀"  
echo -e "  ▀▀▀▀▀"  
  
# 画机器人的身体  
echo -e "    │"  
echo -e "    │"  
echo -e "    │"  
  
# 画机器人的手臂（左右各一个）  
echo -e "    ├────┤"  
echo -e "    │    │"  
  
# 画机器人的腿（左右各一条）  
echo -e "   ┌────┴────┐"  
echo -e "   │       │"  
echo -e "   └───────┘"  
