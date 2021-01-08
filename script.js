function showPreview(){
	//read file object and extract image as encoded url
	file = document.querySelector("input[type=file]").files[0];
	preview = document.querySelector("#source_img");
	reader = new FileReader();
	
	reader.addEventListener("load", function () {
		preview.src = reader.result;
	  }, false);

    reader.readAsDataURL(file);
}


function ResizeImage() {

    var toHeight = document.getElementById("height");
    var toWidth = document.getElementById("width");
    console.log(toHeight.value);
    console.log(toWidth.value);
    toHeight = toHeight.value;
    toWidth = toWidth.value;
    var filesToUpload = document.getElementById('imageFile').files;
    var file = filesToUpload[0];

    // Create an image
    var img = document.createElement("img");
    // Create a file reader
    var reader = new FileReader();
    // Set the image once loaded into file reader
    reader.onload = function(e) {
            img.src = e.target.result;

            var canvas = document.createElement("canvas");
            //var canvas = $("<canvas>", {"id":"testing"})[0];
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            var MAX_WIDTH = toWidth;
            var MAX_HEIGHT = toHeight;
            var width = img.width;
            var height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }


            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            var dataurl = canvas.toDataURL("image/png");
            document.getElementById('output').src = dataurl;
        }
        // Load files into file reader
    reader.readAsDataURL(file);
}
