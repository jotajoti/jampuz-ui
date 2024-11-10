import {Link} from "react-router-dom";

type DefaultNavTitleProps = {
    to?: string
}

export const DefaultNavTitle = (props: DefaultNavTitleProps) => {
    const to = props.to || "/";

    return (
        <Link to={to} className="btn btn-ghost text-xl">Jampuz</Link>
    );
}