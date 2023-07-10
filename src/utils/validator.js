import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN' // 引入中文文件

Validator.addLocale(zh)

const config = {
    locale: 'zh_CN',
    fieldsBagName: 'fieldBags'
}

Vue.use(VeeValidate, config)

// 自定义validate
const dictionary = {
    zh_CN: {
        messages: {
            required: () => '请输入',
            numeric: (field) => field + '必须为数值',
            url: () => '请输入正确格式的服务器地址',
            ip: () => '请输入正确的IP地址'
        },
        attributes: {
            ip: 'IP地址',
            httpPort: 'HTTP端口'
        }
    }
}
Validator.updateDictionary(dictionary)
