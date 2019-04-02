<template>
    <table class="table table-striped table-hover" style="margin-bottom: 0">
        <slot />
    </table>
</template>

<script>
    export default {
        name: "TableSkelet",
        props: {
            columns: { type: Array, required: true }
        }
    }
</script>

<style scoped>

</style>