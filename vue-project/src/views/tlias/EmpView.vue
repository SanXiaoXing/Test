<template>
    <div>
        <el-container style="height: 700px; border: 1px solid #eee">
            <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)">智能学习系统</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>系统信息管理</template>
                            <el-menu-item index="1-1">部门管理</el-menu-item>
                            <el-menu-item index="1-2">学院管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>班级学员管理</template>
                            <el-menu-item index="2-1">班级管理</el-menu-item>
                            <el-menu-item index="2-2">学员管理</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-setting"></i>数据统计管理</template>
                            <el-menu-item index="3-1">员工信息统计</el-menu-item>
                            <el-menu-item index="3-2">学生信息统计</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-main>
                    <!-- 表单 -->
                    <el-form :inline="true" :model="searchForm" class="demo-form-inline">
                        <el-form-item label="姓名">
                            <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
                        </el-form-item>

                        <el-form-item label="性别">
                            <el-select v-model="searchForm.gender" placeholder="性别">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="入职时间">
                            <el-date-picker v-model="searchForm.entrydate" type="daterange" range-separator="至"
                                start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>

                    </el-form>
                    <br>

                    <!-- 表格 -->
                    <el-table :data="tableData">
                        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                        <el-table-column prop="image" label="图像" width="180"></el-table-column>
                        <el-table-column prop="gander" label="性别" width="140"> </el-table-column>
                        <el-table-column prop="job" label="职位" width="140"> </el-table-column>
                        <el-table-column prop="gander" label="入职日期" width="180"> </el-table-column>
                        <el-table-column prop="gander" label="最后操作时间" width="230"> </el-table-column>
                        <el-table-column label="操作">
                            <el-button type="primary">编辑</el-button>
                            <el-button type="danger">删除</el-button>
                        </el-table-column>
                    </el-table>
                    <br>
                    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        layout="sizes, prev, pager, next, jumper " :total="1000">
                    </el-pagination>
                </el-main>


            </el-container>
        </el-container>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            tableData: [],
            searchForm: {
                name: "",
                gender: "",
                entrydate: []
            }
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        onSubmit: function () {
            alert("查询数据")
        }
    },
    mounted(){
        //发送异步请求，获取数据
        axios.get("http://yapi.smart-xwork.cn/mock/169327/emp/list").then((result) => {
            this.tableData = result.data.data;
        });
    }
}
</script>

<style></style>