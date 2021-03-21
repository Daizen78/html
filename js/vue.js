$(function() {
// 目次
// 変数
// 時間
// 条件分岐
// ループ
// ユーザー入力の制御

	// 変数
	var app = new Vue({
		el: '#app',
		data: {
		message: 'Hello Vue!'
		}
	})

	// 時間
	var app2 = new Vue({
		el: '#app-2',
		data: {
		message2: 'You loaded this page on ' + new Date().toLocaleString()
		}
	})

	// 条件分岐
	var app3 = new Vue({
	  el: '#app-3',
	  data: {
	    seen: true
	  }
	})

	// ループ
	var app4 = new Vue({
	  el: '#app-4',
	  data: {
	    todos: [
	      { text: 'Learn JavaScript' },
	      { text: 'Learn Vue' },
	      { text: 'Build something awesome' }
	    ]
	  }
	})

	// ユーザー入力の制御
	var app5 = new Vue({
	  el: '#app-5',
	  data: {
	    message: 'Hello Vue.js!'
	  },
	  methods: {
	    reverseMessage: function () {
	      this.message = this.message.split('').reverse().join('')
	    }
	  }
	})

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
