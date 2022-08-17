## ES6模块化导入导出
ES6的模块化分为导入与导出两个模块。在ES6中每一个模块即是一个文件，在文件中定义的变量，函数，对象在外部是无法获取的。如果希望外部可以读取模块当中的内容，就必须使用export来对其进行暴露（输出）

默认导出（default export）：一个模块只能有 一个默认导出，对于默认导出，导入的名称可以和导出的名称不一致。可以将所有需要导出的变量放入一个对象中，然后通过default export进行导出。

重名export和import：如果导入的多个文件中，变量名字相同，即会产生命名冲突的问题，为了解决该问题，ES6为提供了重命名的方法。
CommonJS规范规定，每个模块内部，module变量代表当前模块。这一个变量是一个对象，module对象会创建一个叫exports的属性，这个属性的默认值是一个空的对象module.exports是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。通过module.exports输出变量和函数，使用require方法用于加载模块。
（1）export与module.exports的关系
node为每个模块都提供一个exports变量，指向module.exports
Module.exports可以直接导出一个匿名函数或者一个值，但是exports不可以
（2）exports和export default的区别
export是ES6的语法，用于导出模块中的变量，对象，函数，类。对应的导入关键词是import。
Export default在模块中只能有一个，也可以没有，且其对象、变量、函数、类可以没有名字。
因此，使用export是import {}需要有大括号，而使用export default时无需大括号
