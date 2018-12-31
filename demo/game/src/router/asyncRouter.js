import Loadable from 'react-loadable';
import Loading from '@/components/Loading';

// 主页
const Home = Loadable({
    loader: () => import('@/views/Home'),
    loading: Loading,
});

// 游戏页
const Lottery = Loadable({
    loader: () => import('@/views/Lottery'),
    loading: Loading,
});

// 图表分析
const Chart = Loadable({
    loader: () => import('@/views/Chart'),
    loading: Loading,
});

export default {
    Home,
    Lottery,
    Chart
}