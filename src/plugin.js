import OrgTree from './OrgTree.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-org-tree', OrgTree);
  }
};
