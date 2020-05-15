<template>
    <v-container>
      {{ todoList }}
        <v-layout row wrap>
            <v-flex xs6>  <!-- 화면의 절반을 v-flex가 차지함 -->
                <List></List>
            </v-flex>
            <v-flex xs6>  <!-- 화면의 절반을 ListAdd가 차지함 -->
                <ListAdd
                 @listAdd= "listAdd"></ListAdd>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import List from './List'           // 리스트를 보여줄 컴포넌트
import ListAdd from './ListAdd'     // 리스트 추가해주는 컴포넌트 만들기  

export default{
    components:{
        List,
        ListAdd
    },
    data(){
      return{
        todoList:[]               // 메모라는인자를받아서 여기에 추가됨
      }
    },
    methods:{
      listAdd(meno){              // listAdd가 실행됐을때 메모라는인자를받아서 
        console.log("받았어!")
        this.todoList.push({meno:memo, status:'created'})  //메모속성:값,, statue속성
      }
    }
}
</script>



<script>
// export default {
//   data() {
//     return {
//       todoList: []
//     }
//   },
//   methods: {
//     listAdd(memo) {
//       console.log("받았어!")
//       this.todoList.push({ memo: memo, status: "created" })
//     }
//   }
// }
// </script>