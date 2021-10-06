var app = new Vue({
	el:"#app",
	data:{
		musicName:"",
		musicList:[],
		musicUrl:"",
		musicPicUrl:"",
		isPlaying:false,
		commentsList:[]
	},
	mounted:function(){
		this.musicName = "爱情";
		this.seachMusic();
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
		// 播放音乐
		playMusic:function(musicId){
			var that = this;
			this.isPlaying = true;
			// 获取音乐的url
			axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
			function(response){
				// console.log(response);
				that.musicUrl = response.data.data[0].url;
			},function(err){})
			//获取音乐的封面
			axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(
			function(response){
				console.log(response);
				that.musicPicUrl = response.data.songs[0].al.picUrl;
			},function(err){})
			// 获取评论列表
			axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
			function(response){
				console.log(response);
				that.commentsList = response.data.hotComments;
			},function(err){})
			
		}
	}
})
