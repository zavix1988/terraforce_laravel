<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, Link, router} from '@inertiajs/vue3';

    defineProps({
        notes: {
            type: Array,
        },

    });

    const deleteItem = (itemId) => {
        if (confirm("Are you sure you want to Delete")) {
            router.delete(route('notes.destroy', itemId), {preserveScroll: true});
        }
    }



</script>

<template>

    <Head title="Notes list" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Notes list</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <!-- Add New Item Button -->
                    <div class="m-8">
                        <Link
                            :href="route('notes.create')"
                            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Add New Item
                        </Link>

                    </div>

                    <!-- Table -->
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">#</th>
                                            <th scope="col" class="px-6 py-4">Name</th>
                                            <th scope="col" class="px-6 py-4">Date</th>
                                            <th scope="col" class="px-6 py-4">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="noteItem in notes"
                                                :key="noteItem.id"
                                                class="border-b dark:border-neutral-500"
                                            >
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ noteItem.id }}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{{ noteItem.title }}</td>
                                                <td class="whitespace-nowrap px-6 py-4">{{ noteItem.created_at }}</td>
                                                <td class="whitespace-nowrap px-6 py-4">
                                                    <Link
                                                        :href="route('notes.edit', { id: noteItem.id })"
                                                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 mx-1 rounded inline-flex items-center">
                                                        <font-awesome-icon :icon="['fas', 'pencil']" />
                                                    </Link>
                                                    <button
                                                        @click="deleteItem(noteItem.id)"
                                                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 mx-1 rounded inline-flex items-center">
                                                        <font-awesome-icon :icon="['fas', 'trash']" style="color: #d70404;" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
<!--        <div class="container mx-auto p-6">-->
<!--            <h1 class="text-2xl font-semibold mb-4">Your Notes</h1>-->




<!--        </div>-->


    </AuthenticatedLayout>

</template>

<style scoped>
.custom-margin-18 {
    margin: 18px;
}
</style>
