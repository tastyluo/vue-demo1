<template>
<div class="monitor-module clearfix">
    <module-header
        v-bind="{
            name: name, 
            updatetime: updatetime, 
            warningNum: warningNum, 
            handlingNum: handlingNum
        }"
    >
    </module-header>
    <div class="monitor-module-content">
        <item-list
            v-for="list in lists" :key="list.name" 
            v-bind="{name: list.name, items: list.items, modalVisible: modalVisible}"
            @changeTotalWN="changeTotalWN" 
            @changeTotalHN="changeTotalHN"
            @showModal="showModal">
        </item-list>
    </div>
</div>
</template>

<script>
import moduleHeader from './module-header'
import itemList from './item-list'

export default {
    props: {
        // 监视模块名称
        name: String,
        // 更新时间
        updatetime: String,
        // 监视元素
        lists: Array,
        modalVisible: Boolean
    },
    data: function () {
        return {
            // 故障项数量
            warningNum: 0,
            // 处理中数量
            handlingNum: 0
        }
    },
     methods: {
        changeTotalWN: function (val) {
            this.warningNum += val
        },
        changeTotalHN: function (val) {
            this.handlingNum += val
        },
        showModal () {
            this.$emit('showModal')
        }
    },
    components: {
        'module-header': moduleHeader,
        'item-list': itemList
    }
}
</script>

<style scoped>
.monitor-module {
    filter: progid:DXImageTransform.Microsoft.Shadow(color=#CCCCCC, strength=4);
    -moz-box-shadow: 0 0 5px #CCCCCC;
    -webkit-box-shadow: 0 0 5px #CCCCCC;
    box-shadow: 0 0 5px #CCCCCC;
}
.monitor-module-content {
    padding: 10px;
}
</style>
