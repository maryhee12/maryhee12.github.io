<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 text-xs-center>
      <h1>Todo List</h1>
      <p>전체 할일 : {{ todoList.length }}/ 완료된 할일: {{ countDone }}/ 남은 할일: {{ todoList.length - countDone }}</p>
      <p :v-bind="resetTime()">{{ toDay }}</p>
    </v-flex>
    <v-flex xs6 pa-2>
        <!-- @statusControl신호가 오면 "statusControl"  실행해줘 -->
      <List
       :todoList="todoList"
       @statusControl = "statusControl"
       @listDelete = "listDelete"
      ></List>
    </v-flex>
    <v-flex xs6 pa-2>
      <ListAdd
        @listAdd = "listAdd"
        @listEdit = "listEdit" 
      ></ListAdd>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import List from './List.vue'
import ListAdd from './ListAdd.vue'

export default {
  components: {
    List, 
    ListAdd
  },
  data() {
    return {
      todoList: [],
      toDay: '',
      nowTime:0
    }
  },
  computed: {
    countDone(){
      let count = 0;
      // this.todoList.forEach(list => {
        // if( list.status === 'done') count++
        for (let i = 0; i < this.todoList.length; i++) {
          if(this.todoList[i].status === 'done') count++
      }
      return count;
    }
  },
  methods: {
    listTime(){ // 리스트를 추가, 수정 했을때 시간을 나타내주는 함수.
      let hh = new Date().getHours().toString()
      let mm = new Date().getMinutes().toString()
      let ss = new Date().getSeconds().toString()

      return this.nowTime = ` ${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss} `
    },
    listAdd(memo) {
      // this.todoList.push({ memo: memo, status: "created" , mode: "add"})
      this.todoList.push({ memo: memo, status: "created", mode: "add", display: 'block', star: 'none', time: this.listTime()})
    },
    statusControl(index, status){
      this.todoList[index].status = status         /* todoList에서 몇번째 인자인지 찾아서 그거의 status가 스테터스 */
    },
    listDelete(index) {
      this.todoList.splice(index, 1 )   /*  투두리스트에서 몇번째인지 찾아줘 */
    },
    listEdit(memo, index, mode, display){
      this.todoList[index].memo = memo
      this.todoList[index].mode= mode
      // edit 이 되었을때 mode 값을 edit > add 로 바꿔줘야 하기 때문에 넘겨주는 mode 값.
      this.todoList[index].time = this.listTime()

      for (let i = 0; i < this.todoList.length; i++) {
      this.todoList[i].display = display
      }
    },
    //실시간으로 현재시간을 업데이트 해주는 함수.
    resetTime(){
      setInterval(()=>{
        let date = new Date();
        let month = date.getMonth();
        let todayDate = date.getDate();
        let day = date.getDay();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let toDate = `${month+1}월 ${todayDate}일 ${week[day]}요일 ` + `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`
        this.toDay = toDate
        }, 1000); 
    }
  }
}
</script>