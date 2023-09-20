const Image = require("jpg-js");
const fs = require('fs');

// const img = Image.open('base.jpg').data; 

// console.log(img); 
exports.Login = function (name, hashval) {
    const x = Math.pow(name.charCodeAt(0), hashval.charCodeAt(0)) % 100;
    let s = "";
    let iml2 = [];


    let isUser = __dirname + "//Signup//" + name + ".jpg";
    if (!fs.existsSync(isUser)) {
        // console.log("no file")
        return 0;
    }

    for (let i = 0; i < hashval.length; i++) {
        s += hashval.charCodeAt(i).toString();
    }

    for (let j = 0; j < s.length; j++) {
        iml2.push(s.charCodeAt(j));
    }

    let lst = iml2; let n = lst.length;
    const img = Image.open("base.jpg").data;
    const l1 = img;

    for (i = 0; i < n; i++) {
        l1[x + i] = lst[i];
    }

    newimage = Image.fromarray(l1, 500, 500); newimage.save(
        __dirname + "//Login//" + name + ".jpg"
    );



    const I1 = Image.open(__dirname + "//Signup//" + name + ".jpg").data;
    const I2 = Image.open(__dirname + "//Login//" + name + ".jpg").data;
    console.log(I1);
    console.log(I2);

    let a = 2;
    for (let x = 0; x < I1.length; x++) {
        if (I1[x] == I2[x]) {
            a = a * 1;
        }
        else {
            a = a * 0;
        }
    }
    if (a == 2) {
        newimage.save(
            __dirname + "//Success//" + name + ".jpg"
        );
        return 1;
    }
    else {
        return 0;
    }
}

