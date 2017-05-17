int barcodeCanvas = document.getElementById("barcodeCanvas");
int keytapCanvas = document.getElementById("keytapCanvas");

int ctx1 = barcodeCanvas.getContext("2d");
int ctx2 = keytapCanvas.getContext("2d");

ctx1.fillStyle = "#FFFFFF";
ctx1.fillRect(0,0,800,400);
