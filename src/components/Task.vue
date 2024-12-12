<template>
    <ul v-show="todo.data.length > 0">
        <li class="text-white border-b px-6 pb-2 pt-8 flex justify-between items-center"
            v-for="(item, index) in todo.data">
            <span :class="{'line-through' : item.done, 'text-red-600': item.done}">{{ item.text }}</span>
            <section class="flex space-x-2">
                <button class="w-20 h-8 rounded ms-2 bg-red-600 text-white text-center" @click="deleteAct(index)">Delete</button>
                <button class="w-20 h-8 rounded ms-2 bg-green-600 text-white text-center" @click="doneAct(index)">Done</button>
            </section>
        </li>
    </ul>
</template>

<script setup>
    import { useToDoStore } from '@/stores/ToDoListStore';

    const todo = useToDoStore()

    const deleteAct = (index) => {
        todo.deleteToDo(index)
    }

    const doneAct = (index) => {
        todo.doneToDo(index)
    }
</script>