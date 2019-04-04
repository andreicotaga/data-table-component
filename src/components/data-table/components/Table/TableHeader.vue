<template>
    <thead>
        <transition-group name="fade" tag="tr">
            <th key="--th-multi">
                 <Bulk :selection="selection"
                       :rows="data" />
            </th>
            <th v-for="(column, idx) in columns"
                :key="column.title || column.field || idx"
            >
                {{ column.title }}
                <sortable v-if="column.sortable" :field="column.field" :query="query"/>
            </th>
            <th key="--th-action">Actions</th>
        </transition-group>
    </thead>
</template>

<script>
    import Sortable from "./actions/sortable";
    import Bulk from "./actions/bulk";
    import props from '../../utils/props'

    export default {
        name: "TableHeader",
        components: {Bulk, Sortable},
        mixins: [props]
    }
</script>

<style scoped>

</style>