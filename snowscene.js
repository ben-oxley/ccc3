while (true){
	let snow = '';
	for (let i = 0 ; i < 80; i++){
		snow = snow.concat(Math.random()>0.95?'*':' ');
	}
	console.log(snow);
}
