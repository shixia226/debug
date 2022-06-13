# 死循环

## 问题现象
页面卡死无响应

## 定位步骤
1. 新打开 Chrome 标签并打开开发者工具 DevTools
2. 输入页面地址并复现死循环
3. 点击 Sources 面板中的 ”Pause script execution“ 按钮

代码会在死循环处停止运行，如图：

![debug](debug.png)