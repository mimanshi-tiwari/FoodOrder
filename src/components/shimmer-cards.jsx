const ShimmerCards = ({skeletonNumber, width = "200px", height="200px"}) => {    
    return (
        <div className="shimmer-cards-container">
            {[...Array(skeletonNumber)].map((_, index) => (
                <div key={index} className="shimmer-card" style={{width: width, height: height}}>
                    <div className="shimmer-stroke"></div>
                </div>
            ))}
        </div>
    );
}
export default ShimmerCards;