var app = new Vue({
	el:"#app",
	data:{
		musicName:"",
		musicList:[],
		musicUrl:""
	},
	methods:{
		//搜索音乐
		seachMusic:function(){
			var that = this;
			axios.get("https://autumnfish.cn/search?keywords=" + this.musicName).then(
			function(response){
				console.log(response.data.result.songs)
				// 获取音乐的列表
				that.musicList = response.data.result.songs;
			},function(err){})
		},
		playMusic:function(musicId){
			var that = this;
			axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
			function(response){
				console.log(response);
				that.musicUrl = response.data.data[0].url;
			},function(err){})
		}
	}
})