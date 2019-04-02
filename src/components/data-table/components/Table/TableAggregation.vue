<template>
    <div>
        <TableSkelet :columns="columns">
            <TableHeader :columns="columns" :query="query" :data="data"/>
            <TableBody :data="data" :columns="columns" />
            <TableFooter  />
        </TableSkelet>
    </div>
</template>

<script>
    import TableSkelet from "./TableSkelet.vue";
    import TableHeader from "./TableHeader.vue";
    import TableBody from "./TableBody.vue";
    import TableFooter from "./TableFooter.vue";

    export default {
        name: "TableAggregation",
        props: {
            columns: { type: Array, required: true },
            data: { type: Array || Object, required: true },
            itemsPerPage: { type: Array, default: () => [10, 20, 40, 80, 100] },
            totalItems: { type: Number, required: true },
            query: { type: Object, required: true }
        },
        data() {
            return {
                props: this.$props
            }
        },
        mounted() {
            this.propsToNormalTable();
        },
        methods: {
            propsToNormalTable () {
                return this.props;
            },
        },
        components: {TableFooter, TableBody, TableHeader, TableSkelet}
    }
</script>

<style scoped>

</style>