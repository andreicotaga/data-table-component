<template>
    <div>
        <TableSkelet v-bind="propsToNormalTable">
            <TableHeader v-bind="propsToNormalTable"/>
            <TableBody v-bind="propsToNormalTable" />
            <TableFooter  />
        </TableSkelet>
    </div>
</template>

<script>
    import TableSkelet from "./TableSkelet.vue";
    import TableHeader from "./TableHeader.vue";
    import TableBody from "./TableBody.vue";
    import TableFooter from "./TableFooter.vue";
    import props from '../../utils/props'
    import isColVisible from '../../utils/isColVisible'

    export default {
        name: "TableAggregation",
        mixins: [props],
        computed: {
            visibleColumns () {
                return this.columns.filter(isColVisible)
            },
            propsToNormalTable () {
                return { ...this.$props, columns: this.visibleColumns }
            },
        },
        components: {TableFooter, TableBody, TableHeader, TableSkelet}
    }
</script>

<style scoped>

</style>