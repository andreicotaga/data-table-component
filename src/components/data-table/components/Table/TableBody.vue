<template>
    <tbody>
    <template v-if="data.length">
        <template v-for="item in data">
            <tr>
                <td>
                    <Bulk :selection="selection"
                          :row="item"
                    />
                </td>
                <td v-for="col in columns" :key="col.title || col.field">
                    {{ item[col.field] }}
                </td>
            </tr>
        </template>
    </template>
    <tr v-else>
        <td :colspan="colLen">
            No data to be displayed.
        </td>
    </tr>
    </tbody>
</template>

<script>
    import Bulk from "./actions/bulk";
    export default {
        name: "TableBody",
        components: {Bulk},
        data() {
            return {
                selection: []
            }
        },
        props: {
            columns: { type: Array, required: true },
            data: { type: Array || Object, required: true }
        },
        computed: {
            colLen () {
                return this.columns.length + !!this.selection
            }
        }
    }
</script>

<style scoped>

</style>