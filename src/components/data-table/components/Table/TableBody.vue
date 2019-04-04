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
                <td>
                    <button type="button" class="btn-success">Edit</button>
                    <button type="button" class="btn-danger" @click.prevent="deleteItem(item.Id)">Delete</button>
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
    import props from '../../utils/props'

    export default {
        name: "TableBody",
        components: {Bulk},
        mixins: [props],
        computed: {
            colLen () {
                return this.columns.length + !!this.selection
            }
        },
 /*       watch: {
            selection (selection)
            {
                console.log(selection);
            }
        },*/
        methods: {
            deleteItem (id) {
                console.log(id, 'id');
            }
        }
    }
</script>

<style scoped>

</style>