const fs = require("fs");

fs.readdir(
  "/Users/neo/Documents/Projects/image-shadow-removal/data/train_input_img",
  (err, files) => {
    if (err) {
      throw err;
    }

    console.log(files);
    let i = 1;
    const data = files.map((file) => ({
      img_id: i,
      imput_img: `train_input_${i}.png`,
      label_img: `train_label_${i++}.png`,
    }));

    const header = "img_id,input_img,label_img\n";

    // Convert the array of objects into a CSV string
    const csvData = data.map((row) => Object.values(row).join(",")).join("\n");

    // Write the CSV string to a file
    fs.writeFileSync("./data/train.csv", header + csvData);
  }
);
