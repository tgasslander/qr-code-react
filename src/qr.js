import QrCodeWithLogo from 'qrcode-with-logos'
let qrcode = new QrCodeWithLogo({
  // canvas: document.getElementById("canvas"),
  content: 'WIFI:S:Guest;T:WPA2;P:hellofriend;;',
  width: 380,
  //   download: true,
  // image: document.getElementById('image'),
  logo: {
    src: './logo.png',
  },
	dotsOptions: {
		color: '#77D517',
	},
	cornersOptions: {
		color: '#77D517',
		type: 'rounded-circle',
	},
})

qrcode.downloadImage('qrcode.png')
