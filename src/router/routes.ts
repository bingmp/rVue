import Layout from '@/Layout/index.vue'
export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: 'Login',
      hidden: true,
      icon: 'Promotion',
    },
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '',
      icon: '',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: 'Home',
          hidden: false,
          icon: 'HomeFilled',
          svg: 'medical',
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: 'Failed',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      title: 'Any',
      hidden: true,
      icon: 'Failed',
    },
  },
  {
    path: '/clinic',
    name: 'Clinic',
    component: Layout,
    redirect: '/clinic/atelectasis',
    meta: {
      title: 'Clinic Data',
      hidden: false,
      icon: '',
      svg: 'database',
    },
    children: [
      {
        path: '/clinic/atelectasis',
        name: 'Atelectasis',
        component: () => import('@/views/ClinicData/Atelectasis.vue'),
        meta: { title: 'Atelectasis', icon: 'Picture', svg: 'lungs' },
      },
      {
        path: '/clinic/mycoplasma',
        name: 'Mycoplasma',
        component: () => import('@/views/ClinicData/MycoplasmaChart.vue'),
        meta: { title: 'Mycoplasma', icon: 'Picture', svg: 'lungs' },
      },
      {
        path: '/clinic/covid19',
        name: 'covid19',
        component: () => import('@/views/ClinicData/Covid19.vue'),
        meta: { title: 'Covid-19', icon: 'Picture', svg: 'virus' },
      },
      {
        path: '/clinic/who',
        name: 'who',
        component: () => import('@/views/ClinicData/WHOMortalityDatabase.vue'),
        meta: {
          title: 'WHO Data',
          icon: 'Picture',
          svg: 'world-health-organization',
        },
      },
    ],
  },
  {
    path: '/rnaseq',
    name: 'RNAseq',
    component: Layout,
    redirect: '/rnaseq/machlearn',
    meta: { title: 'RNAseq', hidden: false, icon: '', svg: 'database' },
    children: [
      {
        path: '/rnaseq/machlearn',
        name: 'machlearn',
        component: () => import('@/views/RNAseq/Machlearn.vue'),
        meta: { title: 'MachLearn', icon: 'Picture', svg: 'machlearn' },
      },
      {
        path: '/rnaseq/limma',
        name: 'limma',
        component: () => import('@/views/RNAseq/Limma.vue'),
        meta: { title: 'Limma', icon: 'Picture', svg: 'rna' },
      },
      {
        path: '/rnaseq/deseq2',
        name: 'deseq2',
        component: () => import('@/views/RNAseq/DEseq2.vue'),
        meta: { title: 'DEseq2', icon: 'Picture', svg: 'rna' },
      },
    ],
  },
  {
    path: '/shiny',
    name: 'shiny',
    component: Layout,
    redirect: '/shiny/omics',
    meta: { title: 'GraphMed', icon: 'Platform', svg: 'analysis' },
    children: [
      {
        path: '/shiny/omics',
        name: 'omics',
        component: () => import('@/views/GraphMed/Omics.vue'),
        meta: { title: 'Omics', icon: 'Picture', svg: 'dna' },
      },
      {
        path: '/shiny/clinic',
        name: 'clinic',
        component: () => import('@/views/GraphMed/Clinic.vue'),
        meta: { title: 'Clinic', icon: 'Picture', svg: 'hospital' },
      },
      {
        path: '/shiny/labtools',
        name: 'labtools',
        component: () => import('@/views/GraphMed/Labtools.vue'),
        meta: { title: 'Lab. tools', icon: 'Picture', svg: 'lab' },
      },
      {
        path: '/shiny/ggplot',
        name: 'ggplot',
        component: () => import('@/views/GraphMed/ggplot.vue'),
        meta: { title: 'Basic plot', icon: 'Picture', svg: 'chart' },
      },
      {
        path: '/shiny/tools',
        name: 'tools',
        component: () => import('@/views/GraphMed/showTools.vue'),
        meta: { title: 'tools', hidden: true, icon: 'Picture' },
      },
    ],
  },
  // {
  //   path: '/if',
  //   name: 'if',
  //   component: () => import('@/views/GraphMed/iframe.vue'),
  //   meta: {
  //     hidden: true,
  //     title: 'if',
  //     icon: 'if',
  //   },
  // },
  {
    path: '/scrna',
    name: 'scrna',
    component: Layout,
    redirect: '/scrna/seuratv3',
    meta: {
      hidden: false,
      title: 'scRNA',
      icon: 'DataAnalysis',
      svg: 'scRNA',
    },
    children: [
      {
        path: '/scrna/azimuth',
        name: 'Azimuth',
        component: () => import('@/views/scRNA/Azimuth.vue'),
        meta: { title: 'HLCA', icon: 'Picture', svg: 'cell' },
      },
      {
        path: '/scrna/lca',
        name: 'lca',
        component: () => import('@/views/scRNA/index.vue'),
        meta: { title: 'LCA', icon: 'Picture', svg: 'cell' },
      },
      {
        path: '/scrna/seuratv3',
        name: 'seuratv3',
        component: () => import('@/views/scRNA/seuratv3.vue'),
        meta: { title: 'Seuratv3', icon: 'Picture', svg: 'cell' },
      },
    ],
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: Layout,
    redirect: '/echarts/mixlinebar',
    meta: {
      hidden: false,
      title: 'Echarts',
      icon: 'DataAnalysis',
      svg: 'diagram',
    },
    children: [
      {
        path: '/echarts/mixlinebar',
        name: 'MixLineBar',
        component: () => import('@/views/echarts/MixLineBar.vue'),
        meta: { title: 'Mix-Line-Bar', icon: 'Picture', svg: 'plot' },
      },
      {
        path: '/echarts/multiy',
        name: 'MultiY',
        component: () => import('@/views/echarts/MultiY.vue'),
        meta: { title: 'Multi-Y', icon: 'Picture', svg: 'plot' },
      },
    ],
  },
  {
    path: '/air',
    name: 'Air',
    component: Layout,
    redirect: '/air/aqi',
    children: [
      {
        path: '/air/aqi',
        name: 'AQI',
        component: () => import('@/views/echarts/mapAirLink.vue'),
        meta: { title: 'Air Quality', icon: 'Picture', svg: 'weather' },
      },
    ],
  },
  {
    path: '/lab',
    name: 'lab',
    component: Layout,
    redirect: '/lab/phone',
    children: [
      {
        path: '/lab/phone',
        name: 'phone',
        component: () => import('@/views/Shinytools/phone.vue'),
        meta: { title: 'phone numbers', icon: 'Picture', svg: 'phone' },
      },
    ],
  },
]
