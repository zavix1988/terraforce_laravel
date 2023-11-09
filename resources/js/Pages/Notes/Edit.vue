<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, Link, router, useForm} from '@inertiajs/vue3';
import Textarea from "@/Components/Textarea.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import { ref, watch } from "vue";

const props = defineProps({
    note: {
        type: Object,
    },

});


const form = useForm({
    title: props.note.title,
    text: props.note.text,
});

const saveNote = async () => {
    form.put(route("notes.update",{id: props.note.id}));
}


</script>

<template>

    <Head title="Edit Note" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Edit Note</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-4">
                        <form @submit.prevent="saveNote" class="space-y-4">
                            <div>
                                <InputLabel for="name-input" value="Enter note name" />

                                <TextInput
                                    id="name-input"
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
                                    class="w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-200"
                                    v-model="form.text"
                                    rows="10"

                                />

                                <InputError :message="form.errors.text" class="mt-2" />

                            </div>
                            <div class="flex justify-end space-x-4">

                                <PrimaryButton @click="saveNote">Save</PrimaryButton>

                                <Link
                                    :href="route('notes.index')"
                                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                                >
                                    Back
                                </Link>
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
