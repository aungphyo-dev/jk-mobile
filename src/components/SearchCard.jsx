import {Link} from "react-router-dom";

const SearchCard = ({product,setSearchOpen}) => {
    return (
        <article className="rounded-xl border border-gray-100 bg-white mb-4" onClick={()=>setSearchOpen(false)}>
            <div className="flex items-start gap-4 p-2 sm:p-6 lg:p-2">
                <Link to={`/detail/${product.id}`} className="block shrink-0">
                    <img
                        alt="Speaker"
                        src={`https://lsultulaeaayauzvcajj.supabase.co/storage/v1/object/public/products/items/${product.image}`}
                        className="h-14 w-14 rounded-lg object-contain"
                    />
                </Link>

                <div>
                    <h3 className="font-medium sm:text-lg">
                        <Link to={`/detail/${product.id}`} className="hover:underline">
                            {product.name}
                        </Link>
                    </h3>

                    <p className="line-clamp-2 text-sm text-gray-700">
                        Ram - {product.ram} | Rom - {product.rom}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default SearchCard;
