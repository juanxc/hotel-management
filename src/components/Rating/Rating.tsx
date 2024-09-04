import { FC } from "react"
import { FaStar } from "react-icons/fa";

type Props = {
    rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;

    // const fullStarElements = Array(fullStars).fill(<FaStar />);
    const fullStarElements = Array.from(Array(fullStars), (_, i) => <FaStar key={i} />) ;

    let halfStarElement = null;

    if (decimalPart > 0) {
        halfStarElement = <FaStar />;
    }

    return (
        <>
            {fullStarElements} {halfStarElement}
        </>
    )
}

export default Rating