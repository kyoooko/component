// ◆グローバル登録
Vue.component('hello-component',{
  template: '<p>Helloグローバル</p>'
})

// ◆オプション(グローバル登録)
Vue.component('button-counter',{
  data: function(){
    return {
      count:0
    }
  },
  template: '<button v-on:click="count++">{{count}}</button>'
  // templateの中は要素一つでないといけない
  // template: '<span>count:</span><button v-on:click="count++">{{count}}</button>'
  // 複数入れないといけない時は全体をdivなどで囲って1つにする// template: '<div><span>count:</span><button v-on:click="count++">{{count}}</button></div>'
})


// ◆ローカル登録
var helloComponent2 = {
  template: '<p>Helloローカル</p>'
}


// Vueインスタンス
var app = new Vue({ 
  // #appの部分が対象
  el: '#app',
  data:{
    message: 'Hello,Vue.js!'
  },
  components:{
    'hello-co,mponent2' :helloComponent2
  }
})