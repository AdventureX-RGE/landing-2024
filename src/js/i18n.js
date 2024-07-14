import vueI18nEsm from "vue-i18n";
import Vue from "vue";

const zh = {
    city: '杭州',
    country: "中国",
    joinButton: '开启变革',
    nexus: '通行证',
    email: '邮箱',
    mobile: '手机',
    detailTitle: '中国年轻人的第一场黑客松。',
    detailSection: '似乎从未有人专门为创造和“Building Stuff”创造一场活动，所以我们来了。AdventureX 2024｜逃逸计划，中国第一个由学生和社区组织的面向年轻人的黑客松活动。',
    extremeHacking: `72H+ 极限创造`,
    extremeDetail: `创造一款产品，又或是重构一项技术。`,
    freeTitle: `100% 免费`,
    freeDescription: `我们会提供餐食和住宿，以及咖啡和零食。`,
    participantTitle: `200+ 参与者`,
    participantDescription: `我们将招募 200 名 16-26 岁的“超级青年”。`,
    prize: '奖金总额',
    prizeDesc: '*这计算了所有现金、代金券、或其他形式的奖励'
}

const en = {
    city: 'HZ',
    country: 'CHINA',
    joinButton: 'Apply Now',
    nexus: 'Nexus',
    email: 'Email',
    mobile: 'Mobile',
    detailTitle: 'The first youths hackathon in China',
    detailSection: `It seems that no one has ever created an event dedicated to creating and "Building Stuff", so here we are. AdventureX 2024, China's first student and community organized hackathon for young people.`,
    extremeHacking: `72H+ Extreme Hacking`,
    extremeDetail: `Create a product, or reinvent a technology.`,
    freeTitle: `100% Free & 100% Cool`,
    freeDescription: `Meals and accommodations will be provided, as well as coffee and snacks.`,
    participantTitle: `200+ Hackers`,
    participantDescription: `We will be recruiting 200 "Super Youth" aged 16-26.`,
    prize: 'In Prize',
    prizeDesc: '*This counts all cash, credits, or other forms of rewards'
}

Vue.use(vueI18nEsm)

const userLanguage = navigator.language?.indexOf('zh') >= 0 ? 'zh' : 'en'
const i18n = new vueI18nEsm({
    messages: { en, zh },
    locale: userLanguage
})

export default i18n