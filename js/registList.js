$(function() {
	// 性別
	var app1 = new Vue({
	  el: '#sex',
	  data: {
	    todos: [
	      { text: '男', value: 1 },
	      { text: '女', value: 2 },
	      { text: '非選択', value: 3 }
	    ]
	  }
	})
});
