import vueI18nEsm from "vue-i18n";
import Vue from "vue";

const zh = {
    city: '杭州',
    country:"中国",
    joinButton:'开启变革',
    email: '邮箱',
    mobile: '手机'
}

const en = {
    city: 'HZ',
    country:'CHINA',
    joinButton:'Apply Now',
    email: 'Email',
    mobile: 'Mobile'
}

Vue.use(vueI18nEsm)

const userLanguage = navigator.language?.indexOf('zh') >=0 ? 'zh' : 'en'
console.log(userLanguage,'language')
const i18n = new vueI18nEsm({
    messages :{en,zh},
    locale:userLanguage
})

export default i18n