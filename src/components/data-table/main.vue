<template>
    <div class="wrapper">
        <div class="clearfix" style="margin-bottom: 10px">
            <Settings :columns="columns" />
        </div>

        <TableAggregation
                v-bind="$props"
        />

        <div  class="row" style="margin-top: 10px">
            <div class="col-sm-6">
                <strong>
                    Total {{ total }}
                </strong>
                <ItemsPerPage :page-size-options="pageSizeOptions" :query="query"/>
            </div>
            <div class="col-sm-6">
                <Pagination :total="total" :query="query" />
            </div>
        </div>
    </div>
</template>

<script>
    import Settings from './components/Extra/settings.vue'
    import ItemsPerPage from "./components/Extra/items-per-page.vue";
    import Pagination from "./components/Extra/pagination.vue";
    import TableAggregation from "./components/Table/TableAggregation.vue";
    import props from './utils/props'

    export default {
        name: "DataTable",
        mixins: [props],
        created () {
            // init query (make all the properties observable by using `$set`)
            const q = { limit: 10, offset: 0, sort: '', order: '', ...this.query };

            Object.keys(q).forEach(key => { this.$set(this.query, key, q[key]) })
        },
        components: {
            TableAggregation,
            Pagination,
            ItemsPerPage,
            Settings
        }
    }
</script>

<style scoped>

</style>