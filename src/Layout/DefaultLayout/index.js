import Header from './Header';
import BarLeft from './BarLeft';
import './DefaultLayout.scss';
function DefaultLayout({ children }) {
    return (
        <div className="default">
            <Header />
            <div className="container">
                <BarLeft />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;