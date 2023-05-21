import Button from './Button'
import { useRef, FunctionComponent, ReactNode } from 'react'

/**
 * props 数据类型 
 */
type SearchProps = {
    onSearch?: (keyword: string | undefined) => void,
    loading?: Boolean
}

/**
 * 搜索组件
 * @param props 
 * @returns 
 */
const Search: FunctionComponent<SearchProps> = (props) => {
    const { onSearch, loading } = props
    // 接收一个 Dom 结构
    const InputDom = useRef<HTMLInputElement>();

    const handleClick = () => {
        let value: string | undefined = InputDom.current && InputDom.current.value;
        onSearch && onSearch(value)
    }

    return <div className="pt-seach-box">
        <div className="pt-seach-box-fixed">
            <input type="text" className='pt-seach-input' placeholder='请输入关键词' />
            <Button className='pt-search-btn' loading={loading} onClick={handleClick}>
                <span>
                    搜索{loading && '中'}
                </span>
            </Button>
        </div>
    </div>
}

export default Search