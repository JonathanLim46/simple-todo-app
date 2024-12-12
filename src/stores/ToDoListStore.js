import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


export const useToDoStore = defineStore('toDo', () => {

    const data = ref([])

    const activity = ref('')

    const startTime = ref('')

    const endTime = ref('')

    function addToDo(activityValue, startTime, endTime){
        if(activityValue && startTime && endTime){
            data.value.push({
                text : activityValue + ' | ' + startTime + ' - ' + endTime,
                done : false
            })
        } else {
            alert('All field must be filled out !')
        }
    }

    function deleteToDo(index){
        var deleteLog = confirm("Want to delete this ?")
        if (deleteLog) {
            data.value.splice(index, 1)
        }
    }

    function doneToDo(index){
        console.log('Done ' + index)
        data.value[index].done = !data.value.done
    } 

    return { data, activity, startTime, endTime, addToDo, deleteToDo, doneToDo}

    // state : () => (
    //     {count: 0, name: 'Eduardo'}
    // ),
    // getters: {
    //     doubleCount: (state) => state.count * 2,
    // },
    // actions : {
    //     increment(){
    //         this.count++
    //     }
    // }
})