<template>
    <div>
        <v-textarea
        v-on:keyup.enter="enterKey"
        outline
        v-model="memo"
        label="할 일을 입력해 주세요."
        value=""
        ></v-textarea>
        <v-btn 
        v-if="mode === 'add'" 
        @click="listAdd"
        
        >리스트 추가</v-btn>
        <v-btn 
        v-else
        @click="listEdit">리스트 수정</v-btn>
    </div>
  
</template>

<script>
import { eventBus } from '../main' 
export default {
    data(){
        return {
            memo: null,
            index: null,
            mode: 'add'
        }
    },
    created(){
        eventBus.$on('listEdit', (memo, index) =>{
            this.memo = memo
            this.index = index
            this.mode = 'edit'
        })
    },
    methods : {
        listAdd(){
            if(this.memo === null) {
                alert('할 일을 입력하지 않으셨습니다.')
            } else {
                this.$emit("listAdd", this.memo)
                this.memo = null;
            }
        },
           enterKey(){
              if(this.mode === 'add') { 
                if(this.memo == !Object) { // memo의 값이 공백이라면 alert 창을 띄워라.
                    alert('할 일을 등록해 주세요.') 
                    this.memo = null  // enter 로 밑으로 내려가 있는 커서를 다시 올려준다.     
                } else {
                    this.listAdd() // 글자나 숫자 다른게 memo 에 입력되어있다면 listAdd를 실행시킨다.
                }
            } else { // mode === 'edit' 일때는 
                this.listEdit()
            }
        
        },
        listEdit(){
            if(this.memo === null) {
                alert('할 일을 입력하지 않으셨습니다.')
            } else {
                this.$emit("listEdit", this.memo, this.index, this.mode)
                this.memo = null;
                // this.mode = 'add'
            }
        }
    }
}
</script>

<style>
</style>