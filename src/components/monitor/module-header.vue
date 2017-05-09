<template>
<div class="monitor-module-title">
    <div class="monitor-module-title-leftInfo">
        <ul>
            <li>
                <span>{{name}}</span>
            </li>
            <li>
                <span>{{monitorInfo}}</span>
            </li>
        </ul>
    </div>
    <div class="monitor-module-title-rightInfo">
        <ul>
            <li>
                <span>{{updatetimeInfo}}</span>
            </li>
            <li>
                <div class="title-state">
                    <img :src="stateImg" />
                </div>
            </li>
            <li>
                <div class="updown">
                    <img :src="imgMap['up']" />
                </div>
            </li>
        </ul>
    </div>
    <div class="clear"></div>
</div>
</template>

<script>
import upDown from '@/assets/up.png'
import red from '@/assets/red.png'
import green from '@/assets/green.png'
import yellow from '@/assets/yellow.png'

export default {
     props: {
        // 监视模块名称
        name: String,
        // 更新时间
        updatetime: String,
        // 故障项数量
        warningNum: Number,
        // 处理中数量
        handlingNum: Number
    },
    data () {
        return {
            imgMap: {
                '1': green,
                '2': red,
                '3': yellow,
                'up': upDown
            }
        }
    },
    computed: {
        monitorInfo () {
            return '故障中 ' + this.warningNum + '，处理中 ' + this.handlingNum
        },
        updatetimeInfo () {
            return '更新时间：' + this.updatetime
        },
        stateImg () {
            let tempWarningNum = this.warningNum
            let tempHandlingNum = this.handlingNum
            let imgUrl = this.imgMap['1']
            if (tempHandlingNum > 0) {
                imgUrl = this.imgMap['3']
            } else if (tempHandlingNum === 0 && tempWarningNum > 0) {
                imgUrl = this.imgMap['2']
            }
            return imgUrl
        }
    }
}
</script>

<style scoped>
.monitor-module-title {
    font-size: 13px;
    height: 30px;
    background: #f5f5f5;
    border-left: 5px solid #ff9000;
    border-bottom: 1px solid #DDDDDD;
}

.monitor-module-title-leftInfo {
    float: left;
    height: 20px;
    margin: 5px 0px;
}

.monitor-module-title-leftInfo ul {
    list-style: none;
    float: left;
}

.monitor-module-title-leftInfo ul>li:first-child {
    font-weight: bold;
}

.monitor-module-title-leftInfo ul>li {
    float: left;
    display: block;
    padding: 2px 5px;
}

.monitor-module-title-rightInfo {
    float: right;
}

.monitor-module-title-rightInfo ul {
    list-style: none;
    float: left;
}

.monitor-module-title-rightInfo ul>li {
    float: left;
    display: block;
    padding: 2px 5px;
}

.monitor-module-title-rightInfo ul>li>span {
    line-height: 26px;
}

.title-state {
    height: 18px;
    padding: 4px 0px;
}

.updown img {
    padding-top: 2px;
}

.updown:hover {
    cursor: pointer;
}
</style>
