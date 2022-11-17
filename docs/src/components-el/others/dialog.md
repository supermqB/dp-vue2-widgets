# Dialog 对话框

::: demo

```html

  <dp-button type="text" @click="dialogVisible = true">
    点击打开 Dialog
  </dp-button>

  <dp-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <dp-button @click="dialogVisible = false">取 消</dp-button>
      <dp-button type="primary" @click="dialogVisible = false">确 定</dp-button>
    </span>
  </dp-dialog>


<script>
  export default {
    data() {
      return {
        dialogVisible: false,
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then((_) => {
            done()
          })
          .catch((_) => {})
      },
    },
  }
</script>
```

:::
