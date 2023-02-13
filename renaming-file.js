const fs = require("fs");

fs.readdir("/Users/neo/Downloads/ISTD_Dataset/test/train_A", (err, files) => {
  if (err) {
    throw err;
  }
  let i = 1;
  console.log(files.length);
  files.forEach((file) => {
    console.log(file);
    fs.rename(
      `/Users/neo/Downloads/ISTD_Dataset/train/train_A/${file}`,
      `/Users/neo/Documents/Projects/image-shadow-removal/data/train_input_img/train_input_${i++}.png`,
      function (err) {
        if (err) throw err;
      }
    );
  });
  console.log("File renaming Compelete!");
});
