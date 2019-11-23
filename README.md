# Todo List App


## 参考

- [CocoaPods 源修改](https://mirror.tuna.tsinghua.edu.cn/help/CocoaPods/)

```
新版的 CocoaPods 不允许用pod repo add直接添加master库了，但是依然可以：

$ cd ~/.cocoapods/repos 
$ pod repo remove master
$ git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master

最后进入自己的工程，在自己工程的podFile第一行加上：

source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'

$ pod install
```

- 将 ReactNative 的默认终端改为 iTerm2
> 自己平时使用 iTerm2 作为终端，ReactNative 的默认打开终端是系统自带的 Terminal，这样就会经常存在同时开启两个终端软件的情况，解决方式很简单
```
$ open node_modules/react-native/scripts

# 选中 launchPackager.command ,右键切换它的默认打开工具
```

- [React Native中文网](https://reactnative.cn/)
