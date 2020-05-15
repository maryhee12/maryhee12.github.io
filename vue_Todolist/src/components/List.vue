<template>
<!-- 수정버튼을 눌렀을때 그 카드가 색깔이 바뀌고, 완료를 누르면 색이 다시 돌아오게 할 수 없을까? -->
<!-- 하나의 레이아웃반복 v-for ,  v-card는 그림자  index:몇번쨰 인지 찾기위해-->
<!-- done이라는 클래스를 하나 설정  list.status 가 done인경우에는 던이라는 클래스가 적용되도록 -->
  <div>   
    <v-card 
    class="pa-3 mb-3 "
    :class="{'done' : list.status === 'done' , 'edit' : list.mode ==='edit'}"
    
    v-for="(list, index) in todoList"     
    :key="index"
    >

        <p>{{ list.memo }}</p>  <!-- 14번index,해당리스트를 찾기위해서 'done' -->
        <v-btn 
        v-if="list.status === 'created'"
        @click="$emit('statusControl',  index, 'done'), listAdd"
        fab flat small color="blue" ><i class="fas fa-check"></i></v-btn> 
        <!-- 완료 -->
        <v-btn 
        v-else
        @click="$emit('statusControl',  index, 'created')"
        fab flat small color="orange" ><i class="fas fa-redo-alt"></i></v-btn>
        <!-- 부활 -->
        <v-btn 
        @click="$emit('listDelete', index)"
        fab flat small color="red" ><i class="fas fa-trash-alt"></i></v-btn>
        <!-- 휴지통 -->
        <v-btn 
        v-if="list.status === 'created'"
        @click="listEdit(list.memo, index, 'edit')"
        fab flat small color="yellow" ><i class="fas fa-edit"></i></v-btn>
        <!-- 수정 -->
        <v-btn
        v-if="list.star === 'none'"
        @click="starOn(index)"
        :disabled="list.display === 'none'"
        fab flat small color="indigo">
            <i class="far fa-star"></i>
        </v-btn>
        <v-btn
        v-else
        @click="starOff(index)"
        :disabled="list.display === 'none'"
        fab flat small color="indigo">
            <i class="fas fa-star"></i>
        </v-btn>
        <!-- star 아이콘 -->
         <p>
            {{ list.time }}
          </p>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
    props:['todoList'],
    data(){
        return{
        }
    },
    methods: {
        listEdit(memo, index, mode, display){
            eventBus.listEdit(memo, index, mode, display)
            this.todolist[index].mode = mode
            // this.mode = 'edit'
             
            for (let i=0; i < this.todolist.length; i++) {
                if(this.todolist[i].mode === 'add') {
                  this.todolist[i].display = display
         }
       }
    },
       starOn(index){
          // star 가 채워지지 않은 상태라면 
            this.todolist[index].star = 'block'
            let starOn = this.todolist[index] // 눌려진 star 를 starOn 에 담고
            this.todolist.splice(index, 1) // 실제 배열에서의 눌린 값(starOn 에 담겨진 값)을 지우고
            this.todolist.unshift(starOn) // 담아 둔 starOn 을 배열 맨 앞에 넣는다.
        }
        // starOff(index){
        //   // 눌려진 star 의 불을 끌 때면
        //     //this.todolist[index].star = 'none'
        //     // let starOff = this.todolist[index] // 누른 star 를 starOff 에 담고

        //     // let star = 0;
        //     // for (let i=0; i < this.todolist.length; i++) {
        //     //   if (this.todolist[i].star === 'block') star++ // 현재 배열에서 불이 켜져있는 것이 몇개인지 확인한 뒤
        //     // }
        //     // this.todolist.splice(index, 1) // 현재 눌린 배열을 지우고
        //     // this.todolist.splice(star, 0, starOff) // 불이 켜져 있는것 다음에 아무것도 지우지 말고(0) 아까 담은 starOff 를 그 뒤에 넣는다.
        // }
    }
}
</script>

<style>
.done {
    background-color: rgba(0, 0, 0, 0.1) !important
}
.done p {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5)
}
.edit {
    background-color: rgb(197, 250, 128) !important
}

</style>

