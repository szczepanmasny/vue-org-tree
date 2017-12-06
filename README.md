# vue-org-tree

A Vue.js component that creates organizational tree.

## Installation

```js
npm i --save-dev vue-org-tree
```

### Browser

Include the script file, then install the component with `Vue.use(VueOrgTree);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-org-tree/dist/vue-org-tree.min.js"></script>
<script type="text/javascript">
  Vue.use(VueOrgTree);
</script>
```

### Module

```js
import VueOrgTree from 'vue-org-tree';

export default {
  components: {
    VueOrgTree
  },
  data: () => ({
    treeData: /* some data */
  })
}
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-org-tree
  :treeData="treeData"
  :append="true/false"
  :edit="true/false"
  :remove="true/false"
  :images="true/false"
></vue-org-tree>
```

### Data format

Example of data for VueOrgTree:

```js
var data = {
  name: "Seven Dwarfs",
  photo: "./img/4.jpg",
  children: [{
      name: "Minnie Mouse",
      photo: "./img/1.jpg"
    },
    {
      name: "Tom Bombadil",
      photo: "./img/3.jpg",
      children: [{
        name: "No Name",
        photo: "./img/12.jpg",
        children: [{
            name: "Sleeping Beauty",
            photo: "./img/5.jpg"
          },
          {
            name: "Michael Jackson",
            photo: "./img/6.jpg"
          }
        ]
      },
    ]
  }]
};
```
## License

[MIT](http://opensource.org/licenses/MIT)

## Contributing

Pull requests are welcome