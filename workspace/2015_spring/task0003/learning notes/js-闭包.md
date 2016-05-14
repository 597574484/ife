<h1>javascript学习笔记之闭包</h1>
<pre>
function a(){
  var n = 'x';
  return function(){
    return function(){
       return function(){
            return n;
       }
    }
  }
}
</pre>

> /> a()()()() // return 'x';

<pre>
var object = {
　　　　nam : "My Object",
　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return nam;
　　　　　　};
　　　　}
　　};
</pre>

> /> object.getNameFunc()()  // error;


<h2>作用域链的深入理解，函数闭包的构建顺序</h2>
在构建活动对象的时候会把所有的局部变量都预先加到活动对象上，这样内部所定义的函数(无论是函数定义还是函数的变量声明)的定义也会被加上去，这样，函数的构建也完成了，真的完成了而不像变量提升。以此类推。
闭包中的作用域链的延长是加每层的活动对象于前面 然后包含一个window。
变量查找顺序  在自己的活动对象中找   --->  在自己的原型链中找  ---> 在自己的作用域链中找，找不到 undefined。
 
作用域链在定义的时候建立还是在执行的时候建立？ 
<pre >
function f(x) {
  var g = function () { return x; }
  return g;
}
var h = f(1);

</pre>

> /> alert(h());  //1

分析:  <li>假设函数h的作用域是在执行alert(h())确定的，那么此时h的作用域链是：h的活动对象->alert的活动对象->window对象。</li>
     <li>假设函数h的作用域实在定义时确定的，就是说h指向的那个匿名函数在定义的时候就已经确定了作用域。那么在执行的时候，h的作用域链为：h的活动对象->f的活动对象->window对象。</li>

<a href = "http://www.jb51.net/article/18303.htm">详细见这里</a>
<hr/>
<a href = "http://222.26.160.148/videoplayer/Ecma-262.pdf?ich_u_r_i=9d592f131db3624ff4f3224ba98b8dbb&ich_s_t_a_r_t=0&ich_e_n_d=0&ich_k_e_y=1645058914751163592472&ich_t_y_p_e=1&ich_d_i_s_k_i_d=9&ich_u_n_i_t=1"> 
ECMA 规范PDF</a>