const a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var c=[];
function asd(b){
    const aa = a.slice(0,Math.ceil(b/26));
    aa.map(element => {
        for(let i =0; i<26;i++){
           c.push(element+a[i]);
        }                
    });
    return c.slice(0,b);  
}
console.log(asd(200));
