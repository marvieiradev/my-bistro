export default function PlatePopup({ plateData,  onAddToCart }) {

    return(
        <div open={true} className="rounded-3xl">
            <div className="bg-[#faf0ca] text-[#004643]">
                <img src={plateData.imgUrl} alt="" className="h-75 w-full object-cover"/>
                <div className="flex flex-col gap-4 p-4!">
                    <h2>{plateData.name}</h2>
                    <p className="text-[#777777]">[{String(plateData.ingredients)}]</p>
                    <p>{plateData.description}</p>
                    <h2>$ {plateData.price}</h2>
                    <button onClick={() => { onAddToCart(plateData) }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}