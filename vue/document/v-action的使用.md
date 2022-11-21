## v-action 自定义权限指令

用法：在需要控制action级别权限的组件上使用v-action
 ````javascript
  <el-button
              v-action="'sys_user_userAndRole'"
              type="text"
              @click="handleOpenRoleDialog(scope.row)"
            >
              关联角色
            </el-button>
 ````


 