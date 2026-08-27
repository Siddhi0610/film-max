import "./Product.css";

function Product() {
  return (
    <div className="product-page">
      <h1>Choose Your Plan</h1>

      <div className="pricing-container">

        <div className="pricing-card">
          <h2>Free</h2>
          <h3>₹0</h3>

          <ul>
            <li>Basic scene management</li>
            <li>Basic casting</li>
            <li>Limited projects</li>
          </ul>

          <button>Get Started</button>
        </div>


        <div className="pricing-card">
          <h2>Standard</h2>
          <h3>₹499/month</h3>

          <ul>
            <li>Advanced scene management</li>
            <li>Casting management</li>
            <li>Wardrobe management</li>
            <li>Multiple projects</li>
          </ul>

          <button>Choose Plan</button>
        </div>


        <div className="pricing-card">
          <h2>Premium</h2>
          <h3>₹999/month</h3>

          <ul>
            <li>Unlimited projects</li>
            <li>Advanced analytics</li>
            <li>Team collaboration</li>
            <li>Priority support</li>
          </ul>

          <button>Choose Plan</button>
        </div>

      </div>
    </div>
  );
}

export default Product;