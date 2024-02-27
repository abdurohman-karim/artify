<template>
    <div>
        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">{{label}}</label>
        <div class="mt-2">
            <input :type="type" :placeholder="'Type ' + label" @input="updateValue" :value="modelValue" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        label: String,
        type: String,
        modelValue: [String, Number],
    },
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style>
    
</style>