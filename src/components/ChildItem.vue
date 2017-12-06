<template>
    <li v-if="active">
        <div class="item-container" :class="{bold: isFolder}" @dblclick="changeType">
            <img v-if="images" class="user-avatar img-org-str" :src="model.photo" onerror="this.src='./img/no-photo.svg'">
            <p style="float:right">
                <span v-if="edit" @click="editItem">✎</span>
                <span v-if="remove" @click="removeItem">✖</span>
            </p>
            <p class="item">
                <span v-if="!editMode" @click="toggle">
                    <span>{{model.name}}</span>
                    <span v-if="isFolder">
                        [{{open ? '-' : '+'}}]
                    </span>
                </span>
                <input v-else v-model="model.name" @blur="editMode = false" />
            </p>
        </div>
        <ul v-show="open" v-if="isFolder">
            <child-item
                v-for="(model,index) in model.children"
                :key="index"
                :model="model"
                :append="append"
                :remove="remove"
                :edit="edit"
                :images="images">
            </child-item>
            <li v-if="append" class="add" @click="addChild">
                <div>
                    <p>+</p>
                </div>
            </li>
        </ul>
    </li>
</template>

<script>
    import Vue from 'vue'

    Vue.directive('click-outside', {
        bind: function (el, binding, vnode) {
            el.event = function (event) {
                if (!(el == event.target || el.contains(event.target))) {
                    vnode.context[binding.expression](event);
                }
            };
            document.body.addEventListener('dblclick', el.event)
        },
        unbind: function (el) {
            document.body.removeEventListener('dblclick', el.event)
        },
    });

    export default {
        name: "child-item",
        props: {
            model: Object,
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
            }
        },
        data: function () {
            return {
                open: false,
                active: true,
                editMode: false
            }
        },
        computed: {
            isFolder: function () {
                return this.model.children &&
                    this.model.children.length
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType: function () {
                if (!this.isFolder && this.append) {
                    this.$set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }
            },
            addChild: function () {
                this.model.children.push({
                    name: "New Element",
                    photo: "",
                })
            },
            removeItem: function () {
                this.active = false
            },
            editItem: function () {
                this.editMode = true
            }
        }
    }
</script>
<style scoped>
    ul {
        padding-top: 20px;
        position: relative;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s
    }

    li {
        float: left;
        text-align: center;
        list-style-type: none;
        position: relative;
        padding: 20px 5px 0 5px;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
    }

    li::before,
    li::after {
        content: '';
        position: absolute;
        top: 0;
        right: 50%;
        border-top: 1px solid #ccc;
        width: 50%;
        height: 20px;
    }

    li::after {
        right: auto;
        left: 50%;
        border-left: 1px solid #ccc;
    }

    li:only-child::after,
    li:only-child::before {
        display: none;
    }

    li:only-child {
        padding-top: 0;
    }

    li:first-child::before,
    li:last-child::after {
        border: 0 none;
    }

    li:last-child::before {
        border-right: 1px solid #ccc;
        border-radius: 0 5px 0 0;
        -webkit-border-radius: 0 5px 0 0;
        -moz-border-radius: 0 5px 0 0;
    }

    li:first-child::after {
        border-radius: 5px 0 0 0;
        -webkit-border-radius: 5px 0 0 0;
        -moz-border-radius: 5px 0 0 0;
    }

    ul ul::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        border-left: 1px solid #ccc;
        width: 0;
        height: 20px;
    }

    li div {
        border: 1px solid #ccc;
        padding: 5px 10px;
        text-decoration: none;
        font-family: arial, verdana, tahoma;
        font-size: 11px;
        display: inline-block;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
    }

    li div.item-container {
        color: #777;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
    }

    li div:hover,
    li div:hover+ul li div {
        background: #dddddd;
        color: #000;
        border: 1px solid #777;
    }

    li div:hover+ul li::after,
    li div:hover+ul li::before,
    li div:hover+ul::before,
    li div:hover+ul ul::before {
        border-color: #777;
    }

    .orgTree-footer table tr td:first-child {
        padding-right: 30px;
    }

    .orgTree-footer table tr td:nth-child(2) {
        font-weight: bold;
    }

    .orgTree-footer table tr td {
        padding-bottom: 10px;
    }

    .user-avatar {
        height: 24px;
        border-radius: 20px;
        margin-right: 10px;
        border: 1px solid #EAEAEA;
    }

    .user-avatar.img-org-str {
        height: 35px !important;
    }

    .btn-primary:not(:hover) {
        color: #fff !important;
    }

    .item {
        cursor: pointer;
    }

    .bold {
        font-weight: bold;
    }
</style>