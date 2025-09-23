type 简历_范_略复杂的文字段落 = {
    题?: string;
    文?: string;
    列?: Array<(
        | string
        | {
            应强调?: boolean;
            文?: string;
            链前文?: string;
            链?: string;
            链后文?: string;
        }
    )>;
};

type 简历_范_单篇短文 = Array<(
    | '分隔线'
    | string
    | 简历_范_略复杂的文字段落
)>;

type 简历_范_时段 = (
    | [ [ number, number ] ]
    | [ [ number, number ], [ number, number ] ]
);

type 简历_范_作品集_单组 = {
    组题: string;
    文?: string;
    作品组: Array<(
        & 简历_范_略复杂的文字段落
        & {
            应强调?: boolean;
        }
    )>;
};

type 简历_范_单个技能 = (
    | [ string ]
    | [ string, '精通' ]
);

type 简历_范_项目经验_单项技术 = (
    | [ string ]
    | [ string, '应强调' ]
);

type 简历_范_受教育经历_单次 = {
    教育机构名称: string;
    主修专业: string;
    时段: 简历_范_时段;
};

type 简历_范_任职经历_单次 = {
    企业名称: string;
    职位名称: string;
    时段: 简历_范_时段;
    岗位职责: 简历_范_单篇短文;
};

type 简历_范_项目经验_单条 = {
    项目名称: string;
    时段: 简历_范_时段;
    项目简述: 简历_范_单篇短文;
    项目成果地址?: string;
    所用技术栈?: Array<简历_范_项目经验_单项技术>;
};





export type 简历_范_数据全集 = {
    填写该简历之年月: string;
    个人信息摘要: {
        姓名逐字: Array<            string>;
        姓名拼音: Array<undefined | string>;
        职业称谓: string;
        联系方式: {
            手机号: string;
            微信号: string;
            电子邮箱: string;
            代码仓库: string;
        };
        个人简介: 简历_范_单篇短文;
    };
    作品集: Array<简历_范_作品集_单组>;
    技能集: Record<
        (
            | '开发语言'
            | '技术框架技术子领域与专门工具库'
            | '泛用工具与平台'
        ),
        Array<简历_范_单个技能>
    >;
    任职经历: Array<简历_范_任职经历_单次>;
    项目经验: Array<简历_范_项目经验_单条>;
    受教育经历: Array<简历_范_受教育经历_单次>;
};





declare global {
    interface Window {
        resumeRawData: 简历_范_数据全集;
    }
}
