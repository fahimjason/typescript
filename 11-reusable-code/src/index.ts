import fs from "fs";

const matches = fs
    .readFileSync("football.csv", {
        encoding: "utf-8",
    })
    .split("\n")
    .map((row) => {
        return row.split(",");
    });

let manUnited = 0;

for (let match of matches) {
    if (match[1] === "Man United" && match[5] === "H") {
        manUnited++;
    } else if (match[2] === "Man United" && match[5] === "A") {
        manUnited++;
    }
}

console.log(manUnited);
