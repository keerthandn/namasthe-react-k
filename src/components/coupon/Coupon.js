import "./coupon.css";
const Coupon = (props) => {
  const { aggregatedDiscountInfo, aggregatedDiscountInfoV2 } = props;
  return (
    <div className="coupon-container">
      {aggregatedDiscountInfo?.descriptionList.map((item) => (
        <div className="coupon" key={item.meta}>
          <h3 className="name">{item.meta.split("|")[0]}</h3>
          <h3 className="description">{item.meta.split("|")[1]}</h3>
        </div>
      ))}
    </div>
  );
};

export default Coupon;
