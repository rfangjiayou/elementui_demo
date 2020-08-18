<template>
    <div class="help">
        <div class="help__inner">
            <el-scrollbar class="left">
                <ul ref="menu">
                    <li 
                        v-for="item in menuList"
                        :key="item.id"
                        class="menu-item"
                        >
                        <router-link 
                            v-slot="{ href, route, isActive, isExactActive }"
                            :to="`${baseRoutePath}/#${item.id}`">
                                <a :href="`#${item.id}`" :class="{ 'menu-item-active': isExactActive }">{{item.label}}</a>
                        </router-link>
                    </li>
                </ul>
            </el-scrollbar>
            <el-scrollbar class="right">
                <article ref="article">
                    <div id="test1" aria-label="test1">
                        <h3>
                        <strong>1. 白帽如何入驻？</strong>
                        </h3>
                        <p style="text-align: left;">
                        <span>感谢您关注360众测，请您前往</span>
                        <span
                            >https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。https://zhongce.360.cn使用手机号码进行注册，白帽入驻时需要填写证明材料（用于评断专业能力），针对证明材料，平台将在2个工作日内完成审核，审核通过后您将获邀进入仿真实战靶场进行技术考核，技术考核及格后填入成绩并完成注册流程。</span
                        >
                        </p>
                    </div>
                    <div id="test2" aria-label="test2">
                        <h3>
                        <strong>2. 如何加入项目？</strong>
                        </h3>
                        <p><span>安全专家需要通过仿真实战靶场考核</span></p>
                        <ul style="list-style: disc;">
                        <li>完善个人资料</li>
                        <li>
                            通过仿真实战靶场考核
                        </li>
                        <li>
                            完成实名认证
                        </li>
                        <li>
                            与平台签署保密协议
                        </li>
                        <li>完善个人资料</li>
                        <li>
                            通过仿真实战靶场考核
                        </li>
                        <li>
                            完成实名认证
                        </li>
                        <li>
                            与平台签署保密协议
                        </li>
                        <li>完善个人资料</li>
                        <li>
                            通过仿真实战靶场考核
                        </li>
                        <li>
                            完成实名认证
                        </li>
                        <li>
                            与平台签署保密协议
                        </li>
                        <li>完善个人资料</li>
                        <li>
                            通过仿真实战靶场考核
                        </li>
                        <li>
                            完成实名认证
                        </li>
                        <li>
                            与平台签署保密协议
                        </li>
                        </ul>
                        <p>
                        <span
                            >完成以上步骤后，您就拥有了加入项目的资格。加入项目的方式有两种：第一种是主动申请，平台审核通过后即可加入项目提交漏洞；第二种是平台推送，平台会根据您的专业能力为您推送匹配的项目，点击接受即可加入项目提交漏洞。</span
                        >
                        </p>
                    </div>
                    <div id="test3" aria-label="test3">
                        <h3>
                        <strong>3. 发起争议如何解决？</strong>
                        </h3>
                        <p style="text-align: left;">
                        <span
                            >在漏洞审核过程中，如果提交者对漏洞评级、漏洞奖金等有异议，可在平台初审评级后的24小时内发起申诉或通过漏洞详情页面的留言板或通过即时通讯工具联系在线审核人员及时沟通。平台将按照漏洞报告者利益优先原则与企业三方协调处理，必要时可引入外部安全专家共同裁定。</span
                        >
                        </p>
                        <p style="text-align: left;">
                        <span
                            >如果在线审核人员没有在3个工作日内处理您的争议需求或在审核过程中没有秉持公平公正原则或沟通态度不好，您可向平台发起申诉，申诉邮箱：<a
                            href="mailto:360zc@360.cn"
                            target="_blank"
                            ><span>360zc@360.cn</span></a
                            >，平台将第一时间核实情况并对存在违纪行为的审核人员进行严肃处理。</span
                        >
                        </p>
                    </div>

                    <div id="test4" aria-label="test4">
                        <h3>
                        <strong>4. 企业用户如何入驻？</strong>
                        </h3>
                        <p style="text-align: left;">
                        <span>感谢关注360众测，请前往</span>
                        <span
                            >https://zhongce.360.cn使用手机号进行注册，企业入驻时需要上传加盖公章的营业执照等资料（用于证明企业身份），提交申请后平台将在2-5工作日完成审核。https://zhongce.360.cn使用手机号进行注册，企业入驻时需要上传加盖公章的营业执照等资料（用于证明企业身份），提交申请后平台将在2-5工作日完成审核。https://zhongce.360.cn使用手机号进行注册，企业入驻时需要上传加盖公章的营业执照等资料（用于证明企业身份），提交申请后平台将在2-5工作日完成审核。https://zhongce.360.cn使用手机号进行注册，企业入驻时需要上传加盖公章的营业执照等资料（用于证明企业身份），提交申请后平台将在2-5工作日完成审核。https://zhongce.360.cn使用手机号进行注册，企业入驻时需要上传加盖公章的营业执照等资料（用于证明企业身份），提交申请后平台将在2-5工作日完成审核。https://zhongce.360.cn使用手机号进行注册，企业入驻时需要上传加盖公章的营业执照等资料（用于证明企业身份），提交申请后平台将在2-5工作日完成审核。
                        </span>
                        </p>
                    </div>
                    <div id="test5" aria-label="test5">
                        <h3>
                        <strong>5. 如何在平台发布众测项目？</strong>
                        </h3>
                        <p style="text-align: left;">
                        <span
                            >安全产品主要是用于自动化检测安全问题，但并不足够智能。通用化的检测技术暂时还无法实现紧贴业务的安全检测，特别是一些权限或业务逻辑的安全问题，自动化的安全工具很难发现，只能依靠人工去检测。安全产品主要是用于自动化检测安全问题，但并不足够智能。通用化的检测技术暂时还无法实现紧贴业务的安全检测，特别是一些权限或业务逻辑的安全问题，自动化的安全工具很难发现，只能依靠人工去检测。安全产品主要是用于自动化检测安全问题，但并不足够智能。通用化的检测技术暂时还无法实现紧贴业务的安全检测，特别是一些权限或业务逻辑的安全问题，自动化的安全工具很难发现，只能依靠人工去检测。安全产品主要是用于自动化检测安全问题，但并不足够智能。通用化的检测技术暂时还无法实现紧贴业务的安全检测，特别是一些权限或业务逻辑的安全问题，自动化的安全工具很难发现，只能依靠人工去检测。</span
                        >
                        </p>
                    </div>
                </article>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseRoutePath: this.$route.path,
            scrollHash: '',
            menuList: []
        }
    },
    computed: {
        getArticalDom() {
            return this.menuList.map(ele => document.querySelector(`div[id=${ele.id}]`))
        }
    },
    methods: {
        init() {
            this.initMenuList()
            this.updateDom()
            if(this.$route.hash) {
                return this.scrollIntoHash()
            }else {
                this.scrollIntoFirst()
            }
        },
        initMenuList() {
            const domList = this.$refs.article?.querySelectorAll('div[id]');
            this.menuList = Array.from(domList)?.map(ele => {
                return {
                    id: ele.id,
                    label: ele.ariaLabel
                }
            })
        },
        updateDom() {
            const lastMenu = this.menuList[this.menuList.length - 1];
            const targetDom = document.querySelector(`div[id=${lastMenu.id}]`);
            const offsetHeight = targetDom?.offsetHeight;
            const scrollHeight = document.querySelector('.right .el-scrollbar__wrap')?.offsetHeight;
            if(scrollHeight > offsetHeight) {
                targetDom.style.height = `${scrollHeight}px`;
            }
        },
        handleScroll() {
            const scrollTop = document.querySelector('.right .el-scrollbar__wrap').scrollTop;
            let sumHeight = 0;
            const targetdDom = this.getArticalDom?.reduce((previous, current) => {
                const preOffsetHeight = previous.offsetHeight;
                sumHeight += preOffsetHeight;
                
                return sumHeight > scrollTop ? previous : current
            })
            this.$router.replace({ hash: targetdDom.id })
        },
        scrollIntoHash() {
            return new Promise(resolve => {
                this.$nextTick(() => {
                    const anchor = document.querySelector(
                        `a[href="${this.$route.hash}"]`
                    );
                    if (anchor) {
                        anchor.click();
                    } else {
                        document.querySelector(this.$route.hash).scrollIntoView();
                    }
                    resolve();
                });
            });
        },
        scrollIntoFirst() {
            return new Promise(resolve => {
                this.$nextTick(() => {
                    const href = this.menuList[0]?.id;
                    const anchor = this.$refs.menu?.querySelector(
                        `a[href="#${href}"]`
                    );
                    if(anchor) {
                        anchor.click();
                    } else {
                        document.querySelector(`div[id=${href}]`).scrollIntoView();
                    }
                    resolve();
                });
            });
        }
    },
    async mounted() {
        await this.init()
        document.querySelector('.right .el-scrollbar__wrap').addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="scss" scoped>
.help {
    margin: auto;
    margin-top: 20px;
    max-width: 1200px;
    padding: 20px;
    background: #fff;
    height: calc(100vh - 260px);
    .help__inner {
        display: flex;
        .left {
            padding: 20px;
            width: 300px;
            .menu-item {
                text-align: center;
                & + & {
                    margin-top: 20px;
                }
                &:hover {
                    background: rgba(26,238,194,0.11);
                    cursor: pointer;
                }
                a {
                    color: #0ED2AA;
                    display: block;
                    line-height: 40px;
                    text-decoration: none;
                }
            }
            .menu-item-active {
                background: rgba(26,238,194,0.11);
            }
        }
        .right {
            height: calc(100vh - 280px);
            flex: 1;
            padding: 20px;
            h3 {
                padding: 20px 0 10px 0;
            }
        }
    }
}
</style>
