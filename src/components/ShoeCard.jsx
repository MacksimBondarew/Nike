const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
  return (
    <div className={`border-2 rounded-xl ${bigShoeImage === imageURL ? "border-coral-red" : "border-transparent"}`}></div>
  )
}

export default ShoeCard