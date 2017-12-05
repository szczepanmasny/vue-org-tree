<template>
    <div class="orgTree">
        <ul>
            <child-item :model="treeData" :append="append" :edit="edit" :remove="remove" :images="images">
            </child-item>
        </ul>
    </div>
</template>

<script>
    import ChildItem from './components/ChildItem.vue'

    export default {
        components: {
            ChildItem
        },
        props: {
            treeData: {
                type: Object,
                required: true
            },

            append: {
                default: false,
                type: Boolean
            },
            remove: {
                default: false,
                type: Boolean
            },
            edit: {
                default: false,
                type: Boolean
            },
            images: {
                default: false,
                type: Boolean
            },

        },
        data: () => ({})
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .orgTree {
        -webkit-user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
    }
</style>