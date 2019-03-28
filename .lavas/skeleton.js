import Vue from 'vue';

import Skeleton from '/Users/shenmingxiang1/Desktop/lavas/pwa-project/core/Skeleton.vue';


export default new Vue({
    components: {
        
        Skeleton,
        
    },
    template: `
        <div>
            
            <skeleton id="skeleton" style="display:none"/>
            
        </div>
    `
});
