import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'

import Sub1 from '@/views/Sub1'
import Sub1Type1 from '@/views/Sub1Type1'
import Sub1Type2 from '@/views/Sub1Type2'
import Sub1Type3 from '@/views/Sub1Type3'

import Sub2 from '@/views/Sub2'
import Sub2Type1 from '@/views/Sub2Type1'
import Sub2Type2 from '@/views/Sub2Type2'
import Sub2Type3 from '@/views/Sub2Type3'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/sub1',
            name: 'Sub1',
            component: Sub1
        },
        {
            path: '/sub1/type1',
            name: 'Sub1Type1',
            component: Sub1Type1
        },
        {
            path: '/sub1/type2',
            name: 'Sub1Type2',
            component: Sub1Type2
        },
        {
            path: '/sub1/type3',
            name: 'Sub1Type3',
            component: Sub1Type3
        },
        {
            path: '/sub2',
            name: 'Sub2',
            component: Sub2
        },
        {
            path: '/sub2/type1',
            name: 'Sub2Type1',
            component: Sub2Type1
        },
        {
            path: '/sub2/type2',
            name: 'Sub2Type2',
            component: Sub2Type2
        },
        {
            path: '/sub2/type3',
            name: 'Sub2Type3',
            component: Sub2Type3
        },
    ]
})
