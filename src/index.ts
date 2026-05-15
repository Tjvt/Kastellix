import type { App, Component } from 'vue';
import * as components from './components';

export * from './components';

const Kastellix = {
    install(app: App) {
        Object.entries(components).forEach(([name, component]) => {
            if ((component as any).install || (component as any).__name || (component as any).setup) {
                app.component(name, component as Component);
            }
        });
    }
};

export default Kastellix;