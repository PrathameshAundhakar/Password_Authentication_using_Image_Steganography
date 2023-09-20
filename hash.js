const SHA1 = require("crypto-js/sha1");
const SHA3 = require("crypto-js/sha3");
const SHA224 = require("crypto-js/sha224");
const SHA256 = require("crypto-js/sha256");
const SHA384 = require("crypto-js/sha384");
const SHA512 = require("crypto-js/sha512");

exports.hash = function (user, pass) {
    // function hash(user, pass){    
    const permut_list = ["FEBCDA", "CEFBDA", "BCEFDA", "CFEBAD", "BAFCDE", "ABFCDE", "DEBCFA", "CABADF", "FEDC AB", "BDAFCE"];
    let mypath = permut_list[(Math.pow(user.charCodeAt(0), pass.charCodeAt(0))) % 10];
    // console.log(mypath); 
    for (let i = 0; i < mypath.length; i++) {
        if (mypath[i] == "A") {
            pass = SHA1(pass);
        }
        else if (mypath[i] == "B") {
            pass = SHA3(pass);
        }
        else if (mypath[i] == "C") {
            pass = SHA224(pass);
        }
        else if (mypath[i] == "D") {
            pass = SHA256(pass);
        }
        else if (mypath[i] == "E") {
            pass = SHA384(pass);
        }
        else if (mypath[i] == "F") {
            pass = SHA512(pass);
        }
    }
    return pass;
} 
