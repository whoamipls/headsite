<template>
    <div>
        <PageTitle :titles="['卫星地面站系统建设','Satellite ground station system construction','测运控中心']" />
        <p class="hdSection">测运控中心主要由遥控子系统、遥测监视子系统、任务规划子系统、卫星姿态/轨道计算与控制子系统、测控站网管理控制子系统、二/三维显示子系统、系统管理子系统等构成。</p>
        <p class="hdTitle1 hdIconRect">遥控子系统</p>
        <p class="hdSection">实现遥控指令的管理功能，可编辑或导入遥控指令，可以多种方式（单指令、指令链、遥控数据块）完成遥控指令、注入数据的发送以及执行效果的实时比判，完成各类注入数据加工、反解和大环比对。</p>
        <p class="hdTitle1 hdIconRect">遥测监视子系统</p>
        <p class="hdSection">完成对卫星各类遥测数据的实时、准实时和事后处理和解析工作，采用数字、曲线、图表等方式实现可定制的可视化显示，可设置参数预警门限、异常门限等用于自动判断卫星相关遥测量的状态，提供卫星遥测数据及处理结果的存储功能，并能随时调取历史数据进行事后分析。</p>
        <p class="hdTitle1 hdIconRect">任务规划子系统</p>
        <p class="hdSection">根据卫星在轨任务具体需求，结合对航天器轨道/姿态计算、预报，完成对多星测控计划的计算，实现测控资源的统筹规划，消解测控资源的冲突，编排卫星测控计划、跟踪接收计划等。</p>
        <p class="hdTitle1 hdIconRect">卫星姿态/轨道计算与控制子系统</p>
        <p class="hdSection">能基于外测数据、GNSS数据等测量数据完成轨道确定及预报，可根据航天器初始轨道、初始姿态、目标轨道和目标姿态等参数进行与卫星姿态控制有关的各种计算，确定航天器姿态并进行姿态预示。</p>
        <p class="hdTitle1 hdIconRect">测控站网管理控制子系统</p>
        <p class="hdSection">能基于外测数据、GNSS数据等测量数据完成轨道确定及预报，可根据航天器初始轨道、初始姿态、目标轨道和目标姿态等参数进行与卫星姿态控制有关的各种计算，确定航天器姿态并进行姿态预示。</p>
        <p class="hdTitle1 hdIconRect">二/三维显示子系统</p>
        <p class="hdSection">对卫星的宏观场景和微观场景进行二、三维直观展示，显示卫星在轨运行状态、展示卫星与地日月之间的相对时空关系、计算并显示卫星与地面测控站的相对位置关系等。</p>
        <p class="hdTitle1 hdIconRect">系统管理子系统</p>
        <p class="hdSection">包括卫星信息管理、地面站信息管理、用户管理、权限管理、日志管理等功能。</p>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <img class="illustration" src="assets/strategy/controlCenter/1.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
export default {
	components: {
		PageTitle,
	},
    mounted: function() {
    }
}
</script>

<style scoped lang="less">
    img.illustration {
        width: 100%;
    }
    div.container {
        width: 70%;
    }
    div.row {
        margin-top: 20px;
    }
</style>
