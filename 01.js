//1
/*
var A = {n : 4399};
var B = function(){ this.n= 9999};
var C = function(){ var n= 8888};
B.prototype = A;// B 继承与 A={n:4399};
C.prototype = A;// B 继承与 A={n:4399};
var b = new B();
//b = { n : 9999 }
var c = new C();
// c = {}  可以继承A的属性
A.n++;
console.log(b.n);//9999
console.log(c.n);//4400


new运算的具体执行过程：
    1)创建一个空对象
    2)把这个空对象的__proto__指向构造函数的prototype
    3)把这个空对象赋值给this
    4)执行构造函数内的代码，注意此时的this指向新对象，this.n=9999 等价于b.n=9999;
然后访问b.n，存在，直接输出b.n。
再去访问c.n，不存在，通过原型链__proto__向上寻找，c.__proto__指向C.prototype也就是A，所以就是输出A.n
*/

//2

/*
function test(){
    var n = 4399;

    function add(){
        n++;
        console.log(n);
    }

    return {n:n, add: add}
}
var result = test();
//result = {n: 4399, add: funtion (){ n++; console.log(n) }}
var result2 = test();
////result = {n: 4399, add: funtion (){ n++; console.log(n) }}

result.add();//4400
result.add();//4401 
console.log(result.n);//4401 X 4399 Y
result2.add();//4400

首先，题中定义了一个函数，名为test，这个函数内部分别又定义了一个数值变量n和一个闭包函数add，test函数的最后一行代码return{n:n,add:add}，实际上是返回了一个object，而这个object中有一个属性n，它的值是n，还有一个方法add，它的值是add。
好了，函数解释清楚，再来看输出的问题。函数外部分别定义了两个变量，result和result2，他们都指向test函数，但是分属两个不同的作用域，这也就解释了答案中1和4,4不会在2的基础上继续n++。
1和2属于闭包函数的问题，可参考阮一峰老师的一篇博文（http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html），简单易懂，借用阮老师博客中所写，闭包的两个最大的用处：一个是可以读取到函数内部的变量，另一个就是让这些变量的值始终保持在内存中，具体可以测试。第二个用途就解释了同一个作用域中答案2会在1的基础上进行+1操作。
答案3是比较令人困惑的一项，追本溯源，前面提到过第6行代码返回了一个有着值为n的属性n和值为add的方法add的匿名对象，在这里，在这个匿名对象中，属性n和方法add是互不相关的，即使在闭包add中改变了变量n的值，result.n的值依然不变。
以上，首答，说了下自己的理解，有不对的地方还望指正。
*/
//3
/*
var F=function(){};
Object.prototype.a=function(){};
Function.prototype.b=function(){};
var f=new F();
//f能取到a，但取不到b

/*
 * 这个问题涉及到js的原型继承
1. f.__proto__ === f[的构造函数].prototype === F.prototype
2. F.prototype.__proto__ ===  (F.prototype)[的构造函数].prototype ===   Object.prototype (所以a能够 通过f.a访问)
3. f.constructor === F
4. F.__proto__ === F[的构造函数].prototype === Function.prototype (所以b可以通过, f.constructor.b访问到)

注意: 
(F.prototype)[的构造函数] === Object
F[的构造函数] === Function

多啰嗦一句( js 的继承靠的是__proto__ ,并不是prototype)
 */

/**
 * js中所有函数的参数（按值和按引用）都是按值传递的,怎么理解？
 * https://www.cnblogs.com/tangjiao/p/9953285.html
 * 
function setName(obj){  
  obj.name="nick";  
  obj=new Object();  
  obj.name="greg";  
}  
  
var person=new Object();  
setName(person);  
alert(person.name);    //"nick"


书中给的例子是以上代码.用反证法证明，假设person是按引用传递的参数，则在函数中name属性已经被赋值“greg”，所以结果应该为greg才对.
正是因为person是按值传递,才出现以上结果.person传进函数的是指向person对象的地址(0x****),
将这个地址值赋值给形参obj(函数实参和形参都指向同一个对象), obj.name="nick"; 
执行完后形参和实参person所指的那个对象中的name属性被修改为nick,此操作会影响到全局的person,obj=new Object();
执行完后形参指向一个新的堆内存地址,跟实参没有任何关系了,也就跟全局的person所指向的对象没有任何关系了,obj.name="greg";
将形参所指的局部对象的name属性修改为greg,
此操作对全局的person对象不会再有影响,形参所指向的对象在函数执行完被销毁.全局打印person.name为nick.
 * 
 *  */

 /*
 函数的参数是按值传递的


function test(person) {
    person.age = 26
    person = {
      name: 'yyy',
      age: 30
    }
  
    return person
  }
  const p1 = {
    name: 'yck',
    age: 25
  }
  const p2 = test(p1);
  console.log(p1) // -> ? { name:'yck', age: 26 }
  console.log(p2) // -> ? { name:'yyy', age: 30 }
  */
