<template>
  <DataTable v-bind="$data"></DataTable>
</template>

<script>
    import store from './../store'
    import DataTable from './../components/data-table/main.vue'
    import orderBy from 'lodash/orderBy'

    export default {
        name: 'Payments',
        data() {
            return {
                data: [],
                pageSizeOptions: [10, 25, 50, 100],
                columns: [
                  { title: 'ID',          field: 'Id', sortable: true, visible: true },
                  { title: 'Description', field: 'Description', sortable: true, visible: true },
                  { title: 'Name',        field: 'Name', sortable: true, visible: true},
                  { title: 'Date',        field: 'Date', sortable: true, visible: true},
                  { title: 'Amount',      field: 'Amount', sortable: true, visible: true }
                ],
                total: 0,
                query: { limit: 10, offset: 0, sort: '', order: '' },
                selection: []
            }
        },
        mounted() {
            this.handleQueryChange();
        },
        watch: {
            query: {
                handler () {
                    this.handleQueryChange()
                },
                deep: true
            }
        },
        methods: {
            handleQueryChange () {
   /*             mockData(this.query).then(({ rows, total, summary }) => {
                    this.data = rows
                    this.total = total
                    this.summary = summary
                })
*/
                var self = this;

                this.$store.dispatch('getPayments')
                    .then(function()
                    {
                        self.data = store.state.payments;

                        self.total = self.data.length;

                        if(self.query.sort)
                        {
                            self.data = orderBy(self.data, self.query.sort, self.query.order)
                        }

                        self.data = self.data.slice(self.query.offset, self.query.offset + self.query.limit);
                    });
            }
        },
        components: {
            DataTable
        }
    }
    //import components from './comps/'

    /*export default {
        name: 'PaymentsDataTable',
        props: ['row'],
        data () {
            const amINestedComp = !!this.row;

            return {
                supportBackup: true,
                supportNested: true,
                tblClass: 'table-bordered',
                tblStyle: 'color: #666',
                pageSizeOptions: [5, 10, 20, 50],
                columns: (() => {
                    const cols = [
                        { title: 'UID', field: 'uid', label: 'User ID', sortable: true, visible: 'true' },
                        { title: 'Email', field: 'email', visible: false, thComp: 'FilterTh', tdComp: 'Email' },
                        { title: 'Username', field: 'name', thComp: 'FilterTh', tdStyle: { fontStyle: 'italic' } },
                        { title: 'Country', field: 'country', thComp: 'FilterTh', thStyle: { fontWeight: 'normal' } },
                        { title: 'IP', field: 'ip', visible: false, tdComp: 'IP' },
                        { title: 'Age', field: 'age', sortable: true, thClass: 'text-info', tdClass: 'text-success' },
                        { title: 'Create time', field: 'createTime', sortable: true, colClass: 'w-240', thComp: 'CreatetimeTh', tdComp: 'CreatetimeTd' },
                        { title: 'Color', field: 'color', explain: 'Favorite color', visible: false, tdComp: 'Color' },
                        { title: 'Language', field: 'lang', visible: false, thComp: 'FilterTh' },
                        { title: 'PL', field: 'programLang', explain: 'Programming Language', visible: false, thComp: 'FilterTh' },
                        { title: 'Operation', tdComp: 'Opt', visible: 'true' }
                    ];
                    const groupsDef = {
                        Normal: ['Email', 'Username', 'Country', 'IP'],
                        Sortable: ['UID', 'Age', 'Create time'],
                        Extra: ['Operation', 'Color', 'Language', 'PL']
                    };
                    return cols.map(col => {
                        Object.keys(groupsDef).forEach(groupName => {
                            if (groupsDef[groupName].includes(col.title)) {
                                col.group = groupName
                            }
                        });

                        return col
                    })
                })(),
                payments: [],
                total: 0,
                selection: []
            }
        },
        watch: {
            payments: {
                handler () {
                    this.handlePaymentChange()
                },
                deep: true
            }
        },
        methods: {
            handlePaymentChange ()
            {
                this.$store.dispatch('getPayments')
                    .then(function()
                    {
                        this.payments = store.state.payments;
                        this.total = store.state.payments.length;
                    });
            }
        }
    }*/
</script>

<style scoped lang="scss">

</style>
