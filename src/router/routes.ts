import Layout from '@/Layout/index.vue'
export const constantRoute = [
  // login
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
  // Layout home
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
  // 404
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
  // Any → 404
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
  // RNAseq
  {
    path: '/rnaseq',
    name: 'RNAseq',
    component: Layout,
    redirect: '/rnaseq/info',
    meta: { title: 'RNAseq', hidden: false, icon: '', svg: 'rna' },
    children: [
      {
        path: '/rnaseq/info',
        name: 'rnaseqinfo',
        component: () => import('@/views/RNAseq/index.vue'),
        meta: { title: 'Information', icon: 'Picture', svg: 'setting' },
      },
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
        meta: { title: 'Limma', icon: 'Picture', svg: 'dna' },
      },
      {
        path: '/rnaseq/deseq2',
        name: 'deseq2',
        component: () => import('@/views/RNAseq/DEseq2.vue'),
        meta: { title: 'DEseq2', icon: 'Picture', svg: 'dna' },
      },
    ],
  },
  // Clinic
  {
    path: '/clinic',
    name: 'Clinic',
    component: Layout,
    redirect: '/clinic/info',
    meta: {
      title: 'Clinic Data',
      hidden: false,
      icon: '',
      svg: 'hospital',
    },
    children: [
      {
        path: '/clinic/info',
        name: 'clinicinfo',
        component: () => import('@/views/ClinicData/index.vue'),
        meta: { title: 'Information', icon: 'Picture', svg: 'setting' },
      },
      {
        path: '/clinic/atelectasis',
        name: 'Atelectasis',
        component: () => import('@/views/ClinicData/Atelectasis.vue'),
        meta: { title: 'Atelectasis', icon: 'Picture', svg: 'lungs' },
      },
      {
        path: '/clinic/mycoplasma',
        name: 'Mycoplasma',
        component: () => import('@/views/ClinicData/Mycoplasma.vue'),
        meta: { title: 'Mycoplasma', icon: 'Picture', svg: 'lungs' },
      },
      {
        path: '/clinic/who',
        name: 'who',
        component: () => import('@/views/ClinicData/WHOMortality.vue'),
        meta: {
          title: 'WHO Data',
          icon: 'Picture',
          svg: 'world-health-organization',
        },
      },
      {
        path: '/clinic/covid19',
        name: 'covid19',
        component: () => import('@/views/ClinicData/Covid19.vue'),
        meta: { title: 'Covid-19', icon: 'Picture', svg: 'virus' },
      },
    ],
  },
  // shiny
  {
    path: '/graphmed',
    name: 'graphmed',
    component: Layout,
    redirect: '/graphmed/omics',
    meta: { title: 'GraphMed', icon: 'Platform', svg: 'analysis' },
    children: [
      {
        path: '/graphmed/info',
        name: 'graphmedinfo',
        component: () => import('@/views/GraphMed/index.vue'),
        meta: { title: 'Information', icon: 'Picture', svg: 'setting' },
      },
      {
        path: '/graphmed/omics',
        name: 'omics',
        component: () => import('@/views/GraphMed/Omics.vue'),
        meta: { title: 'Omics', icon: 'Picture', svg: 'rna' },
      },
      {
        path: '/graphmed/clinic',
        name: 'clinic',
        component: () => import('@/views/GraphMed/Clinic.vue'),
        meta: { title: 'Clinic', icon: 'Picture', svg: 'hospital' },
      },
      {
        path: '/graphmed/labtools',
        name: 'labtools',
        component: () => import('@/views/GraphMed/Labtools.vue'),
        meta: { title: 'Lab. tools', icon: 'Picture', svg: 'lab' },
      },
      {
        path: '/graphmed/ggplot',
        name: 'ggplot',
        component: () => import('@/views/GraphMed/ggplot.vue'),
        meta: { title: 'Basic plot', icon: 'Picture', svg: 'chart' },
      },
      {
        path: '/graphmed/tools',
        name: 'tools',
        component: () => import('@/views/GraphMed/showTools.vue'),
        meta: { title: 'tools', hidden: true, icon: 'Picture' },
      },
    ],
  },
  // scRNA
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
  // echarts
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
  // air
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
    redirect: '/lab/info',
    children: [
      {
        path: '/lab/info',
        name: 'LAB',
        component: () => import('@/views/Lab/index.vue'),
        meta: { title: 'Lab. Information', icon: 'Picture', svg: 'weather' },
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
]
