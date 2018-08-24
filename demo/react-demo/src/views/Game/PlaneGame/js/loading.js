export const Loading = function(){
	var loadingComplete = false;
	var dateCount = null;
	function init(datas , canvas , callback){
		this.canvas = canvas;
		this.x = this.canvas.width/2;
		this.y = this.canvas.height/2;
		this.r = 80;
		this.elew = 10;
		this.angle = 0;			// loading圈
		this.percent = 0;
		this.writePercent = 0;
		this.callback = callback;
		this.loadImg(datas);
	}

	init.prototype = {
		// 重画进度条
		paint() {
			var ctx = this.canvas.getContext("2d");
			ctx.fillStyle="rgba(0,0,0,0.01)"
			ctx.fillRect(this.x-this.r-this.elew-5 , this.y-this.r-this.elew-5 , (this.r+this.elew+5)*2 , (this.r+this.elew+5)*2)
			ctx.fillStyle = "#FFF";

			ctx.save();
			ctx.translate(this.x , this.y);
			ctx.rotate(this.angle);
			ctx.fillRect(-this.elew/2 , -this.r+this.elew/2 , this.elew , this.elew);
			ctx.fillRect(-this.elew/2 , this.r-this.elew/2, this.elew , this.elew);
			ctx.restore();

			ctx.clearRect(this.x-48 , this.y-12 , 96 , 24);
			ctx.font = "18px 微软雅黑";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText("加载中"+this.writePercent+"%" , this.x , this.y);
			
			this.angle = this.angle>2*Math.PI?0:this.angle+0.05;
		},

		loadImg(datas) {
			var _this = this;
			var dataIndex = 0;	// 图片索引
			li();
			function li(){
				// 进度条loading图片改变
				preLoadImg(datas[dataIndex] , function(){
					dataIndex++;
					if(dataIndex === datas.length){
						_this.percent = 100;
					} else {
						_this.percent = parseInt(dataIndex/datas.length*100);
						li.call(_this);
					}
				})
			}
		},
		// 更新进度条
		update() {
			var _this = this;
			if (dateCount === null) {
				dateCount = new Date();
			} else {
				var newd = new Date();
				var tc = newd-dateCount;
				if (tc>10) {
					this.writePercent++;
					dateCount = newd;

					if (this.writePercent===100) {
						setTimeout(function(){
							_this.callback();
							loadingComplete = true;
						},500);
					}
				}
			}
		},

		loop() {
			//  this.writePercent 进度条从0递增到100
			if(this.percent !== this.writePercent){
				this.update()
			}
			// 进度条加载完毕
			if(!loadingComplete) {
				this.paint();
			}
		},

		getComplete(){
			return loadingComplete;
		}
	}

	return init;
}();

// 游戏图片预加载
export function preLoadImg(src , callback){
	var img = new Image();
	img.src = src;
	callback.call(img);
}