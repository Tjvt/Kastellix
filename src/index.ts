import * as components from './components';

const componentList = components?.default;
const KastellixComponents = {
    install(Vue) {
        Object.keys(componentList).forEach(name => {
            Vue.component(name, componentList[name]);
        })
    }
};
export default KastellixComponents;