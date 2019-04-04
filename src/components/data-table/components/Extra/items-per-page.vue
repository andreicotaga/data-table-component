<template>
    <div>
        <select v-model="query.limit"
                @change="query.offset = 0"
        >
            <option v-for="i in pageSizeOptions"
                    :key="i"
                    :value="i"
            >
                {{ i }}
            </option>
        </select>
        {{ 'items / page' }}
    </div>
</template>

<script>
    export default {
        name: "items-per-page",
        props: {
            query: { type: Object, required: true },
            pageSizeOptions: { type: Array, required: true }
        }
    }
</script>

<style scoped>

</style>