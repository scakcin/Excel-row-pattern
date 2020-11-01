const a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var c=[];
function asd(b){
    const aa = a.slice(0,Math.ceil(b/26));
    aa.map((element,i) =>{               
        c.push(element+a.join(a[i]));
    });
    return c;  
}
let cs = (b)=>asd(b).join('').match(/.{1,2}(?=(.{2})+(?!.))|.{1,2}$/g).slice(0,b);
console.log(cs(654));