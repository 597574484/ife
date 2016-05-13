<h1>javascript学习笔记之原型</h1>
原型 __proto__  and  原型属性 prototype (函数独有)
获得对象原型的方法 :
1 : Object.getPropertyOf 方法 
2 :__proto__
3 : obj.constructor.prototype

当函数当做构造函数新建实例的时候，函数的原型属性会作为原型赋值给实例。
分别通过prototye 和__proto__ 为原型添加属性时 只有prototype可以做到。说明a.__proto__是对constructor.prototype的引用
但是在整体重新赋值prototype在之前定义的实例将仍然使用初始的prototype
<a href = "http://blog.jobbole.com/9648/">以上来自这里</a>

