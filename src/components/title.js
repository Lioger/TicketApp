import { Link } from 'react-router-dom';

const Title = () => {
    return(
        <Link to={'/'} className="link">
            <div className="title_main title">
                Tickets
            </div>
        </Link>
    )
};

export default Title;