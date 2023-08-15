// IIFE

(function(){
    console.log('hello from iife');
})();


(function(name){
    console.log('hello my name  '+name);
})('john');

x=(function(a,b,c){
    return a+b+c;
})(10,12,12);
console.log(x);