<template>
  <div>
    <div style="margin-top: 20px">
      <el-input
        suffix-icon="el-icon-search"
        style="width: 250px; height: 40px; padding-left: 20px"
        v-model="searchData"
      ></el-input>
      <el-button type="primary" style="margin-left: 10px">搜索</el-button>
    </div>
    <el-main style="max-height: 80vh">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        height="70vh"
      >
        <el-table-column prop="account" label="账号"> </el-table-column>
        <el-table-column prop="nickname" label="昵称"> </el-table-column>
        <el-table-column prop="photo" label="头像">
          <template slot-scope="scope">
            <el-avatar :size="30" :src="scope.row.photo"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="money" label="钱"> </el-table-column>
        <el-table-column prop="article_num" label="文章数"> </el-table-column>
        <el-table-column prop="read_num" label="阅读量"> </el-table-column>
        <el-table-column prop="gender" label="gender"> </el-table-column>
        <el-table-column prop="is_super" label="是否是管理员">
          <template slot-scope="scope">
            <i
              v-if="scope.row.is_super"
              class="el-icon-success"
              style="color: green; font-size: 20px"
            ></i>
            <i
              v-else
              class="el-icon-error"
              style="color: red; font-size: 20px"
            ></i>
          </template>
        </el-table-column>
        <el-table-column label="用户信息操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="currentChange"
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="tableData.length"
        style="width: 100%; display: flex; justify-content: center"
      >
      </el-pagination>
    </el-main>

    <el-dialog title="user数据修改" :visible.sync="dialogFormVisible">
      <div class="dialog-item">
        昵称 <input type="text" v-model="dialogNickname" />
      </div>
      <div class="dialog-item">
        头像 <input type="text" v-model="dialogPhoto" />
      </div>
      <div class="dialog-item">
        钱 <input type="text" v-model="dialogMoney" />
      </div>
      <div class="dialog-item">
        是否管理员 <input type="text" v-model="dialogIsSuper" />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      searchData: "wanbuwan",
      tableData: [],
      currentPage: 1,
      pageSize: 7,
      dialogFormVisible: false,
      dialogIndex: 0,
      dialogNickname: "",
      dialogPhoto: "",
      dialogMoney: "",
      dialogIsSuper: "",
      dialogAccount: "",
    };
  },
  methods: {
    currentChange(val) {
      this.currentPage = val;
    },
    handleEdit(index, data) {
      this.dialogIndex = index;
      this.dialogAccount = data.account;
      this.dialogNickname = data.nickname;
      this.dialogIsSuper = data.is_super;
      this.dialogMoney = data.money;
      this.dialogPhoto = data.photo;
      this.dialogFormVisible = true;
    },
    async dialogSubmit() {
      let res = await this.$post("/admin/changeUser", {
        account: this.dialogAccount,
        nickname: this.dialogNickname,
        money: this.dialogMoney,
        photo: this.dialogPhoto,
        is_super: this.dialogIsSuper,
      });
      if (res.data.result === "error") {
        this.$notify({
          title: "警告",
          message: "修改失败",
          type: "warning",
        });
      } else {
        this.tableData[this.dialogIndex].nickname = this.dialogNickname;
        this.tableData[this.dialogIndex].money = this.dialogMoney;
        this.tableData[this.dialogIndex].photo = this.dialogPhoto;
        this.tableData[this.dialogIndex].is_super = this.dialogIsSuper;
        this.$notify({
          title: "成功",
          message: "成功修改用户信息",
          type: "success",
        });
        this.dialogFormVisible = false;
      }
    },
    async handleDelete(index, data) {
      await this.$get(`/admin/deleteUser?account=${data.account}`);
      this.tableData.splice(index, 1);
    },
  },
  beforeCreate() {
    this.$get("/admin/findUser").then((Response) => {
      this.tableData = Response.data;
    });
  },
};
</script>

<style>
</style>