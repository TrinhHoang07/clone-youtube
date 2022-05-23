import HeaderChannel from "../HeaderChannel";


function Layout({ children }) {
    return (
        <div className="layout" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <HeaderChannel />
            <div className="content-layout" style={{ flex: 1 }}>
                {children}
            </div>
        </div>
    );
}

export default Layout;