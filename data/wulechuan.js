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
                    题: '最新的工具（未发布）：',
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
                    题: '较新的工具（已发布）：',
                    应强调: true,
                    列: [
                        {
                            链: 'https://www.npmjs.com/search?q=%40xinmier',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: '老旧的工具（已发布）：',
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
                    题: '泛用控制器《多表逐项协同机》：',
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
                    题: 'VSCode 插件《Markdown 文件预览（ HTML ）之配色方案》：',
                    应强调: false,
                    列: [
                        {
                            链: 'https://marketplace.visualstudio.com/items?itemName=wulechuan.wulechuan-markdown-html-theme-light-1',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: 'Vuejs 组件《仿真的 LED 灯珠》：',
                    应强调: true,
                    列: [
                        {
                            链: 'https://gitee.com/nanchang-wulechuan/xme--ui--led-lights',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: 'JavaScript 工具《Fabricjs 5.x 实用多边形》：',
                    应强调: true,
                    列: [
                        {
                            链: 'https://codepen.io/wulechuan/pen/rNgpZom',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: 'CSS 工具《以纯 CSS 实现拟真的玻璃板效果》：',
                    应强调: true,
                    列: [
                        {
                            链: 'https://codepen.io/wulechuan/pen/QQKXZb',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: '老旧的 CSS 工具《CSS 动画花瓣》：',
                    应强调: false,
                    列: [
                        {
                            链: 'https://codepen.io/wulechuan/pen/dqOpom',
                            链后文: '。',
                        },
                    ],
                },

                {
                    题: '为我犬子设计的网页小游戏《端端的超级勇士》：',
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
                    文: '待详。',
                    列: [
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
                    文: '待详。',
                    列: [
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
                    文: '待详。',
                    列: [
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
                        '参与铁道部评审的核心系统。业务逻辑与交互设计复杂。',
                        '独立完成多个关键子系统（观测预警、交路编排）的全栈式前端开发（美术设计并编码）。',
                        '针对 ArcGIS 进行二次开发。处理大量复杂的 eCharts 图表数据。',
                        '通过虚拟滚动等技术进行深度性能优化，保障系统流畅运行。',
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
