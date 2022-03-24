import { Row } from 'antd';

function Content({ children, extraContent }) {
    return (
        <Row>
            <div style={{ flex: 1 }}>{children}</div>
            <div className="image">{extraContent}</div>
        </Row>
    );
}

export default Content;
