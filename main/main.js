module.exports = function main() {
    //console.log("Debug Info");
    //return 'Hello World!';
	
	if(arguments.length===0){
	return 0;
  }
  
  var toplcd = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
  var midlcd = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
  var botlcd = ['|_|','..|','|_.',',_|','..|','._|','|_|','..|','|_|','..|'];
  
  var str = arguments[0];
  var length = str.length;
  var arr = new Array();
  for(var i=0;i<length;i++){
	  arr[i] = parseInt(str.charAt(i));
  }
  
  var toparr = new Array();
  var midarr = new Array();
  var botarr = new Array();
  
  for(var i=0;i<length;i++){
	  toparr[i] = toplcd[arr[i]];
	  midarr[i] = midlcd[arr[i]];
	  botarr[i] = botlcd[arr[i]];
  }
  
  //toparr.push("\n");
  //midarr.push("\n");
  //botarr.push("\n");
  
  console.log(toparr.join(" ")+'\n'+midarr.join(" ")+'\n'+botarr.join(" "));
};