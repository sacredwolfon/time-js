const time = new function time() {
	this.point1 = 0;
	this.point2 = 0;
	this.sleep = (time) => {
		time += new Date().getTime();
		while (time >= new Date().getTime()) {}
	};
	this.start = (cnsl=true) => {
		this.point1 = new Date().getTime();
		if (cnsl==true) {
			console.log("start");
		}
	};
	this.stop = (cnsl=true) => {
		this.point2 = new Date().getTime();
		if (cnsl==true) {	
			console.log("finish");
			console.log(this.point2-this.point1);
		}
		return this.point1!=0 ? this.point2-this.point1 : 0;
	};
	this.date = new Date();
	this.year = new Date().getFullYear();
	this.month = new Date().getMonth();
	this.day = new Date().getDate();
	this.day2 = new Date().getDay();
	this.hour = new Date().getHours();
	this.h = this.hour;
	this.minute = new Date().getMinutes();
	this.m = this.minute;
	this.second = new Date().getSeconds();
	this.s = this.second;
	var start_time = new Date().getTime();
	this.time_from_start = () => {
		let end = new Date().getTime();
		return end - start_time
	};
	setInterval(()=>{
		this.date = new Date();this.year = new Date().getFullYear();this.month = new Date().getMonth();this.day = new Date().getDate();this.day2 = new Date().getDay();this.hour = new Date().getHours();this.h = this.hour;this.minute = new Date().getMinutes();this.m = this.minute;this.second = new Date().getSeconds();this.s = this.second;this.now = String(String(this.day).length == 1 ? "0"+this.day : this.day) + "." + String(String(this.month).length == 1 ? "0"+this.month : this.month) + "." + this.year + " " + String(String(this.hour).length == 1 ? "0"+this.hour : this.hour) + ":" + String(String(this.minute).length == 1 ? "0"+this.minute : this.minute);
	}, 1000);
};