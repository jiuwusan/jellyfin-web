import './style.scss'
import Search from './Search'
import ListView from './ListView'

const PtMediaSearch = () => {
    // 媒体搜索
    return <div className='pt-page-box'>
        <Search></Search>
        <ListView></ListView>
    </div>
}

export default PtMediaSearch