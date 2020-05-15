<template>
<!-- 수정버튼을 눌렀을때 그 카드가 색깔이 바뀌고, 완료를 누르면 색이 다시 돌아오게 할 수 없을까? -->
<!-- 하나의 레이아웃반복 v-for ,  v-card는 그림자  index:몇번쨰 인지 찾기위해-->
<!-- done이라는 클래스를 하나 설정  list.status 가 done인경우에는 던이라는 클래스가 적용되도록 -->
  <div>   
    <v-card 
    class="pa-3 mb-3"
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
         <span
           >
            {{ list.time }}
          </span>
    </v-card>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    props:['todoList'],
    data(){
        return{
        }
    },
    methods: {
        listEdit(memo, index, mode){
            eventBus.listEdit(memo, index, mode)
            this.todolist[index].mode = mode
            // this.mode = 'edit'
        }
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

