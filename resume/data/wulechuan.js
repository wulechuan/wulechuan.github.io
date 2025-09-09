// @ts-check





/**
 * @param {string} url
 * @param {string} [text]
 */
function genHtmlOfAnchor (url, text) {
    if (text) {
        return `<a href="${encodeURI(url)}" target="_blank" rel="noopener noreferrer" class="media-screen-only">${text}</a><span class="media-print-only">${text}： </span><a href="${encodeURI(url)}" class="media-print-only">${url}</a>`
    } else {
        return `<a href="${encodeURI(url)}" target="_blank" rel="noopener noreferrer">${url}</a>`
    }
}





/** @type {import('../types/简历').简历_范_数据全集} */
const resumeRawData = {
    填写该简历之年月: '2025 年 9 月',



    个人信息摘要: {
        姓名逐字: [ '吴', '乐', '川' ],
        姓名拼音: [ 'wú', 'lè', 'chuān' ],
        职业称谓: '网页应用开发资深工程师',



        联系方式: {
            手机号: '180-1787-0319',
            微信号: '180-1787-0319',
            电子邮箱: 'wulechuan@live.com',
            代码仓库: 'https://gitee.com/nanchang-wulechuan',
        },



        个人简介: [
            {
                题: '主攻领域',
                列: [
                    {
                        应强调: true,
                        文: '曾拥有 10 余年的三维动画与影视制作行业经验。后转型为网页程序开发员。',
                    },
                    {
                        应强调: true,
                        文: '逾 12 年网页程序开发经验。推崇模块化开发理念并全力实践。理解并推崇 RESTful 开发。',
                    },
                    {
                        应强调: true,
                        文: '有丰富的程序化图表绘制经验（例如 ECharts ）。有丰富的网页图形交互编程经验（例如 Fabricjs 、Konvajs ）。有较丰富的网页流媒体编程经验。',
                    },
                    {
                        应强调: false,
                        文: '有网页三维编程经验（例如 Threejs 、 Babylonjs ）。',
                    },
                ],
            },



            {
                题: '涉猎',
                列: [
                    {
                        应强调: true,
                        文: '具备从需求分析到项目部署的全栈能力。',
                    },
                    {
                        应强调: true,
                        文: '掌握基本且实用的服务端编程技术，含双工通信（ WebSocket ）服务编程。惯用 KoaJS 、 ExpressJS  。',
                    },
                    {
                        应强调: true,
                        文: '自幼爱好美术。可独立设计界面，崇尚简约风格。可独立设计人机交互细节。',
                    },
                ],
            },



            {
                题: '职业素养',
                列: [
                    {
                        应强调: true,
                        文: '注重研发流程的自动化。独立搭建了多产品线、多型号、多商务品牌的全自动【软件发行版群】构建工具。制定并恪守办法部分规范，特别是持续维护版本发行与演进文档。',
                    },
                    {
                        应强调: false,
                        文: '注重代码可读性、可复用性。格外注重技术文档之编撰。具备优秀的文档撰写能力（中英文）。',
                    },
                    {
                        应强调: false,
                        文: '积极利用人工智能体辅助编程。擅长预先拆解复杂的业务，以利交付于人工智能体。擅长撰写条理清晰、措辞精准、切中要害的需求文档，以引导和规范人工智能体之产出。',
                    },
                    {
                        应强调: true,
                        文: '善与团队协作。熟悉敏捷开发模式。熟悉 Scrum 多人协同工作框架。',
                    },
                    {
                        应强调: true,
                        文: '5 年以上技术领导经验。',
                    },
                    {
                        应强调: false,
                        文: '凡事精益求精。在界面编程领域追求极致的用户体验。',
                    },
                    {
                        应强调: false,
                        文: '对技术充满热情。积极拥抱新兴技术。',
                    },
                    {
                        应强调: false,
                        文: '英语听说读写流利。',
                    },
                ],
            },



            {
                题: '为人',
                列: [
                    {
                        应强调: true,
                        文: '勤奋。务实。乐观。幽默。',
                    },
                ],
            },
        ],
    },



    作品集: [
        {
            组题: '实用工具群',
            文: '独自设计了大大小小数十款实用工具，多半已发布于 npm 仓库。',
            作品组: [
                {
                    题: '最新的工具（未发布）',
                    应强调: true,
                    列: [
                        {
                            应强调: false,
                            链: 'https://gitee.com/nanchang-wulechuan/wlc-compound-project-2025-08/tree/主/跨应用公共资源集',
                            链后文: '。 若干工具已配文档。其余文档仍在整理。',
                        },
                        // {
                        //     应强调: true,
                        //     文: '若干工具已配文档。其余文档仍在整理。',
                        // },
                    ],
                },

                {
                    题: '较新的工具（已发布）',
                    应强调: true,
                    列: [
                        {
                            链: 'https://www.npmjs.com/search?q=%40xinmier',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: '老旧的工具（已发布）',
                    应强调: false,
                    列: [
                        {
                            链: 'https://www.npmjs.com/search?q=%40wulechuan',
                            链后文: '。',
                        },
                    ],
                },
            ],
        },

        {
            组题: '有特色或代表性的工具或项目',
            作品组: [
                {
                    题: '泛用控制器《多表逐项协同机》',
                    应强调: true,
                    列: [
                        {
                            应强调: true,
                            链前文: '汉语版：',
                            链: 'https://gitee.com/nanchang-wulechuan/wlc-compound-project-2025-08/tree/主/跨应用公共资源集/通用工具-多表逐项匹配与协同机',
                        },
                        {
                            应强调: false,
                            链前文: '外国语版：',
                            链: 'https://gitee.com/nanchang-wulechuan/wlc-compound-project-2025-08/tree/主/跨应用公共资源集/通用工具-多表逐项匹配与协同机_非汉语',
                        },
                        // genHtmlOfAnchor('https://gitee.com/nanchang-wulechuan/wlc-compound-project-2025-08/tree/主/跨应用公共资源集/通用工具-多表逐项匹配与协同机', '汉语版'),
                        // genHtmlOfAnchor('https://gitee.com/nanchang-wulechuan/wlc-compound-project-2025-08/tree/主/跨应用公共资源集/通用工具-多表逐项匹配与协同机_非汉语', '外国语版'),
                    ],
                },

                {
                    题: 'VSCode 插件《Markdown 文件预览（ HTML ）之配色方案》',
                    应强调: false,
                    列: [
                        {
                            链: 'https://marketplace.visualstudio.com/items?itemName=wulechuan.wulechuan-markdown-html-theme-light-1',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: 'Vuejs 组件《仿真的 LED 灯珠》',
                    应强调: true,
                    列: [
                        {
                            链前文: '效果图：',
                            // 链: './demos/led-light/assets/led-lights-demo.png',
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-resume/raw/main/demos/led-light/assets/led-lights-demo.png',
                            链后文: '。',
                        },
                        {
                            链前文: '运行效果：',
                            链: './demos/led-light/index.html',
                            链后文: '。',
                        },
                        {
                            链前文: '代码库：',
                            链: 'https://gitee.com/nanchang-wulechuan/xme--ui--led-lights',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: 'JavaScript 工具《Fabricjs 5.x 实用多边形》',
                    应强调: true,
                    列: [
                        {
                            链前文: '此处：',
                            链: './demos/fabric-polygon/index.html',
                        },
                        {
                            链前文: '或此处：',
                            链: 'https://codepen.io/wulechuan/pen/rNgpZom',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: 'CSS 工具《以纯 CSS 实现拟真的玻璃板效果》',
                    应强调: true,
                    列: [
                        {
                            链前文: '此处：',
                            链: './demos/css-glass/index.html',
                            链后文: '。',
                        },
                        {
                            链前文: '或此处：',
                            链: 'https://codepen.io/wulechuan/pen/QQKXZb',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: '老旧的 CSS 工具《CSS 动画花瓣》',
                    应强调: false,
                    列: [
                        {
                            链: 'https://codepen.io/wulechuan/pen/dqOpom',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: '为我犬子设计的网页小游戏《端端的超级勇士》',
                    应强调: false,
                    列: [
                        {
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-webapp-duan-duan-chao-ji-yong-shi',
                            链后文: '。',
                        },
                    ],
                },
            ],
        },
        
        

        {
            组题: '项目管理与工程自动化',
            作品组: [
                {
                    题: '《某软件项目演进记录》',
                    列: [
                        {
                            应强调: true,
                            文: '本人长期维护软件演进历史。勘误、变更、改良，一并志之。与团队分享，且随时备查。',
                        },
                        {
                            链前文: '例图1：',
                            // 链: './demos/progject-management/assets/software-evolving-history-doc/001.jpg',
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-resume/raw/main/demos/progject-management/assets/software-evolving-history-doc/001.jpg',
                            链后文: '。',
                        },
                        {
                            链前文: '例图2：',
                            // 链: './demos/progject-management/assets/software-evolving-history-doc/002.jpg',
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-resume/raw/main/demos/progject-management/assets/software-evolving-history-doc/002.jpg',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: '《某软件项目多发行版自动化打包与管理工具》',
                    列: [
                        {
                            应强调: true,
                            文: '自动成批构建发行版（可无人值守）。构建过程给出摘要，以便监察。',
                        },
                        {
                            应强调: true,
                            文: '不同品牌、型族、亚型等的排列组合，可依据某组合对应的构建信号文件，来裁定是否参与本批次之构建。',
                        },
                        {
                            应强调: true,
                            文: '自动依照预先配置，分OEM品牌打出发行版汇总包。',
                        },
                        {
                            应强调: true,
                            文: '自动依照不同品牌、型号、亚型的发行版各自打包。',
                        },
                        {
                            应强调: true,
                            文: '自动撰写完整的发版通知。',
                        },
                        {
                            链前文: '例图1：',
                            // 链: './demos/progject-management/assets/software-editions-automation/002.jpg',
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-resume/raw/main/demos/progject-management/assets/software-editions-automation/002.jpg',
                            链后文: '。',
                        },
                        {
                            链前文: '例图2：',
                            // 链: './demos/progject-management/assets/software-editions-automation/003.jpg',
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-resume/raw/main/demos/progject-management/assets/software-editions-automation/003.jpg',
                            链后文: '。',
                        },
                        {
                            链前文: '例图3：',
                            // 链: './demos/progject-management/assets/software-editions-automation/004.jpg',
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-resume/raw/main/demos/progject-management/assets/software-editions-automation/004.jpg',
                            链后文: '。',
                        },
                        {
                            链前文: '例图4：',
                            // 链: './demos/progject-management/assets/software-editions-automation/006.jpg',
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-resume/raw/main/demos/progject-management/assets/software-editions-automation/006.jpg',
                            链后文: '。',
                        },
                        {
                            链前文: '例图5：',
                            // 链: './demos/progject-management/assets/software-editions-automation/007.jpg',
                            链: 'https://gitee.com/nanchang-wulechuan/wulechuan-resume/raw/main/demos/progject-management/assets/software-editions-automation/007.jpg',
                            链后文: '。',
                        },
                    ],
                },
            ],
        },
    ],



    受教育经历: [
        {
            教育机构: '南京邮电学院（今南京邮电大学）',
            主修专业: '通信工程',
            时间段: [
                [ 1996, 9 ],
                [ 2000, 7 ],
            ],
        },
    ],



    技能集: {
        开发语言: [
            [ 'TypeScript',                '精通' ],
            [ 'JavaScript (ES5)',          '精通' ],
            [ 'JavaScript (ES6 ~ ES2025)', '精通' ],
            [ 'JSX / TSX',                 '精通' ],
            [ 'HTML5',                     '精通' ],
            [ 'CSS3',                      '精通' ],
            [ 'Sass',                      '精通' ],
            [ 'Less',                      '精通' ],
            [ 'Stylus',                    '精通' ],
        ],

        技术框架技术子领域与专门工具库: [
            [ 'Vuejs 2',         '精通' ],
            [ 'Vuejs 3',         '精通' ],
            [ 'VueX',            '精通' ],
            [ 'Piniajs',         '精通' ],
            [ 'Vue Router',      '精通' ],
            [ 'VueUse',          '精通' ],
            [ 'jQuery',          '精通' ],
            [ 'Django (Client)', '精通' ],
            [ 'Threejs',         '精通' ],
            [ 'Konvajs',         '精通' ],
            [ 'Fabricjs',        '精通' ],
            [ 'ECharts',         '精通' ],
            [ 'HighCharts' ],
            [ 'Element Plus',    '精通' ],
            [ 'Ant Design Vue',  '精通' ],
            [ 'Web API: MediaStream' ],
            [ 'Web API: Workers' ],
            [ 'NuxtJS' ],
            [ 'ReactJS' ],
            [ 'MeteorJS' ],
            [ 'NodeJS' ],
            [ 'KoaJS',           '精通' ],
            [ 'ExpressJS' ],
            [ 'MongoDB' ],
        ],

        泛用工具与平台: [
            [ 'PowerShellCore',  '精通' ],
            [ 'Bash',            '精通' ],
            [ 'ViteJS',          '精通' ],
            [ 'WebpackJS',       '精通' ],
            [ 'GulpJS',          '精通' ],
            [ 'git',             '精通' ],
            [ 'npm',             '精通' ],
            [ 'Jenkins' ],
            [ 'CircleCI' ],
            [ 'Docker' ],
            [ 'Figma' ],
        ],
    },



    从业经历: [
        {
            企业名称: '辛米尔视觉科技（上海）有限公司',
            职位名称: '网页应用开发组长',
            时间段: [
                [2022, 10],
                [2025, 8],
            ],
            岗位职责: [
                {
                    列: [
                        {
                            应强调: true,
                            文: '确保所有网页软件达到工业级要求。如完善应对一切极端情形、故障后自动恢复等、无人值守策略。',
                        },
                        {
                            应强调: true,
                            文: '设计并维护了完善的自动化工具链，已确保较复杂的产品线的统一发布，半自动部署（面向嵌入式环境的网页程序不必也不可能全自动部署）。另见下文《项目经验》的相关条目。',
                        },
                        {
                            应强调: false,
                            文: '作为公司第一名正式的网页开发员，接手老旧的项目雏形，并开始彻头彻尾的改造该项目，并长期维护。',
                        },
                        {
                            应强调: false,
                            文: '为新的产品线搭建全新的技术框架，从零开始开发，并长期维护。',
                        },
                        {
                            应强调: false,
                            文: '为若干重要项目搭建好框架基础，或完成早期版本。再将代码库转交给其他同僚继续开发或维护。',
                        },
                        {
                            应强调: true,
                            文: '紧密围绕公司业务，研发或预研专项技术。例如：在网页中借助独立线程的计算，实时稳定的呈现三维点云。又如：在确保高帧率、高分辨率的前提下，在网页中实现快速的图像变换。还有：在网页中实现实时的视频流画面处理，并实时产出全新的视频流（MediaStream）。',
                        },
                 
                        {
                            应强调: false,
                            文: '从零开始负责公司官网。含美术设计、交互设计、编码实现。本人还确保官网排版可自适应几乎一切尺寸的屏幕。不过，第一稿如今已被替换，不再面世。',
                        },
                        {
                            应强调: true,
                            文: '负责或指导公司一切项目的网页端代码的审查。',
                        },
                        {
                            应强调: true,
                            文: '闲时，负责对网页技术组不定期进行若干次技术培训。多半围绕 TypeScript 语言特点与运用技巧。',
                        },
                        {
                            应强调: true,
                            文: '负责整理公司诸项目中的编码成果，形成高度可复用的库，并发布在 npm 上。',
                        },
                    ],
                },
            ],
        },



        {
            企业名称: '上海申铁信息工程有限公司',
            职位名称: '高级网页应用开发工程师',
            时间段: [
                [2020, 7],
                [2022, 7],
            ],
            岗位职责: [
                {
                    列: [
                        '带领前端小组，规划并完成动车组健康管理系统（PHM）第一、二阶段的前端开发任务。',
                        '独立负责《动车交路与运行状态观测和预警子系统》及《动车交路编排子系统》的美术设计、交互设计与编码实现。',
                        '进行大量前端性能优化工作，如虚拟滚动以解决大数据量渲染性能瓶颈。',
                        '负责前端技术培训、通用代码模块化及团队内推广。',
                    ],
                },
            ],
        },



        {
            企业名称: '新趣教育科技（上海）有限公司',
            职位名称: '高级网页应用开发工程师 / UI设计师 / UX设计师',
            时间段: [
                [2020, 1],
                [2020, 6],
            ],
            岗位职责: [
                {
                    列: [
                        '独自完成公司旗下多款子产品的前端界面设计、交互设计、动画设计和编码实现。',
                        '采用 TypeScript 和 Vue 2.x 技术栈，设计并应用自研 npm 组件和 mock 数据机制。',
                    ],
                },
            ],
        },



        {
            企业名称: '江苏传智播客教育科技股份有限公司',
            职位名称: 'JavaScript 讲师',
            时间段: [
                [2019, 7],
                [2019, 12],
            ],
            岗位职责: [
                {
                    列: [
                        '根据教学大纲，对所分配到的课程自行编写入门级教案和教学视频。',
                        '日常授课。',
                        '参与教学研讨，改进课程设计和教案设计。',
                        '轮值答疑。整理文档；为公司内部知识库增加内容。',
                    ],
                },
            ],
        },



        {
            企业名称: '上海天旦网络科技发展有限公司',
            职位名称: '高级网页应用开发工程师 / 研发部形象设计师 / 产品技术支持',
            时间段: [
                [2017, 7],
                [2019, 6],
            ],
            岗位职责: [
                {
                    列: [
                        '参与核心产品研发，使用 React/Redux 重构旧模块，并深度定制 Ant Design 构建自有组件库。',
                        '开发基于 Nuxt.js 的公司内部 Kubernetes 管理平台。',
                        '撰写 Bash 脚本优化工作流，将故障还原周期从 2 天缩短至 2 小时。',
                        '为一线工程师提供技术支持，分析日志、定位故障、提出性能优化方案。',
                    ],
                },
            ],
        },



        {
            企业名称: '帝帆美（上海）信息科技有限公司',
            职位名称: '高级网页应用开发工程师',
            时间段: [
                [2016, 5],
                [2017, 6],
            ],
            岗位职责: [
                {
                    列: [
                        '维护 Mademan、Smosh 等多个旧有网站（WordPress/Drupal），修复瑕疵并添加新功能。',
                        '参与核心网站 Break.com 的全新改版重构，与洛杉矶团队协作开发，采用 ES6、Sass、Webpack。',
                    ],
                },
            ],
        },



        {
            企业名称: '上海耘智科技有限公司',
            职位名称: '网页应用开发工程师 / UI设计师 / UX设计师',
            时间段: [
                [2014, 11],
                [2016, 5],
            ],
            岗位职责: [
                {
                    列: [
                        '作为创始阶段唯一前端，从零构建产品前端，自行设计基于 mixin 机制的通用前端框架。',
                        '主导页面与交互设计，确保在移动端和桌面端的完美自适应。',
                    ],
                },
            ],
        },
    ],



    项目经验: [
        {
            项目名称: '辛米尔智能相机（老款全产品线）自管系统界面',
            时间段: [
                [2022, 10 ],
                [2025,  8 ],
            ],
            项目简述: [
                {
                    题: '概况',
                    列: [
                        {
                            应强调: true,
                            文: '确保该网页应用达到工业级要求。如完善应对一切极端情形、连接故障后自动恢复等、无人值守策略。',
                        },
                        {
                            应强调: true,
                            文: '设计并维护了完善的自动化工具链，已确保较复杂的产品线的统一发布，半自动部署（面向嵌入式环境的网页程序不必也不可能全自动部署）。须知，产品线中的不同亚型，配置细节可能迥异，且随着项目演进，历史版的服务端程序接口可能变迁。我对网页端的要求时，用唯一的一套代码兼容一切历史版本的服务端程序。为此，我维护了一整套严谨的配置集。',
                        },
                        {
                            应强调: false,
                            文: '负责该项目一切美术设计。',
                        },
                        {
                            应强调: false,
                            文: '长期维护若干核心文档。每逢发布节点，规范记载。',
                        },
                    ],
                },
                {
                    题: '部分技术细节',
                    列: [
                        {
                            应强调: true,
                            文: '借助 FabricJS 专门研发了复用性颇高的绘图功能块。',
                        },
                        {
                            应强调: true,
                            文: '借助 JSDocs 技术，改良了 90% 的旧代码，致使代码量几近翻倍。后续新添代码也严格遵照此标准施行。',
                        },
                        {
                            应强调: true,
                            文: '借助 `OffscreenCanvas` 、`ImageBitmap` 等标准、现代的高性能编程接口，实现了在确保高帧率、高分辨率的前提下，在网页中实现快速的图像变换。',
                        },
                        {
                            应强调: false,
                            文: '在技术探究性的代码分支上，实现了在网页中实现实时的视频流画面处理，并实时产出全新的视频流（MediaStream）。后因公司技术路线调整，未令该成果并入主分支。',
                        },
                    ],
                },
                {
                    题: '成果展示（我接手前，软件老旧的模样）',
                    列: [
                        {
                            应强调: false,
                            链: './demos/software-1/old-look/001.jpg',
                            链后文: '。',
                        },
                        {
                            应强调: false,
                            链: './demos/software-1/old-look/002.jpg',
                            链后文: '。',
                        },
                    ],
                },
                {
                    题: '成果展示（我接手后两年有余，软件如今的模样）',
                    列: [
                        {
                            应强调: true,
                            链: './demos/software-1/new-look/001.jpg',
                            链后文: '。',
                        },
                        {
                            应强调: true,
                            链: './demos/software-1/new-look/002.jpg',
                            链后文: '。',
                        },
                        {
                            应强调: true,
                            链: './demos/software-1/new-look/003.jpg',
                            链后文: '。',
                        },
                        {
                            应强调: true,
                            链: './demos/software-1/new-look/004.jpg',
                            链后文: '。',
                        },
                        {
                            应强调: true,
                            链: './demos/software-1/new-look/005.jpg',
                            链后文: '。',
                        },
                        {
                            应强调: true,
                            链: './demos/software-1/new-look/006.jpg',
                            链后文: '。',
                        },
                    ],
                },
            ],
            所用技术栈: [
                [ 'JsDocs', '应强调' ],
                [ 'Vuejs 2' ],
                [ 'VueX' ],
                [ 'Fabricjs', '应强调' ],
                [ 'AntDesignForVue' ],
                [ 'TypeScript' ],
                [ 'Sass' ],
                [ 'PowerShellCore', '应强调' ],
                [ 'Bash' ],
                [ 'Webpack' ],
                [ 'NodeJS', '应强调' ],
            ],
        },



        {
            项目名称: '辛米尔智能相机（新款全产品线）自管系统界面',
            时间段: [
                [2022, 10 ],
                [2025,  8 ],
            ],
            项目简述: [
                {
                    列: [
                        {
                            应强调: true,
                            文: '确保该网页应用达到工业级要求。如完善应对一切极端情形、连接故障后自动恢复等、无人值守策略。',
                        },
                        {
                            应强调: true,
                            文: '设计并维护了完善的自动化工具链，已确保较复杂的产品线的统一发布，半自动部署（面向嵌入式环境的网页程序不必也不可能全自动部署）。该套系统亚型不多，但产品发布自动化的技术框架与另一项目类同，仅因演进历史较短，维护代价略低。',
                        },
                        {
                            应强调: false,
                            文: '从零开始搭建技术框架，并从零开始开发。维护一年左右后，移交给组员。后续仍经常给出指导，并审查代码。',
                        },
                    ],
                },
            ],
            所用技术栈: [
                [ 'TypeScript' ],
                [ 'Vuejs 3' ],
                [ 'Pinia' ],
                [ '自研 npm 组件', '应强调' ],
                [ 'Konvajs', '应强调' ],
                [ 'Threejs', '应强调' ],
                [ 'ElementPlus' ],
                [ 'ECharts' ],
                [ 'Sass' ],
                [ 'PowerShellCore', '应强调' ],
                [ 'Bash' ],
                [ 'Vite' ],
                [ 'NodeJS', '应强调' ],
            ],
        },



        {
            项目名称: '动车组健康管理系统（PHM）前端',
            时间段: [
                [2018, 6],
                [2022, 6],
            ],
            项目简述: [
                {
                    列: [
                        {
                            应强调: true,
                            文: '参与铁道部评审的核心系统。业务固有的复杂性带来了交互设计的复杂性。本人为此专门编写了很多界面部件。',
                        },
                        {
                            应强调: true,
                            文: '独自完成了完整的《动车交路与运行状态观测和预警子系统》。含美术设计、交互设计、编码实现等一切任务。',
                        },
                        {
                            应强调: true,
                            文: '独立完成了完整的《动车交路编排子系统》。含美术设计、交互设计、编码实现等一切任务。',
                        },
                        {
                            应强调: true,
                            文: '针对 ArcGIS 地理信息系统进行二次开发。',
                        },
                        {
                            应强调: false,
                            文: '处理大量复杂的 eCharts 图表数据。涉及琐碎的业务要求。网页端甚至还需承担部分数据修缮算法。',
                        },
                        {
                            应强调: false,
                            文: '制作了大量中台性质的管理页面。',
                        },
                        {
                            应强调: false,
                            文: '进行了大量的前端性能优化工作。例如：在呈现数千条拥有复杂的信息卡片时，仅动态构建滚动窗口可见的若干卡片，以此极大程度的消除了 Vuejs 组件构建、销毁时开销过大带来的负面影像。',
                        },
                    ],
                },
            ],
            所用技术栈: [
                [ 'Vue 2.x' ],
                [ 'ECharts' ],
                [ 'ArcGIS API', '应强调' ],
                [ 'ElementUI' ],
                [ 'Sass' ],
            ],
        },



        {
            项目名称: '新趣科技旗下核心产品前端',
            时间段: [
                [2020, 1],
                [2020, 6],
            ],
            项目简述: [
                {
                    列: [
                        '独立负责多款子产品美术设计、前端开发。',
                        '项目对前端路由设计要求复杂，广泛使用 Vue Router 钩子进行统一逻辑处理。',
                        '实现全自适应布局，确保多端体验良好。',
                    ],
                },
            ],
            所用技术栈: [
                [ 'Vue 2.x' ],
                [ 'TypeScript' ],
                [ '自研 npm 组件', '应强调' ],
                [ '微信公众号接口', '应强调' ],
                [ 'Stylus' ],
            ],
            项目成果地址: 'https://t.simplekids.cn/',
        },



        {
            项目名称: '天旦内部 Kubernetes 管理平台',
            时间段: [
                [2017, 7],
                [2019, 6],
            ],
            项目简述: [
                {
                    列: [
                        '利用 Nuxt.js 技术栈开发的公司内部项目。',
                        '兼任界面设计师，负责项目的视觉与交互设计。',
                    ],
                },
            ],
            所用技术栈: [
                [ 'Nuxt.js', '应强调' ],
                [ 'Vuejs 2' ],
                [ 'ExpressJS' ],
            ],
            项目成果地址: '',
        },



        {
            项目名称: 'Break.com 网站改版重构',
            时间段: [
                [2016, 5],
                [2017, 6],
            ],
            项目简述: [
                {
                    列: [
                        '从底层完全重构，目标是实现超高的网络与交互响应性。',
                        '与美国洛杉矶团队昼夜交替协作开发，互相评审代码。',
                        '负责页面交互逻辑实现与 Google Tag 广告块构建。',
                    ],
                },
            ],
            所用技术栈: [
                [ 'ES2015' ],
                [ 'Sass' ],
                [ 'Google Tag', '应强调' ],
            ],
            项目成果地址: '',
        },
    ],
};





window.resumeRawData = resumeRawData
