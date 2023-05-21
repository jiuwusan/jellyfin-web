import { FunctionComponent, useMemo } from 'react'
import throttle from 'lodash-es/throttle';

const LoadingIcon = 'loading'

const Button: FunctionComponent<any> = (props) => {
    const { children, className = '', loading, onClick, ...rest } = props;

    // 节流
    const bindEvent = useMemo(() => throttle(onClick, 400), [onClick]);

    return <button type="button" className={'pt-default-button ' + className} onClick={bindEvent} {...rest}>
        {loading && <span>
            <img className='pt-btn-loading' src={LoadingIcon} alt="loading" />
        </span>}
        <span>{children}</span>
    </button>
}

export default Button