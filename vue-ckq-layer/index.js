import layer from './packages/message/index.js'
import confirm from './packages/confirm/index.js'
import loading from './packages/loading/index.js'
import editdiv from './packages/editdiv/index.js'
import ckqScroll from './packages/scroll/index.js'

const install = function (Vue) {
    Vue.component(layer.name, layer)
    Vue.component(ckqScroll.name, ckqScroll)
    Vue.component(confirm.name, confirm);
    Vue.component(editdiv.name, editdiv);
    Vue.component(loading.name, loading)
    /*创建一个$ckq*/
    Vue.prototype.$ckq = {
        layer: layer.installMessage
    };

}
export default install
