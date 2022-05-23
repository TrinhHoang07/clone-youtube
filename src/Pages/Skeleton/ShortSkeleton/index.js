import './ShortSkeleton.scss';
import clsx from 'clsx'

function ShortSkeleton() {
    return (
        <div className="containerShortSkeleton">
            <div className="loader">
                <div className={clsx("inner", "one")}></div>
                <div className={clsx("inner", "two")}></div>
                <div className={clsx("inner", "three")}></div>
            </div>
        </div>
    );
}

export default ShortSkeleton;