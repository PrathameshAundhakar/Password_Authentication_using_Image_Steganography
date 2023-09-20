const Image = require("jpg-js");

// const img = Image.open('base.jpg').data; 
// console.log(img); 
exports.Signup = function (name, hashval) {
    const x = Math.pow(name.charCodeAt(0), hashval.charCodeAt(0)) % 100;
    let s = "";
    let iml2 = [];
    for (let i = 0; i < hashval.length; i++) {
        s += hashval.charCodeAt(i).toString();
    }
    for (let j = 0; j < s.length; j++) {
        iml2.push(s.charCodeAt(j));
    }

    let lst = iml2;
    let n = lst.length;

    const img = Image.open("base.jpg").data;
    const l1 = img;

    for (i = 0; i < n; i++) {
        l1[x + i] = lst[i];
    }
    newimage = Image.fromarray(l1, 500, 500);
    newimage.save(
        __dirname + "/Signup//" + name + ".jpg"
    );
    console.log("Your data feeded");
    return 1;
} 
