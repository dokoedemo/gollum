# Git

## macOSを更新したらGitが使えない問題

次のようなエラーが出る場合、
```
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```
コマンドラインツールを再インストールすることで解決する。
```
xcode-select --install
```
