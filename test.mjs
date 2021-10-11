// a.js
export default function () {
    console.log("hallo")
}

// b.js
import foo from "a"
foo()
