<template>
    <div class="wrapper">
        <!--v-if="$slots.default || HeaderSettings"-->
        <div class="clearfix" style="margin-bottom: 10px">
<!--            <header-settings v-if="HeaderSettings" class="pull-right"
                             :columns="columns" :support-backup="supportBackup">
            </header-settings>-->
            <Settings :columns="columns" />
            <!--<slot />-->
        </div>

        <TableAggregation
                :data="data"
                :columns="columns"
                :items-per-page="itemsPerPage"
                :total-items="totalItems"
                :query="query"
        />

        <!--v-if="Pagination"-->
        <div  class="row" style="margin-top: 10px">
            <div class="col-sm-6">
                <strong>Total</strong>
                <!--<page-size-select :query="query"  />-->
                <ItemsPerPage :items-per-page="itemsPerPage" />
            </div>
            <div class="col-sm-6">
                <!--<pagination class="pull-right" :total="total" :query="query" />-->
                <Pagination :total-items="totalItems" :query="query" />
            </div>
        </div>
    </div>
</template>

<script>
    import Settings from './components/Extra/settings.vue'
    import ItemsPerPage from "./components/Extra/items-per-page.vue";
    import Pagination from "./components/Extra/pagination.vue";
    import TableAggregation from "./components/Table/TableAggregation.vue";

    export default {
        name: "DataTable",
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