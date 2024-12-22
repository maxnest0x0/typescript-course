import Cropper from 'cropperjs';

const inputFile = document.querySelector('#inputFile');
const croppedImage = document.querySelector('#croppedImage');
const uploadButton = document.querySelector('#uploadButton');
const cropButton = document.querySelector('#cropButton');
const downloadButton = document.querySelector('#downloadButton');
const imageContainer = document.querySelector('#imageContainer');
const inputImage = document.querySelector('#inputImage');

let url, cropper;
function handleUpload() {
    const file = inputFile.files[0];
    if (!file)
        return;
    if (url)
        URL.revokeObjectURL(url);
    url = URL.createObjectURL(file);
    imageContainer.hidden = false;
    inputImage.src = url;
    inputImage.onload = () => {
        if (cropper)
            cropper.destroy();
        cropper = new Cropper(inputImage, { viewMode: 2 });
    }
}

const ctx = croppedImage.getContext('2d');
const a = document.createElement('a');
a.download = 'image.png';
function handleCrop() {
    if (!cropper)
        return;
    const {x, y, width, height} = cropper.getData();
    croppedImage.hidden = false;
    croppedImage.width = inputImage.naturalWidth;
    croppedImage.height = inputImage.naturalHeight;
    ctx.clearRect(0, 0, croppedImage.width, croppedImage.height);
    ctx.drawImage(inputImage, x, y, width, height, x, y, width, height);
    ctx.strokeStyle = 'cadetblue';
    ctx.lineWidth = 4;
    ctx.strokeRect(x - 2, y - 2, width + 4, height + 4);
    ctx.strokeRect(2, 2, croppedImage.width - 4, croppedImage.height - 4);
    a.href = cropper.getCroppedCanvas().toDataURL();
}

uploadButton.addEventListener('click', () => inputFile.click());
inputFile.addEventListener('change', handleUpload);
cropButton.addEventListener('click', handleCrop);
downloadButton.addEventListener('click', () => a.click());
