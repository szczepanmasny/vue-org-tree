<template>
    <div class="orgTree">
        <ul :style="style">
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
            treeWidth: {
                default: '50000px',
                type: String,
                required: false
            },

        },
        data: () => ({}),
        computed: {
            style: function () {
                var self = this;
                var style = {
                    width: self.treeWidth
                }
                return style
            }
        }
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
        width: 100%;
        overflow-x: auto;
    }
</style>