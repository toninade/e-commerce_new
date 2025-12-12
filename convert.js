import sharp from "sharp";
import fs from "fs";

const folder = "./public/img";

if (!fs.existsSync("./webp")) {
  fs.mkdirSync("./webp");
}

fs.readdirSync(folder).forEach((file) => {
  sharp(`${folder}/${file}`)
    .webp({ quality: 70 })
    .toFile(`/webp/${file.split(".")[0]}.webp`);
});
