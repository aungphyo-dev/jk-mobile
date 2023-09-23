import {useParams} from "react-router-dom";

const Detail = () => {
    const {id} = useParams()
    return (
        <section>
            {id}
        </section>
    );
};

export default Detail;
