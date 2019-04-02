<template>
    <thead>
        <transition-group name="fade" tag="tr">
            <th key="--th-multi">
                 <Bulk :selection="selection"
                       :rows="data" />
            </th>
            <th v-for="(column, idx) in columns"
                :key="column.title || column.field || idx">
<!--                <component
                        v-if="column.thComp"
                        :is="forDynCompIs(column.thComp)"
                        :column="column"
                        :field="column.field"
                        :title="column.title"
                        v-bind="$props">
                </component>
                <template v-else>-->
                    {{ column.title }}
                <!--</template>-->
                <sortable v-if="column.sortable" :field="column.field" :query="query"/>
            </th>
        </transition-group>
    </thead>
</template>

<script>
    import Sortable from "./actions/sortable";
    import Bulk from "./actions/bulk";

    export default {
        name: "TableHeader",
        components: {Bulk, Sortable},
        data() {
            return {
                selection: []
            }
        },
        props: {
            columns: { type: Array, required: true },
            query: { type: Object, required: true },
            data: { type: Array || Object, required: true }
        }
    }
</script>

<style scoped>

</style>