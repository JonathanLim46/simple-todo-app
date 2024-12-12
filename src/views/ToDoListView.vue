<template>
    <header class="text-center text-white font-bold text-2xl">
        <h2>To Do List App</h2>
    </header>
    <main class="mt-12">
        <section class="flex justify-center">
            <input type="text" placeholder="Start Time" onfocus="this.type='time'"
                onblur="this.type='text'" class="w-32 text-center rounded-lg me-2"
                v-model="storeToDo.startTime">
            <input type="text" placeholder="End Time" onfocus="this.type='time'"
                onblur="this.type='text'" class="w-32 text-center rounded-lg"
                v-model="storeToDo.endTime">
        </section>
        <section class="mt-8 flex justify-center">
            <input type="text" placeholder="New Activity"
                class="ps-3 pt-1 pb-1 rounded w-64" v-model="storeToDo.activity">
            <button class="w-16 ms-4 rounded bg-cyan-400" @click="addActivity">Add</button>
        </section>
        <section class="mt-8">
            <task/>
        </section>
    </main>
</template>

<script setup>

    import task from '@/components/Task.vue';

    import { useToDoStore } from '@/stores/ToDoListStore';

    const storeToDo = useToDoStore()

    const addActivity = () => {
        storeToDo.addToDo(storeToDo.activity, storeToDo.startTime, storeToDo.endTime)
        storeToDo.activity = ''
        storeToDo.startTime = ''
        storeToDo.endTime = ''
    }

</script>

