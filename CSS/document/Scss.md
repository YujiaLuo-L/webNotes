### Scss是什么？

### 优缺点
css的@import规则，它允许在一个文件中导入其他css。然而，后果是只有执行到@import时，浏览器才会去下载其他css文件，这导致页面加载特别慢
scss也有@import规则，但scss的@import规则在生成css文件时久把相关文件导入进来，这意味着所有相关的样式被归纳到统一改为css文件中，而无需发起额外的下载请求。


