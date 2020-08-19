<template>
    <div class="footer">
        <div class="footer__content">
            <div class="top">
                <div class="left">
                    <div class="logo"></div>
                </div>
                <div class="right">
                    <dl>
                        <dt>360信创</dt>
                        <dd>
                            <a
                                target="_blank"
                                href="/agreement/detail/white-hat-service"
                                >协议条款
                            </a>
                        </dd>
                        <dd>
                            <a target="_blank" href="/about">关于我们</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>帮助中心</dt>
                        <dd>
                            <a target="_blank" href="/help/detail">我是白帽</a>
                        </dd>
                        <dd>
                            <a target="_blank" href="/help/detail#enterprise"
                                >我是厂商</a
                            >
                        </dd>
                    </dl>
                    <dl>
                        <dt>相关链接</dt>
                        <dd>
                            <a target="_blank" href="https://bugcloud.360.cn"
                                >360众测</a
                            >
                        </dd>
                        <dd>
                            <a target="_blank" href="https://bugcloud.360.cn"
                                >360 BugCloud</a
                            >
                        </dd>
                    </dl>
                    <dl>
                        <dt>联系我们</dt>
                        <dd>
                            白帽客服邮箱：360zc@360.cn
                        </dd>
                        <dd>
                            厂商客服邮箱：360zczx@360.cn
                        </dd>
                        <dd>
                            服务咨询：010-52447660
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="bottom">
                <p>
                    Copyright©2005-2020 360.cn 版权所有 360互联网安全中心
                    <a href="http://www.beian.gov.cn/">
                        京ICP证080047号[京ICP备08010314号-6]</a
                    >
                    <a href="http://www.360.cn/licence1.html">
                        京网文 [2015] 2079-380号</a
                    >
                    <a href="http://www.360.cn/licence2.html">
                        新出网证（京）字069号</a
                    >
                    <a href="http://www.360.cn/gongshangyingyezhizhao.html">
                        工商营业执照</a
                    >
                </p>
                <p>
                    <a
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000006"
                        >京公网安备 11000002000006号</a
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    background-color: #000;
    .footer__content {
        max-width: $--main-max-width;
        margin: auto;
        color: #fff;
        padding: 20px 0;
        .top {
            display: flex;
            .left {
                display: flex;
                align-items: center;
            }
            .right {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                dl {
                    flex: 1;
                    min-width: 120px;
                    dt {
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                    dd {
                        font-size: 12px;
                        margin-bottom: 12px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        a {
                            text-decoration: none;
                            cursor: pointer;
                            user-select: none;
                            color: #fff;
                            &:hover {
                            }
                        }
                    }
                }
            }
        }
        .bottom {
            text-align: center;
            margin-top: 20px;
            > p {
                font-size: 12px;
                color: #ccc;
                opacity: 0.8;
                > a {
                    text-decoration: none;
                    color: #ccc;
                    opacity: 0.3;
                }
            }
        }
    }
}
@media screen and (max-width: 480px) {
    .footer {
        display: none;
    }
}
</style>
