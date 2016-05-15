<h1>javascript学习笔记之this关键字</h1>

原则　:  this总指向调用函数的对象。
<pre >
全局情况下　:

function a(){
    this.name = 1;
    return this.name;
}
> />a();     //函数a为全局变量(函数)，调用的时候是global调用，所以name 为1。
</pre>


<pre >
var name = "Tom";
var Bob = {
    name: "Bob",
    show: function(){
         alert(this.name);
     }
}
var show = Bob.show;
show();　　//Tom

虽然可以解释成 show为window的变量所以show的调用者，故返回全局变量‘Tom’。
</pre>

但是它解释不了局部变量。
<pre>
var name = "window";

var Bob = {
    name: "Bob",
    showName: function(){
        alert(this.name);
    }
};

var Tom = {
    name: "Tom",
    showName: function(){
        var fun = Bob.showName;
        fun();
    }
};

Tom.showName();　　//window
</pre>

<div>因此比较贴切的解释是 : 当没有明确执行的对象的时候，this指向全局对象。</div>

特殊情况 : setTimeOut or setInterval  中执行时的时候this指向全局变量，并且他们的调用者也是全局变量。 
          new关键字出来的对象中的函数的this指向本对象。