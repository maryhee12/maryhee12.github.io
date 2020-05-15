<template>
    <div>
        <!-- 투두 리스트 추가 -->
        <!-- //텍스트필드 -->
        <!-- //추가버튼 -->
        <v-textarea
        outline
        v-model="memo"
        label="투두리스트를 입력해주세요"
        value=""
        ></v-textarea>
        <v-btn @click="listAdd">리스트 추가</v-btn> <!-- 이벤트리스너를 달고 listAdd함수 연결 -->
    </div>
</template>

<script>
//  데이타 선언 
export default {
    data(){
        return {
            memo:null
        }
    },
    methods:{
        listAdd(){
            console.log('리스트 추가')
            if(this.memo ===null){
                alert("할일을 입력해주세요")
            }else{
                this.$emit("listadd", this.meno)
            }
            
        }
    }
}
</script>