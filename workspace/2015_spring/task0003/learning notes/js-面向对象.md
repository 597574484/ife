<h1>javascript学习笔记之面向对象</h1>

<h2> 面向对象之封装</h2>
constructor + prototype
方法 :   1. isPrototypeOf()  验证是否是调用者的实例。
        2. hasOwnProperty() 判断属性是本地属性还是prototype上的属性。
        3. in  可以不缺分本地还是原型，只判断有没有。
        
<h2> 面向对象之继承</h2>

<h3>构造函数的继承</3>
1.子构造函数内部调用 父构造，并apply绑定。
2.子构造的prototype属性赋值为父的实例。  PS : 一定要把子的构造重新绑定到自己。否则指向父的构造了。
3.子构造的prototype属性赋值为父的prototype。  同上PS。  缺点: 一改同改。
<pre>function Animal(){}
Animal.prototype.species = "动物";
function Cat(name,color){
    this.name = name;
    this.color = color;
}
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat = new Cat("大毛","黄色");
var ani  = new Animal();
</pre>
> ani cat 改的时候另一个没改。 PS废话 此时的变量定义在 ani 或 cat 实例上了 所以不改。应该直接改Cat.prototype or  Animal.prottype
> by the way 此时原型的构造都指向的是Cat

4.空对象为中介
<pre>
Animal.prototype.species = "动物";
function Cat(name,color){
    this.name = name;
    this.color = color;
}
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;
//test
var cat = new Cat('hehe','red');
var ani = new Animal();
</pre>
> /> cat.__proto_._ == ani.__proto_._  //false;   PS 自然构造也不一样的。
>  but cat.__proto_._._._proto_._ === ani.__proto_._   

5.拷贝继承
    for in 拷贝所有父类 元素。
    
<h3>非构造函数的继承</h3>
1.object方法
<pre>
    var chinese = {nation : 'china'};
    var doctor  = {career : 'doctor'};
    function object(o){
        var F = function(){};
        F.prototype = o;
        return new F();
    }
</pre>
> />  object(chinese);    //再为返回的对象添加属性

2.浅拷贝
3.深拷贝

<hr/>

<pre>
//深拷贝实现方法。
function deepCopy(p, c) {
　　　　var c = c || {};
　　　　for (var i in p) {
　　　　　　if (typeof p[i] === 'object') {
　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
　　　　　　　　deepCopy(p[i], c[i]);
　　　　　　} else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
　　　　return c;
　　}
</pre>
<hr/>
<a href = "http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html">来自这里</a>

<h2>附</h2>
当代码var obj = new Person("name", "age");执行时，其实内部做了如下几件事情：
>1.创建一个空白对象（new Object()）。
>2.链接到[_[prototype]_]。
>3.将这个对象通过this关键字传递到构造函数中并执行构造函数。
>4.将这个对象赋值给变量obj。
_<a href = "http://www.cnblogs.com/sanshi/archive/2009/07/08/1519036.html">From here</a>_<div></div>
 <a href = "https://segmentfault.com/a/1190000002440502">全面的继承方法，更像神书的介绍。</a>
 
 所有的函数都是由Funciton构造出来的，所有所有的函数的constructor都是Function
 <a href = "http://www.jb51.net/article/25027.htm#comments">烧脑图片</a>