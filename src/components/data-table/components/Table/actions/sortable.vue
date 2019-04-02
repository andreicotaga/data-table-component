<template>
    <a href="#" @click.prevent="sort">
        <font-awesome-icon v-if="order !== ''" :icon="(order === 'asc' ? 'sort-up' : 'sort-down')"
                           :class="!order ? 'text-muted' : ''"
        />
        <font-awesome-icon v-if="order === ''" icon="sort-up" class="text-muted" />
        <font-awesome-icon v-if="order === ''" icon="sort-down" class="text-muted" />
    </a>
</template>

<script>
    export default {
        name: "sortable",
        props: {
            field: {type: String, required: true},
            query: {type: Object, required: true}
        },
        data: () => ({
            order: ''
        }),
        watch: {
            query: {
                handler({sort: field, order}) {
                    this.order = field === this.field ? order : ''
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            sort() {
                const {query, order} = this;

                query.sort = this.field;
                query.order = this.order = order === 'desc' ? 'asc' : 'desc'
            }
        }
    }
</script>

<style scoped>

</style>