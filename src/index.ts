import type { App } from 'vue';
import * as components from './components';

const componentList = (components as any)?.default;
const KastellixComponents = {
    install(app: App) {
        Object.keys(componentList).forEach(name => {
            app.component(name, componentList[name]);
        })
    }
};
export default KastellixComponents;