# Todo List App


## 参考

- [CocoaPods 源修改](https://mirror.tuna.tsinghua.edu.cn/help/CocoaPods/)

```bash
新版的 CocoaPods 不允许用pod repo add直接添加master库了，但是依然可以：

$ cd ~/.cocoapods/repos 
$ pod repo remove master
$ git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master

最后进入自己的工程，在自己工程的podFile第一行加上：

source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'

$ pod install
```

- [React Native中文网](https://reactnative.cn/)
