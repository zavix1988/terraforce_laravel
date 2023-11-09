<script setup>
import { ref } from 'vue';
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import {Head, Link, useForm} from "@inertiajs/vue3";
import Textarea from "@/Components/Textarea.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

const noteTitleInput = ref('');
const noteTextArea = ref('');

const form = useForm({
    title: '',
    text: '',
});

const saveNewNote = () => {
    // // Додайте код для збереження форми
    // console.log('Збережено:', noteTitleInput.value, noteTextArea.value);
    form.post(route('notes.store'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.title) {
                form.reset('name');
                noteTitleInput.value.focus();
            }
            if (form.errors.text) {
                form.reset('text');
                noteTextArea.value.focus();
            }
        },
    });
};

const cancelForm = () => {
    // Додайте код для скасування форми
    noteTitleInput.value = '';
    noteTextArea.value = '';
};
</script>

<template>


    <Head title="Create note" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Create note</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-4">
                        <form @submit.prevent="saveNewNote" class="space-y-4">
                            <div>
                                <InputLabel for="name-input" value="Enter note name" />

                                <TextInput
                                    id="name-input"
                                    ref="noteTitleInput"
                                    v-model="form.title"
                                    type="text"
                                    class="mt-1 block w-full"
                                />

                                <InputError :message="form.errors.title" class="mt-2" />
                            </div>
                            <div>
                                <InputLabel for="textarea-input" value="Enter note" />

                                <Textarea
                                    id="textarea-input"
                                    ref="noteText"
                                    class="w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-200"
                                    v-model="form.text"
                                    rows="10"

                                />
                            </div>
                            <div class="flex justify-end space-x-4">

                                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                                <button
                                    type="button"
                                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                                    @click="cancelForm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>

<style scoped>

</style>
